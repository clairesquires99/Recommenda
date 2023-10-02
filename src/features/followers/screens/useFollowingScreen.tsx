import { useState } from "react";
import { useAuthStore } from "../../../utils/store";

export const useFollowingScreen = () => {
  const [toFollowEmail, setToFollowEmail] = useState("");
  const user = useAuthStore((state) => state.user);

  return { toFollowEmail, setToFollowEmail, user };
};
