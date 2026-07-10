import { useMutation } from "@tanstack/react-query";
import { login } from "@/features/auth/api/authApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
