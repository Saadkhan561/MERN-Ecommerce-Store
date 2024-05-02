import { loginUser, signupUser } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = (options) => {
  return useMutation({
    mutationFn: loginUser,
    ...options,
  });
};

export const useSignupMutation = (options) => {
  return useMutation({
    mutationFn: signupUser,
    ...options,
  });
};
