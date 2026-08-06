import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MoodSection from "../components/MoodSection";
import LanguageSelector from "../components/LanguageSelector";
import AIRecommendation from "../components/AIRecommendation";
import AIChatBot from "../components/AIChatBot";
import About from "../components/About";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

import { useTheme } from "../context/ThemeContext";

function Home() {
  const { theme } = useTheme();

  const [selectedMood, setSelectedMood] = useState("Happy");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  return (
    <div
      id="home"
      className={`min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#050505] text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />
      <HowItWorks />

      {/* Mood Selection */}
      <div id="moods">
        <MoodSection
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
        />
      </div>

      {/* Language Selection */}
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />

      {/* AI Recommendation */}
      <AIRecommendation
        selectedMood={selectedMood}
        selectedLanguage={selectedLanguage}
      />

      {/* Mia AI Chatbot */}
      <AIChatBot />
  

<About />

<Footer />
    </div>
  );
}

export default Home;