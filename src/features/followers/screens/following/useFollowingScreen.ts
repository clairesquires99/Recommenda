import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { createNewFollow, getFollowing } from "../../../../utils/api";
import { useAuthStore } from "../../../../utils/store";
import { UserType } from "../../../../utils/types";

export const useFollowingScreen = () => {
  const [toFollowEmail, setToFollowEmail] = useState("");
  const [following, setFollowing] = useState<UserType[] | undefined>([]);
  const [isModalVisible, setModalVisible] = useState(false);

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

    toggleModal();
    fetchFollowing();
    Toast.show({
      type: "success",
      text1: "New follow!",
      text2: `You're now following ${toFollowEmail}`,
    });
  };

  const toggleModal = () => setModalVisible(!isModalVisible);

  return {
    toFollowEmail,
    setToFollowEmail,
    following,
    user,
    handleNewFollow,
    isModalVisible,
    toggleModal,
  };
};
