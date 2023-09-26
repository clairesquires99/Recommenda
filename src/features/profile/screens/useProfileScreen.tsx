import { useState } from "react";

export const useProfileScreen = () => {
  const [toFollowEmail, setToFollowEmail] = useState("");
  return { toFollowEmail, setToFollowEmail };
};
