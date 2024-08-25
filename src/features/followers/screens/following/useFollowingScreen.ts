import { useCallback, useEffect, useState } from "react";
import { createNewFollow, getFollowing } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { UserType } from "../../../../utils/types";

export const useFollowingScreen = () => {
  const [toFollowEmail, setToFollowEmail] = useState("");
  const [following, setFollowing] = useState<UserType[] | undefined>([]);
  const user = useAuthStore((state) => state.user);

  const fetchFollowing = useCallback(async () => {
    try {
      const f = await getFollowing(user);
      setFollowing(f);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchFollowing();
  }, [fetchFollowing]);

  const handleNewFollow = async () => {
    if (!user) return;

    await createNewFollow({
      user: user,
      followingEmail: toFollowEmail,
      setToFollowEmail: setToFollowEmail,
    });

    fetchFollowing();
  };

  return { toFollowEmail, setToFollowEmail, following, user, handleNewFollow };
};
