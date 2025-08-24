import React from "react";
import { FaCircle, FaSquare, FaPlay } from "react-icons/fa";

interface RibbonProps {
  shape: string;
  color: string;
  setShape: (shape: string) => void;
  setColor: (color: string) => void;
}

const Ribbon: React.FC<RibbonProps> = ({ shape, color, setShape, setColor }) => {
  return (
    <div className="flex items-center p-2 bg-gray-100 border-b border-gray-300 space-x-4">
      {/* Shapes */}
      <div className="flex space-x-2">
        <button
          className={`p-2 border rounded ${shape === "circle" ? "bg-blue-200" : ""}`}
          onClick={() => setShape("circle")}
          title="Circle"
        >
          <FaCircle />
        </button>
        <button
          className={`p-2 border rounded ${shape === "square" ? "bg-blue-200" : ""}`}
          onClick={() => setShape("square")}
          title="Square"
        >
          <FaSquare />
        </button>
        <button
          className={`p-2 border rounded ${shape === "triangle" ? "bg-blue-200" : ""}`}
          onClick={() => setShape("triangle")}
          title="Triangle"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L2 22 H22 Z" />
          </svg>
        </button>
      </div>

      {/* Colors */}
      <div className="flex space-x-2">
        <button
          className="w-6 h-6 rounded-full bg-red-500 border"
          onClick={() => setColor("red")}
        />
        <button
          className="w-6 h-6 rounded-full bg-green-500 border"
          onClick={() => setColor("green")}
        />
        <button
          className="w-6 h-6 rounded-full bg-blue-500 border"
          onClick={() => setColor("blue")}
        />
      </div>
    </div>
  );
};

export default Ribbon;
