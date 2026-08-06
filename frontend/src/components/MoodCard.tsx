import { useTheme } from "../context/ThemeContext";

type MoodCardProps = {
  emoji: string;
  title: string;
  selected: boolean;
  onClick: () => void;
};

function MoodCard({
  emoji,
  title,
  selected,
  onClick,
}: MoodCardProps) {

  const { theme } = useTheme();

  const isDark = theme === "dark";


  return (
    <button
      onClick={onClick}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2

        ${
          selected

            ? `
            border border-cyan-400
            bg-cyan-400/10
            shadow-[0_0_35px_rgba(34,211,238,0.25)]
            `

            : isDark

              ? `
              border border-neutral-800
              bg-neutral-900/70
              hover:border-cyan-400/60
              hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
              `

              :

              `
              border border-gray-200
              bg-white/70
              hover:border-cyan-400/60
              hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
              `
        }
      `}
    >


      {/* Teal Glass Glow */}

      <div
        className="
        absolute
        -right-14
        -top-14
        h-32
        w-32
        rounded-full
        bg-cyan-400/20
        blur-3xl
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-100
        "
      />




      {/* Selection Light */}

      <div
        className={`
        absolute
        right-4
        top-4
        h-2
        w-2
        rounded-full
        bg-cyan-300
        transition-all
        duration-500

        ${
          selected
            ? "opacity-100 scale-150"
            : "opacity-0 group-hover:opacity-100 group-hover:scale-150"
        }
        `}
      />





      {/* Emoji */}

      <div
        className="
        relative
        mb-5
        flex
        justify-center
        text-5xl
        transition-transform
        duration-300
        group-hover:scale-110
        "
      >
        {emoji}
      </div>






      {/* Title */}

      <h3
        className={`
        relative
        text-lg
        font-semibold
        transition-colors
        duration-300

        ${
          selected

            ? "text-cyan-400"

            : isDark

              ? "text-white"

              : "text-gray-900"
        }
        `}
      >
        {title}
      </h3>



    </button>
  );
}

export default MoodCard;