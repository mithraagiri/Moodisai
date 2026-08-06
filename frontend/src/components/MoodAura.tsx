import { useTheme } from "../context/ThemeContext";

type MoodAuraProps = {
  mood: string;
};


const moodData: Record<
  string,
  {
    emoji: string;
    message: string;
    width: string;
  }
> = {

  Happy: {
    emoji: "😊",
    message: "You're radiating positive energy.",
    width: "90%",
  },


  Sad: {
    emoji: "💙",
    message: "Music heals one note at a time.",
    width: "65%",
  },


  Stressed: {
    emoji: "😰",
    message: "Take a deep breath and relax.",
    width: "75%",
  },


  Motivated: {
    emoji: "🔥",
    message: "Keep chasing your goals!",
    width: "95%",
  },


  Unknown: {
    emoji: "🎵",
    message: "Tell me more about your feelings.",
    width: "40%",
  },

};



function MoodAura({ mood }: MoodAuraProps) {

  const { theme } = useTheme();

  const isDark = theme === "dark";


  const aura = moodData[mood] ?? moodData.Unknown;



  return (

    <div
      className={`
      mb-5
      rounded-2xl
      border
      p-4
      transition-all
      duration-300

      ${
        isDark

          ? `
          border-cyan-400/20
          bg-[#151d27]
          `

          :

          `
          border-gray-200
          bg-white
          shadow-sm
          `
      }
      `}
    >





      <h3
        className="
        mb-3
        font-semibold
        text-cyan-400
        "
      >
        ✨ Mood Aura
      </h3>







      <div
        className={`
        flex
        items-center
        gap-2
        text-lg

        ${
          isDark
            ? "text-white"
            : "text-gray-900"
        }
        `}
      >

        <span>
          {aura.emoji}
        </span>


        <span>
          {mood}
        </span>


      </div>







      {/* Mood Energy Bar */}

      <div
        className={`
        mt-4
        h-2
        rounded-full

        ${
          isDark
            ? "bg-neutral-700"
            : "bg-gray-200"
        }
        `}
      >

        <div
          className="
          h-full
          rounded-full
          bg-cyan-400
          shadow-[0_0_15px_rgba(34,211,238,0.6)]
          transition-all
          duration-700
          "
          style={{
            width: aura.width,
          }}
        />


      </div>







      <p
        className={`
        mt-3
        text-sm

        ${
          isDark
            ? "text-gray-400"
            : "text-gray-600"
        }
        `}
      >
        {aura.message}
      </p>




    </div>

  );
}


export default MoodAura;