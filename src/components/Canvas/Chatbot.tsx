// src/components/Canvas/Chatbot.tsx
import React, { useState } from "react";

interface ChatbotProps {
  onCommand: (cmd: string) => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onCommand }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onCommand(input); // send command to parent
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-white border rounded-lg shadow-lg flex flex-col">
      <div className="p-2 font-bold bg-blue-500 text-white rounded-t-lg">CoachAI Chat</div>
      <div className="flex-1 p-2 overflow-y-auto h-64">{/* chat log */}</div>
      <div className="flex border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a command..."
          className="flex-1 p-2 focus:outline-none"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
