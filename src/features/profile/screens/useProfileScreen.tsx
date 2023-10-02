import { useState } from "react";
import { useAuthStore } from "../../../utils/store";

export const useProfileScreen = () => {
  const user = useAuthStore((state) => state.user);

  return { user };
};
