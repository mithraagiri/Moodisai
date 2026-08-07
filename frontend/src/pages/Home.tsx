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
import Creator from "../components/Creator";

import { useTheme } from "../context/ThemeContext";



function Home() {


const { theme } = useTheme();



const [selectedMood, setSelectedMood] =

useState("Happy");



const [selectedLanguage, setSelectedLanguage] =

useState("All");



const [isChatOpen, setIsChatOpen] =

useState(false);



const [showRecommendation, setShowRecommendation] =

useState(false);





const scrollToSection = (id:string)=>{


const section = document.getElementById(id);


if(section){

section.scrollIntoView({

behavior:"smooth",

block:"start",

});

}


};






const openRecommendation = () => {
  setShowRecommendation(true);

  setTimeout(() => {
    scrollToSection("recommendation");
  }, 500);
};





return (


<div

id="home"

className={`

min-h-screen

transition-colors

duration-300


${
theme==="dark"

?

"bg-[#050505] text-white"

:

"bg-gray-50 text-gray-900"

}

`}

>





<Navbar />






<Hero

openChat={()=>{

setIsChatOpen((prev)=>!prev);

}}


findSong={openRecommendation}



exploreMoods={()=>{

scrollToSection("moods");

}}


/>








<HowItWorks />







<section

id="moods"

className="scroll-mt-24"

>


<MoodSection

selectedMood={selectedMood}

setSelectedMood={setSelectedMood}

/>


</section>









<LanguageSelector

selectedLanguage={selectedLanguage}

setSelectedLanguage={setSelectedLanguage}

generateRecommendation={openRecommendation}

/>










<section
  id="recommendation"
  className="scroll-mt-24"
>
  {showRecommendation ? (
    <AIRecommendation
      selectedMood={selectedMood}
      selectedLanguage={selectedLanguage}
    />
  ) : (
    <div className="hidden" />
  )}
</section>







<About />







<Creator />







<Footer />









<AIChatBot

isOpen={isChatOpen}

setIsOpen={setIsChatOpen}

/>





</div>


);


}



export default Home;