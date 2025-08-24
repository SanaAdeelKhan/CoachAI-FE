import React, { useState } from "react";
import Ribbon from "./Canvas/Ribbon";
import CanvasArea from "./Canvas/CanvasArea";
import Chatbot from "./Canvas/Chatbot";
import TranscriptPanel from "./Canvas/TranscriptPanel";

const SecondPage: React.FC = () => {
  const [shape, setShape] = useState("circle");
  const [color, setColor] = useState("red");
  const [transcript, setTranscript] = useState<{ text: string; timestamp: string; shape: string; color: string }[]>([]);
  const [replayStep, setReplayStep] = useState<{ shape: string; color: string } | undefined>(undefined);

  const handleCommand = (cmd: string) => {
    let newShape = shape;
    let newColor = color;

    if (cmd.toLowerCase().includes("circle")) newShape = "circle";
    if (cmd.toLowerCase().includes("square")) newShape = "square";
    if (cmd.toLowerCase().includes("triangle")) newShape = "triangle";

    if (cmd.toLowerCase().includes("red")) newColor = "red";
    if (cmd.toLowerCase().includes("green")) newColor = "green";
    if (cmd.toLowerCase().includes("blue")) newColor = "blue";

    setShape(newShape);
    setColor(newColor);

    const time = new Date().toLocaleTimeString();
    setTranscript(prev => [...prev, { text: cmd, timestamp: time, shape: newShape, color: newColor }]);
  };

  const handleReplay = (stepIdx: number) => {
    const step = transcript[stepIdx];
    if (!step) return;
    setReplayStep({ shape: step.shape, color: step.color });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-200 border-b border-gray-300">
        <h1 className="text-2xl font-bold">CoachAI</h1>
      </div>

      {/* Ribbon */}
      <Ribbon shape={shape} color={color} setShape={setShape} setColor={setColor} />

      {/* Main Content */}
      <div className="flex flex-1 relative">
        {/* Chatbot on the left */}
        <div className="w-1/4 border-r border-gray-300">
          <Chatbot onCommand={handleCommand} />
        </div>

        {/* Canvas in center */}
        <div className="flex-1 flex justify-center items-center">
          <CanvasArea shape={shape} color={color} replayStep={replayStep} />
        </div>

        {/* Transcript on the right */}
        <div className="w-1/4 border-l border-gray-300">
          <TranscriptPanel
            steps={transcript}
            onReplay={(cmdText) => {
              const idx = transcript.findIndex(s => s.text === cmdText);
              handleReplay(idx);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
