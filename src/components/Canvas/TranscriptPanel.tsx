import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface TranscriptStep {
  text: string;
  timestamp: string;
  shape?: string; // optional if you want to include shape info
  color?: string; // optional if you want to include color info
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
      <h2 className="font-bold mb-2">Transcript</h2>

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

      {/* Export button */}
      <button
        onClick={exportToPDF}
        className="mt-2 px-3 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        Export to PDF
      </button>
    </div>
  );
};

export default TranscriptPanel;
