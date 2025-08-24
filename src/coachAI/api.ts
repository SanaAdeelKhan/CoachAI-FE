const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export interface ChatResponse {
  message: string;
  timestamp: string;
}

export const sendMessage = async (userInput: string): Promise<ChatResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Chat API error:", error);
    return { message: "Error: Unable to send message", timestamp: new Date().toISOString() };
  }
};
