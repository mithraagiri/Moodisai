import MoodCard from "./MoodCard";
import { useTheme } from "../context/ThemeContext";

type MoodSectionProps = {
  selectedMood: string;
  setSelectedMood: React.Dispatch<React.SetStateAction<string>>;
};


const moods = [
  { emoji: "😊", title: "Happy" },
  { emoji: "😢", title: "Sad" },
  { emoji: "⚡", title: "Energetic" },
  { emoji: "😌", title: "Relaxed" },
  { emoji: "❤️", title: "Romantic" },
  { emoji: "🔥", title: "Motivated" },
  { emoji: "😴", title: "Sleep" },
  { emoji: "🌧️", title: "Rainy" },
  { emoji: "🌅", title: "Morning" },
  { emoji: "🌙", title: "Night" },
  { emoji: "🎉", title: "Party" },
  { emoji: "💔", title: "Heartbreak" },
  { emoji: "🧘", title: "Meditation" },
  { emoji: "🚗", title: "Road Trip" },
  { emoji: "📚", title: "Study" },
  { emoji: "🎮", title: "Gaming" },
];



function MoodSection({
  selectedMood,
  setSelectedMood,
}: MoodSectionProps) {


  const { theme } = useTheme();

  const isDark = theme === "dark";



  return (

    <section
    className="
    relative
    mx-auto
    max-w-7xl
    overflow-hidden
    px-6
    py-28
    "
    >




      {/* Background Glow */}

      <div
      className="
      absolute
      left-1/2
      top-20
      h-96
      w-96
      -translate-x-1/2
      rounded-full
      bg-cyan-400/10
      blur-[120px]
      "
      />







      {/* Heading */}


      <div
      className="
      relative
      text-center
      "
      >


        <div
        className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/10
        px-5
        py-2
        text-sm
        font-medium
        text-cyan-400
        "
        >

          🎧 16 AI Mood Profiles

        </div>





        <h2
        className={`
        mt-6
        text-4xl
        font-black
        md:text-6xl


        ${
          isDark
          ?
          "text-white"
          :
          "text-gray-900"
        }

        `}
        >

          What’s Your

          <span
          className="
          ml-3
          bg-gradient-to-r
          from-cyan-400
          to-teal-400
          bg-clip-text
          text-transparent
          "
          >
            Mood?
          </span>


        </h2>






        <p
        className={`
        mx-auto
        mt-6
        max-w-2xl
        text-lg
        leading-8


        ${
          isDark
          ?
          "text-neutral-400"
          :
          "text-gray-600"
        }

        `}
        >

          Choose your current emotion and MoodMuse AI
          will discover songs that match your feeling,
          energy and vibe.

        </p>



      </div>








      {/* Cards */}


      <div
      className="
      relative
      mt-16
      grid
      grid-cols-2
      gap-5
      sm:gap-6
      md:grid-cols-4
      "
      >

        {
          moods.map((mood)=>(
            
            <MoodCard

            key={mood.title}

            emoji={mood.emoji}

            title={mood.title}

            selected={
              selectedMood === mood.title
            }

            onClick={() =>
              setSelectedMood(mood.title)
            }

            />

          ))
        }


      </div>









      {/* Selected Mood Status */}


      {
        selectedMood && (

          <div
          className="
          mx-auto
          mt-14
          flex
          w-fit
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-400/10
          px-6
          py-3
          text-sm
          text-cyan-300
          backdrop-blur-xl
          "
          >

            ✨ Mood selected:

            <span
  className={`font-bold ${
    isDark ? "text-white" : "text-gray-900"
  }`}
>
  {selectedMood}
</span>


          </div>

        )
      }




    </section>

  );
}


export default MoodSection;