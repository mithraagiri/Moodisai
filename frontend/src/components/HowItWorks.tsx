import { useTheme } from "../context/ThemeContext";

function HowItWorks() {
const { theme } = useTheme();

const isDark = theme === "dark";

const steps = [
    {
      icon: "🎭",
      title: "Choose Your Mood",
      description:
"Tell Moodisai how you feel and select an emotion that matches your current vibe.",
    },
    {
      icon: "🌍",
      title: "Select Language",
      description:
"Choose your preferred language and discover songs you connect with.",
    },
    {
      icon: "🎯",
      title: "Mood Matched",
      description:
"Moodisai analyzes your emotion and finds music that matches your feeling.",
    },
    {
      icon: "🎧",
      title: "Get Your Song",
      description:
"Receive a personalized recommendation made for your mood.",
    },
  ];

return (
<section className="mx-auto max-w-7xl px-6 py-16">

{/* Heading */}

<div className="text-center">

<p className="font-medium uppercase tracking-[0.3em] text-cyan-400">
          How It Works
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
          Your Mood. Your Music.
</h2>


<p
className={`
          mx-auto
          mt-4
          max-w-2xl
          text-lg

${
            isDark
            ? "text-neutral-400"
            : "text-gray-600"
}
          `}
>
          Moodisai combines emotions and music to create a
          personalized listening experience.
</p>

</div>




{/* Steps */}

<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


{steps.map((step, index) => (

<div
key={step.title}
className={`
            relative
            rounded-3xl
            border
            p-8
            transition-all
            duration-500
            hover:-translate-y-2


${
              isDark
              ? "border-neutral-800 bg-white/[0.04] hover:border-cyan-400/50"
              : "border-gray-200 bg-white shadow-lg hover:border-cyan-400"
}

            `}
>


{/* Number */}

<div
className="
              absolute
              right-6
              top-5
              text-5xl
              font-black
              text-cyan-400/20
              "
>
              0{index + 1}
</div>



{/* Icon */}

<div className="text-5xl">
{step.icon}
</div>




<h3
className={`
              mt-6
              text-2xl
              font-bold

${
                isDark
                ? "text-white"
                : "text-gray-900"
}
              `}
>
{step.title}
</h3>




<p
className={`
              mt-4
              leading-7

${
                isDark
                ? "text-neutral-400"
                : "text-gray-600"
}
              `}
>
{step.description}
</p>



</div>

        ))}


</div>


</section>
  );
}

export default HowItWorks;