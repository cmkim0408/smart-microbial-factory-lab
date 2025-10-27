import { useState } from "react";
import { Globe } from "lucide-react";

export default function HeaderBar() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "KR" : "EN"));
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-lg border-b border-gray-200 flex items-center justify-between px-8 z-50">
      {/* Lab name */}
      <h1 className="text-lg md:text-2xl font-bold text-blue-800">
        Smart Microbial Factory & Biofoundry Lab
      </h1>

      {/* Language toggle */}
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 px-3 py-2 text-blue-800 border border-blue-400 rounded-md hover:bg-blue-100 transition"
      >
        <Globe size={18} />
        <span>{language}</span>
      </button>
    </header>
  );
}
