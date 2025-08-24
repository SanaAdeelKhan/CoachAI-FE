import React, { useState } from "react";

interface ChatBotProps {
  onCommand: (command: string) => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onCommand }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onCommand(input.trim());
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="absolute bottom-4 right-4 w-64 bg-white border border-gray-400 rounded p-2 shadow-lg">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border border-gray-300 rounded p-1"
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-500 text-white px-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
