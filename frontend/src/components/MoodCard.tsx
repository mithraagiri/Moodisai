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
aria-pressed={selected}

className={`
      group
      relative
      overflow-hidden
      rounded-3xl
      p-6
      text-center
      transition-all
      duration-500

      hover:-translate-y-3
      active:scale-95


${
        selected

        ?

`
        border
        border-cyan-400
        bg-gradient-to-br
        from-cyan-400/20
        to-teal-400/10
        shadow-[0_0_45px_rgba(34,211,238,0.35)]
        `


        :

        isDark

        ?

`
        border
        border-white/10
        bg-white/[0.04]
        hover:border-cyan-400/50
        hover:bg-white/[0.08]
        hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]
        `


        :

`
        border
        border-gray-200
        bg-white/70
        hover:border-cyan-400/60
        hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
        `
}

      `}
>



{/* Animated Glow */}

<div
className="
      absolute
      -right-16
      -top-16
      h-40
      w-40
      rounded-full
      bg-cyan-400/20
      blur-3xl
      opacity-0
      transition-all
      duration-700
      group-hover:opacity-100
      "
/>





{/* Shine Effect */}

<div
className="
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
      "
/>







{/* Selected Indicator */}

<div
className={`
      absolute
      right-5
      top-5
      h-3
      w-3
      rounded-full
      bg-cyan-400
      shadow-[0_0_20px_rgba(34,211,238,0.9)]
      transition-all
      duration-500


${
        selected
        ?
"scale-100 opacity-100"
        :
"scale-0 opacity-0 group-hover:scale-100"
}

      `}
/>







{/* Emoji */}

<div
className="
      relative
      mb-5
      text-6xl
      transition-all
      duration-500
      group-hover:scale-125
      group-hover:-translate-y-1
      "
>

{emoji}

</div>






{/* Mood Name */}

<h3
className={`
      relative
      text-lg
      font-bold
      transition-colors
      duration-300


${
        selected

        ?
"text-cyan-400"

        :

        isDark

        ?
"text-white"

        :
"text-gray-900"
}

      `}
>

{title}

</h3>






{/* Match Tag */}

<p
className={`
      mt-2
      text-xs
      transition-opacity
      duration-300


${
        selected
        ?
"opacity-100 text-cyan-300"
        :
"opacity-0 group-hover:opacity-100 text-neutral-400"
}

      `}
>

        Mood match

</p>



</button>

  );
}


export default MoodCard;