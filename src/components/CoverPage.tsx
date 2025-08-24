import React from "react";
import HeroImage from "../assets/images/HeroImage.jpeg";

interface CoverPageProps {
  onStart: () => void;
}

const CoverPage: React.FC<CoverPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-600 to-indigo-400 text-white">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-4 text-center">CoachAI: Powered By GPT-5 Agent Mode</h1>
      {/* Tagline */}
      <p className="text-xl mb-8 text-center">
        From Confused to Confident <br />
        Learn By Doing Faster
      </p>
      {/* Hero Image */}
      <img src={HeroImage} alt="Hero" className="w-96 h-auto mb-8 rounded-xl shadow-lg" />
      {/* Start Button */}
      <button
        onClick={onStart}
        className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-all"
      >
        Start
      </button>
    </div>
  );
};

export default CoverPage;
