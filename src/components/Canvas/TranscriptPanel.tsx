import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface TranscriptStep {
  text: string;
  timestamp: string;
  shape?: string;
  color?: string;
}

interface TranscriptPanelProps {
  steps: TranscriptStep[];
  onReplay: (text: string) => void;
}

const TranscriptPanel: React.FC<TranscriptPanelProps> = ({ steps, onReplay }) => {
  const exportToPDF = () => {
    const element = document.getElementById("transcript-content");
    if (!element) return;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("transcript.pdf");
    });
  };

  return (
    <div className="w-64 h-full border-l border-gray-300 overflow-y-auto p-2 flex flex-col">
      {/* Header with Export Button on Right */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-bold">Transcript</h2>
        <button
          onClick={exportToPDF}
          className="px-2 py-1 bg-blue-600 text-white rounded shadow hover:bg-blue-700 text-sm"
        >
          Export
        </button>
      </div>

      {/* Transcript content */}
      <div id="transcript-content" className="flex-1 overflow-y-auto">
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
    </div>
  );
};

export default TranscriptPanel;
