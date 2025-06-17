import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard", { replace: true });
      toast.success("Login successful");
    },
    onError: (error) => {
      console.log(error.message, "ERROR!!!");
      toast.error(error.message || "Login failed");
    },
  });

  return { isPending, login };
}
