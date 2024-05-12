import { config } from "../../config";

export type ChatResponse = {
  answer: string;
};

export const chat = async ({ message }: { message: string }) => {
  const response = await fetch(`${config.BASE_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const answer = await response.json();
  return answer as ChatResponse;
};
