import { useState } from "react";
import { pushRecommendation } from "../../../utils/api";
import { useAuthStore } from "../../../utils/store";
import { UserAbv } from "../../../utils/types";
import { parseBookToMediaItem } from "../../../utils/utils";
import { Book } from "../domain/types";

export const useBookRecommendationModal = () => {
  const [error, setError] = useState<string>();
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

  const handlePushRecommendation = async (
    book: Book | undefined,
    onClose: () => void
  ) => {
    if (!book) {
      console.log("Error: There is no book set to recommend.");
      setError(
        "Sorry, something went wrong. Please try that recommendation again."
      );
      return;
    } else if (!user?.email) {
      console.log("Error: no user");
      setError("You don't seem to be logged in. Please log in and try again.");
      return;
    } else if (selectedFollowers.length <= 0) {
      console.log("Error: No followers selected");
      setError(
        "Please select at least one follower to send this recommendation to."
      );
      return;
    }
    const mediaItem = parseBookToMediaItem(book);

    await pushRecommendation({
      userEmail: user?.email,
      sendToEmails: selectedFollowers,
      item: mediaItem,
    });

    onClose();
  };

  return {
    error,
    selectedFollowers,
    setSelectedFollowers,
    toggleSelection,
    toggleAll,
    handlePushRecommendation,
  };
};
