import React from "react";

interface TranscriptPanelProps {
  steps: { text: string; timestamp: string }[];
  onReplay: (text: string) => void;
}

const TranscriptPanel: React.FC<TranscriptPanelProps> = ({ steps, onReplay }) => {
  return (
    <div className="w-64 h-full border-l border-gray-300 overflow-y-auto p-2">
      <h2 className="font-bold mb-2">Transcript</h2>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="p-1 hover:bg-gray-200 cursor-pointer rounded"
          onMouseEnter={() => onReplay(step.text)}
        >
          <div className="text-sm">{step.text}</div>
          <div className="text-xs text-gray-500">{step.timestamp}</div>
        </div>
      ))}
    </div>
  );
};

export default TranscriptPanel;
