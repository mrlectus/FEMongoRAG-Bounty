import { useMutation } from "@tanstack/react-query";
import { chat } from "../service/api";

export const useChat = () => {
  // Custom hook for handling chat functionality
  return useMutation({
    mutationKey: ["chat"], // Key for chat mutation
    mutationFn: ({ message }: { message: string }) => chat({ message }), // Function to handle chat messages
  });
};
