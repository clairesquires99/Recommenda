import Toast from "react-native-toast-message";
import { supabase } from "supabaseConfig";
import { MediaItemType, MediaType, RecommendedItemType, UserType } from "src/utils/types";

// ── Auth ─────────────────────────────────────────────────────

export const findUserByEmail = async (
  email: string
): Promise<UserType | null> => {
  const { data } = await supabase
    .from("users")
    .select("id, name, email")
    .eq("email", email)
    .maybeSingle();
  if (!data) return null;
  return { id: data.id, name: data.name, email: data.email };
};

export const findOrCreateUser = async ({
  name,
  email,
}: {
  name: string;
  email: string;
}): Promise<UserType> => {
  const existing = await findUserByEmail(email);
  if (existing) return existing;

  const { data, error } = await supabase
    .from("users")
    .insert({ name, email })
    .select("id, name, email")
    .single();

  if (error || !data) {
    console.log("Failed to create user:", JSON.stringify(error, null, 2));
    throw new Error(`Failed to create user: ${error?.message} (code: ${error?.code})`);
  }
  return { id: data.id, name: data.name, email: data.email };
};

// ── Account deletion ─────────────────────────────────────────
// on delete cascade removes follows; on delete set null nullifies recommendation FKs

export const removeUserFromUsersTable = async (email: string) => {
  try {
    const { error } = await supabase.from("users").delete().eq("email", email);
    if (error) throw error;
    console.log("User deleted from DB");
  } catch (error) {
    console.log("Error deleting user from DB:", error);
  }
};

// ── Follows ───────────────────────────────────────────────────

interface CreateNewFollowProps {
  user: UserType;
  followingEmail: string;
  setToFollowEmail: (text: string) => void;
}

export const createNewFollow = async ({
  user,
  followingEmail,
  setToFollowEmail,
}: CreateNewFollowProps): Promise<{ success: boolean; error?: string }> => {
  const lowercaseFollowingEmail = followingEmail.toLowerCase();

  if (lowercaseFollowingEmail === user.email) {
    return { success: false, error: "You can't follow yourself." };
  }

  const { data: followingUser, error: lookupError } = await supabase
    .from("users")
    .select("id, name, email")
    .eq("email", lowercaseFollowingEmail)
    .maybeSingle();

  if (lookupError || !followingUser) {
    return { success: false, error: `No user found with that email address.` };
  }

  const { data: existing } = await supabase
    .from("follows")
    .select("id")
    .eq("follower_id", user.id)
    .eq("following_id", followingUser.id)
    .maybeSingle();

  if (existing) {
    return { success: false, error: `You're already following ${lowercaseFollowingEmail}.` };
  }

  const { error } = await supabase.from("follows").insert({
    follower_id: user.id,
    following_id: followingUser.id,
  });

  if (error) {
    console.log("Error creating follow:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  setToFollowEmail("");
  return { success: true };
};

export const getFollowing = async (
  user: UserType | null
): Promise<UserType[] | undefined> => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const { data } = await supabase
    .from("follows")
    .select("following:following_id(id, name, email)")
    .eq("follower_id", user.id);
  if (!data || data.length === 0) return [];
  return data.map((row) => row.following as UserType);
};

export const getFollowers = async (
  user: UserType | null
): Promise<UserType[] | undefined> => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const { data } = await supabase
    .from("follows")
    .select("follower:follower_id(id, name, email)")
    .eq("following_id", user.id);
  if (!data || data.length === 0) return [];
  return data.map((row) => row.follower as UserType);
};

// ── Recommendations ───────────────────────────────────────────

interface PushRecommendationProps {
  userId: string;
  sendToEmails: string[];
  item: MediaItemType;
}

export const pushRecommendation = async ({
  userId,
  sendToEmails,
  item,
}: PushRecommendationProps) => {
  if (!userId || sendToEmails.length === 0) return;

  const { data: recipients } = await supabase
    .from("users")
    .select("id, email")
    .in("email", sendToEmails);

  if (!recipients || recipients.length === 0) return;

  const duplicateEmails = await findDuplicateRecommendations({
    fromUserId: userId,
    recipients,
    item,
  });

  const newRecipients = recipients.filter((r) => !duplicateEmails.includes(r.email));

  await Promise.all(
    newRecipients.map((recipient) =>
      supabase.from("recommendations").insert({
        from_user_id: userId,
        to_user_id: recipient.id,
        media_type: String(item.type),
        title: item.title,
        creator: item.author?.join(", ") ?? "",
        external_id: item.id,
        image_uri: item.image ?? "",
      })
    )
  );

  if (duplicateEmails.length > 0)
    Toast.show({
      type: "error",
      text1: "Already recommended",
      text2: `You've already recommended this to: ${duplicateEmails.join(", ")}`,
    });
};

interface FindDuplicateRecommendationsProps {
  fromUserId: string;
  recipients: { id: string; email: string }[];
  item: MediaItemType;
}

const findDuplicateRecommendations = async ({
  fromUserId,
  recipients,
  item,
}: FindDuplicateRecommendationsProps): Promise<string[]> => {
  const duplicates: string[] = [];
  for (const recipient of recipients) {
    try {
      const { data } = await supabase
        .from("recommendations")
        .select("id")
        .eq("from_user_id", fromUserId)
        .eq("to_user_id", recipient.id)
        .eq("external_id", item.id)
        .maybeSingle();
      if (data) duplicates.push(recipient.email);
    } catch (error) {
      console.error(`Error checking duplicate for ${recipient.email}:`, error);
    }
  }
  return duplicates;
};

export const getRecommendationsToMe = async (
  user: UserType | null
): Promise<RecommendedItemType[] | undefined> => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const { data } = await supabase
    .from("recommendations")
    .select("*, from_user:from_user_id(id, name, email)")
    .eq("to_user_id", user.id);
  if (!data || data.length === 0) return [];
  return data.map((row) => ({
    id: row.external_id,
    type: Number(row.media_type) as MediaType,
    image: row.image_uri ?? "",
    title: row.title,
    author: row.creator ? row.creator.split(", ") : [],
    recommender: (row.from_user as UserType | null)?.name ?? "Deleted user",
  }));
};

export const getRecommendationsByMe = async (
  user: UserType | null
): Promise<RecommendedItemType[] | undefined> => {
  if (!user) {
    console.log("No user set");
    return;
  }
  const { data } = await supabase
    .from("recommendations")
    .select("*, to_user:to_user_id(id, name, email)")
    .eq("from_user_id", user.id);
  if (!data || data.length === 0) return [];
  return data.map((row) => ({
    id: row.external_id,
    type: Number(row.media_type) as MediaType,
    image: row.image_uri ?? "",
    title: row.title,
    author: row.creator ? row.creator.split(", ") : [],
    recommender: (row.to_user as UserType | null)?.name ?? "Deleted user",
  }));
};
