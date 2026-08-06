import { useTheme } from "../context/ThemeContext";

function Hero() {
  const { theme } = useTheme();

  const isDark = theme === "dark";


  return (
    <section
      className="
      relative
      flex
      min-h-[90vh]
      items-center
      justify-center
      overflow-hidden
      px-6
      "
    >


      {/* Background Aura */}

      <div
        className="
        absolute
        left-[-150px]
        top-[-150px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/20
        blur-[160px]
        "
      />



      <div
        className="
        absolute
        right-[-150px]
        bottom-[-150px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-teal-400/15
        blur-[160px]
        "
      />



      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[600px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-cyan-400/10
        blur-[180px]
        "
      />





      {/* AI Floating Elements */}

      <div
        className="
        absolute
        left-[15%]
        top-[25%]
        h-3
        w-3
        animate-pulse
        rounded-full
        bg-cyan-400
        shadow-[0_0_25px_rgba(34,211,238,0.8)]
        "
      />

      <div
        className="
        absolute
        right-[18%]
        top-[35%]
        h-2
        w-2
        animate-ping
        rounded-full
        bg-teal-400
        "
      />

      <div
        className="
        absolute
        bottom-[20%]
        left-[25%]
        h-2
        w-2
        animate-pulse
        rounded-full
        bg-cyan-300
        "
      />





      <div className="relative z-10 mx-auto max-w-5xl text-center">



        {/* Badge */}

        <div
          className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-cyan-400/30
          bg-cyan-400/10
          px-6
          py-3
          backdrop-blur-xl
          "
        >

          <span>
            ✨
          </span>


          <span className="text-sm font-medium tracking-wide text-cyan-400">
            AI-Powered Music Discovery
          </span>


        </div>





        {/* Heading */}

        <h1
          className={`
          mt-10
          text-6xl
          font-black
          leading-[1.05]
          transition-colors
          duration-500
          md:text-8xl

          ${
            isDark
              ? "text-white"
              : "text-gray-900"
          }
          `}
        >

          Discover Music

          <br />


          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            via-teal-400
            to-cyan-600
            bg-clip-text
            text-transparent
            "
          >
            That Matches Your Mood
          </span>


        </h1>





        {/* Description */}

        <p
          className={`
          mx-auto
          mt-8
          max-w-2xl
          text-lg
          leading-8
          transition-colors
          duration-500
          md:text-xl

          ${
            isDark
              ? "text-neutral-400"
              : "text-gray-600"
          }
          `}
        >

          MoodMuse understands the emotion behind your words and discovers
          songs that match your current feeling, language and vibe.
          Experience personalized music powered by AI.

        </p>







        {/* Buttons */}

        <div
          className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
          gap-5
          sm:flex-row
          "
        >


          <button
            onClick={() =>
              document
                .getElementById("ai-search")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }

            className="
            rounded-full
            bg-cyan-400
            px-9
            py-4
            text-lg
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-cyan-300
            hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
            "
          >
            🎵 Start Listening
          </button>





          <button
            onClick={() =>
              document
                .getElementById("moods")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }

            className={`
            rounded-full
            px-9
            py-4
            text-lg
            font-semibold
            backdrop-blur-md
            transition-all

            ${
              isDark
                ? `
                border border-white/10
                bg-white/5
                text-white
                hover:border-cyan-400
                hover:text-cyan-300
                `
                :
                `
                border border-gray-300
                bg-white
                text-gray-800
                hover:border-cyan-400
                hover:text-cyan-500
                `
            }
            `}
          >

            Explore Moods →

          </button>


        </div>







        {/* Stats */}

        <div
          className="
          mt-16
          flex
          flex-wrap
          justify-center
          gap-12
          text-center
          "
        >


          {[
            ["16+", "Mood Categories"],
            ["1000+", "Songs Curated"],
            ["AI", "Smart Recommendations"],
          ].map(([number, label]) => (

            <div key={label}>

              <h3 className="text-3xl font-bold text-cyan-400">
                {number}
              </h3>


              <p
                className={`
                mt-2

                ${
                  isDark
                    ? "text-neutral-400"
                    : "text-gray-600"
                }
                `}
              >
                {label}
              </p>


            </div>

          ))}


        </div>



      </div>


    </section>
  );
}

export default Hero;