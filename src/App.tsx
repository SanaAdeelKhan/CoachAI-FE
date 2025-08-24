import React, { useState } from "react";
import CoverPage from "./components/CoverPage";
import SecondPage from "./components/SecondPage";

const App: React.FC = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);

  const handleStart = () => {
    setShowSecondPage(true);
  };

  return (
    <div className="h-screen w-screen">
      {!showSecondPage ? (
        <CoverPage onStart={handleStart} />
      ) : (
        <SecondPage />
      )}
    </div>
  );
};

export default App;
