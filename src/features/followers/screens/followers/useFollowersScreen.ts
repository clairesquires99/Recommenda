import { useEffect, useState } from "react";
import { getFollowers } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { UserType } from "../../../../utils/types";

export const useFollowersScreen = () => {
  const user = useAuthStore((state) => state.user);
  const [followers, setFollowers] = useState<UserType[] | undefined>();
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const f = await getFollowers(user);
        setFollowers(f);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowers();
  }, []);

  return { user, followers };
};
