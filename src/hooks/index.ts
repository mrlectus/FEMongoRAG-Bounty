import { useMutation } from "@tanstack/react-query";
import { chat } from "../service/api";

export const useChat = () => {
  return useMutation({
    mutationKey: ["chat"],
    mutationFn: ({ message }: { message: string }) => chat({ message }),
  });
};
