import { useState } from "react";
import { Alert } from "react-native";
import { pushRecommendation } from "../../../utils/api";
import { useAuthStore } from "../../../utils/store";
import { UserAbv } from "../../../utils/types";
import { parseBookToMediaItem } from "../../../utils/utils";
import { Book } from "../domain/types";

export const useBookRecommendationModal = () => {
  const [selectedFollowers, setSelectedFollowers] = useState<string[]>([]);
  const user = useAuthStore((state) => state.user);

  const toggleSelection = (email: string) => {
    setSelectedFollowers((prev) =>
      prev.includes(email) ? prev.filter((i) => i !== email) : [...prev, email]
    );
  };

  const toggleAll = (followers: UserAbv[]) => {
    if (selectedFollowers.length === followers?.length) {
      setSelectedFollowers([]);
    } else {
      setSelectedFollowers(followers.map((f) => f.email));
    }
  };

  const handlePushRecommendation = async (book: Book | undefined) => {
    if (!book) {
      console.log("Error: There is no book set to recommend");
      Alert.alert(
        "Sorry, something went wrong. Please try that recommendation again."
      );
      return;
    } else if (!user?.email) {
      console.log("Error: no user");
      Alert.alert(
        "You don't seem to be logged in. Please log in and try again."
      );
      return;
    }
    const mediaItem = parseBookToMediaItem(book);

    await pushRecommendation({
      userEmail: user?.email,
      sendToEmails: selectedFollowers,
      item: mediaItem,
    });
  };

  return {
    selectedFollowers,
    setSelectedFollowers,
    toggleSelection,
    toggleAll,
    handlePushRecommendation,
  };
};
