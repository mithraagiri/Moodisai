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
    <section className="mx-auto max-w-7xl px-6 py-24">


      {/* Heading */}

      <div className="text-center">


        <p className="font-medium uppercase tracking-widest text-cyan-500">
          Choose Your Mood
        </p>




        <h2
          className={`
          mt-4
          text-5xl
          font-black

          ${
            isDark
              ? "text-white"
              : "text-gray-900"
          }
          `}
        >
          How are you feeling today?
        </h2>





        <p
          className={`
          mx-auto
          mt-6
          max-w-2xl
          text-lg

          ${
            isDark
              ? "text-neutral-400"
              : "text-gray-600"
          }
          `}
        >
          Select a mood and let MoodMuse recommend the perfect
          songs powered by AI.
        </p>



      </div>





      {/* Mood Cards */}

      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">

        {moods.map((mood) => (

          <MoodCard
            key={mood.title}
            emoji={mood.emoji}
            title={mood.title}
            selected={selectedMood === mood.title}
            onClick={() => setSelectedMood(mood.title)}
          />

        ))}

      </div>



    </section>
  );
}

export default MoodSection;