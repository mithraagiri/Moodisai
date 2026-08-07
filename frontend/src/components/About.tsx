import { useTheme } from "../context/ThemeContext";

function About() {

const { theme } = useTheme();

const isDark = theme === "dark";


const features = [
    {
      icon: "🎯",
      title: "Mood Matched",
      description:
"Moodisai understands your emotions and recommends music that matches your current mood.",
    },

    {
      icon: "🎵",
      title: "Smart Discovery",
      description:
"Explore curated songs across different moods, genres and languages.",
    },

    {
      icon: "🌍",
      title: "Multi-language",
      description:
"Enjoy Tamil, Telugu, Malayalam, English and more in one intelligent platform.",
    },

    {
      icon: "⚡",
      title: "Instant Recommendations",
      description:
"Choose your feeling and discover a personalized soundtrack within seconds.",
    },
  ];



return (

<section
id="about"
className="mx-auto max-w-7xl px-6 py-24"
>



<div className="text-center">


<p
className="
          font-medium
          uppercase
          tracking-[0.3em]
          text-cyan-400
          "
>
          About Moodisai
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
          Music that understands you.
</h2>





<p
className={`
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          leading-8

${
            isDark
              ? "text-neutral-400"
              : "text-gray-600"
}
          `}
>
          Moodisai is a mood-based music discovery platform that understands
          emotions and connects you with songs that match your mood, language,
          and vibe. From studying and relaxing to celebrations and quiet moments,
          Moodisai creates your personal emotional soundtrack.
</p>


</div>







<div
className="
        mt-16
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-4
        "
>



{features.map((feature) => (


<div
key={feature.title}

className={`

            group
            rounded-3xl
            border
            p-8
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-3


${
              isDark

                ?

`
                border-cyan-400/20
                bg-white/[0.04]
                hover:border-cyan-400/60
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
                `


                :


`
                border-gray-200
                bg-white
                shadow-sm
                hover:border-cyan-400
                hover:shadow-xl
                `

}

            `}
>



<div
className="
              text-5xl
              transition-transform
              duration-300
              group-hover:scale-110
              "
>
{feature.icon}
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
{feature.title}
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
{feature.description}
</p>




</div>


        ))}


</div>





</section>

  );
}


export default About;