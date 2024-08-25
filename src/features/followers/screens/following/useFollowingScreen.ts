import { useEffect, useState } from "react";
import { getFollowing } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { UserType } from "../../../../utils/types";

export const useFollowingScreen = () => {
  const [toFollowEmail, setToFollowEmail] = useState("");
  const [following, setFollowing] = useState<UserType[] | undefined>([]);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const f = await getFollowing(user);
        setFollowing(f);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowing();
  }, []);

  return { toFollowEmail, setToFollowEmail, following, user };
};
