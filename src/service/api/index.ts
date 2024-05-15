import { config } from "../../config";

export type ChatResponse = {
  answer: string;
};

export const chat = async ({ message }: { message: string }) => {
  // Send a POST request to the chat endpoint with the user's message
  const response = await fetch(`${config.BASE_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  // Check if the response is successful; if not, throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  // Parse the response as JSON and return it as ChatResponse
  const answer = await response.json();
  return answer as ChatResponse;
};
