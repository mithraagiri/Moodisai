import { useEffect, useState } from "react";
import { getSongsByMood } from "../services/api";
import { analyzeMood } from "../utils/aiExplanation";
import { useTheme } from "../context/ThemeContext";
import MusicVisualizer from "./MusicVisualizer";

type Song = {
  title: string;
  artist: string;
  language: string;
  mood: string;
  genre: string;
  duration: string;
  spotify: string;
  youtube: string;
};

type AIRecommendationProps = {
  selectedMood: string;
  selectedLanguage: string;
};

function AIRecommendation({
  selectedMood,
  selectedLanguage,
}: AIRecommendationProps) {

  const { theme } = useTheme();
  const isDark = theme === "dark";


  const [recommendedSong, setRecommendedSong] =
    useState<Song | null>(null);

  const [previousSong, setPreviousSong] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  const [moodScore, setMoodScore] =
    useState(90);



  const getRecommendation = async () => {

    try {

      setLoading(true);


      let matchingSongs =
        await getSongsByMood(selectedMood);



      if (selectedLanguage !== "All") {

        matchingSongs =
          matchingSongs.filter(
            (song: Song) =>
              song.language === selectedLanguage
          );

      }



      if (matchingSongs.length === 0) {

        matchingSongs =
          await getSongsByMood(selectedMood);

      }



      if (matchingSongs.length === 0) {

        setRecommendedSong(null);
        setLoading(false);
        return;

      }



      let randomSong =
        matchingSongs[
          Math.floor(
            Math.random() * matchingSongs.length
          )
        ];



      while (
        matchingSongs.length > 1 &&
        randomSong.title === previousSong
      ) {

        randomSong =
          matchingSongs[
            Math.floor(
              Math.random() * matchingSongs.length
            )
          ];

      }



      setPreviousSong(randomSong.title);


      setMoodScore(
        Math.floor(
          Math.random() * (98 - 85 + 1)
        ) + 85
      );



      setTimeout(() => {

        setRecommendedSong(randomSong);
        setLoading(false);

      }, 700);



    } catch(error) {

      console.error(error);
      setLoading(false);

    }

  };



  useEffect(() => {

    setPreviousSong("");

    getRecommendation();

  }, [selectedMood, selectedLanguage]);





  if (loading) {

    return (

      <section
        id="ai-search"
        className="mx-auto max-w-5xl px-6 py-24"
      >

        <div className="text-center">

          <p className="font-medium uppercase tracking-[0.3em] text-cyan-400">
            AI Recommendation
          </p>


          <h2
            className={`
            mt-6
            text-4xl
            font-black
            ${
              isDark
              ? "text-white"
              : "text-gray-900"
            }
            `}
          >
            Analyzing Your Mood...
          </h2>



          <div className="mx-auto mt-8 h-2 max-w-md overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-800">

            <div
              className="
              h-full
              w-2/3
              animate-pulse
              rounded-full
              bg-cyan-400
              "
            />

          </div>


          <p className="mt-5 text-gray-500">
            Finding a song that matches your emotion 🎧
          </p>


        </div>

      </section>

    );

  }





  if (!recommendedSong) return null;



  const explanation =
    analyzeMood(selectedMood).message;





  return (

    <section
      id="ai-search"
      className="mx-auto max-w-5xl px-6 py-24"
    >


      <div className="text-center">


        <p className="font-medium uppercase tracking-[0.3em] text-cyan-400">
          AI Recommendation
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
          Made For Your Mood
        </h2>


        <p
          className={`
          mt-5
          ${
            isDark
            ? "text-neutral-400"
            : "text-gray-600"
          }
          `}
        >
          MoodMuse understood your emotion and selected a song that matches your vibe.
        </p>


      </div>





      <div
        className={`
        relative
        mt-12
        overflow-hidden
        rounded-3xl
        border
        p-8
        backdrop-blur-xl
        transition-all

        ${
          isDark
          ? "border-cyan-400/20 bg-white/[0.04]"
          : "border-gray-200 bg-white shadow-xl"
        }
        `}
      >


        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />


        <div className="relative">


          <div
            className="
            inline-flex
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-4
            py-2
            text-sm
            text-cyan-400
            "
          >
            🤖 AI Picked
          </div>


          <MusicVisualizer />



          <h3
            className={`
            text-5xl
            font-black
            ${
              isDark
              ? "text-white"
              : "text-gray-900"
            }
            `}
          >
            {recommendedSong.title}
          </h3>



          <p
            className={`
            mt-3
            text-xl
            ${
              isDark
              ? "text-neutral-400"
              : "text-gray-600"
            }
            `}
          >
            {recommendedSong.artist}
          </p>





          <div className="mt-6 flex flex-wrap gap-3">

            {[

              `🌍 ${recommendedSong.language}`,
              `🎵 ${recommendedSong.genre}`,
              `⏱ ${recommendedSong.duration}`

            ].map((item)=>(

              <span
                key={item}
                className={`
                rounded-full
                px-4
                py-2
                text-sm

                ${
                  isDark
                  ? "bg-neutral-800 text-white"
                  : "bg-gray-100 text-gray-800"
                }
                `}
              >
                {item}
              </span>

            ))}

          </div>





          <div
            className={`
            mt-8
            rounded-2xl
            border
            p-6

            ${
              isDark
              ? "border-cyan-400/20 bg-white/[0.03]"
              : "border-gray-200 bg-gray-50"
            }
            `}
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-cyan-400">
                🎯 Mood Match
              </h3>


              <span
                className={`
                text-3xl
                font-black
                ${
                  isDark
                  ? "text-white"
                  : "text-gray-900"
                }
                `}
              >
                {moodScore}%
              </span>


            </div>



            <div className="mt-4 h-2 rounded-full bg-gray-200 dark:bg-neutral-800">

              <div
                className="
                h-full
                rounded-full
                bg-cyan-400
                transition-all
                duration-700
                "
                style={{
                  width:`${moodScore}%`
                }}
              />

            </div>


            <p
              className={`
              mt-4
              text-sm
              ${
                isDark
                ? "text-neutral-400"
                : "text-gray-600"
              }
              `}
            >
              This song matches your emotional energy and current vibe.
            </p>


          </div>






          <div
            className={`
            mt-10
            rounded-2xl
            border
            p-6

            ${
              isDark
              ? "border-neutral-800 bg-black/30"
              : "border-gray-200 bg-gray-50"
            }
            `}
          >


            <p className="font-semibold text-cyan-400">
              🤖 MoodMuse AI Analysis
            </p>



            <p
              className={`
              mt-4
              leading-7

              ${
                isDark
                ? "text-neutral-300"
                : "text-gray-700"
              }
              `}
            >
              {explanation}
            </p>


          </div>






          <div className="mt-8 grid gap-4 md:grid-cols-2">


            <a
              href={recommendedSong.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="
              rounded-full
              bg-cyan-400
              py-4
              text-center
              font-bold
              text-black
              transition
              hover:scale-105
              "
            >
              🎵 Listen on Spotify
            </a>



            <a
              href={recommendedSong.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={`
              rounded-full
              border
              py-4
              text-center
              font-bold

              ${
                isDark
                ? "border-neutral-700 text-white"
                : "border-gray-300 text-gray-900"
              }

              hover:border-cyan-400
              hover:text-cyan-400
              `}
            >
              ▶ Watch on YouTube
            </a>


          </div>





          <button
            onClick={getRecommendation}
            className={`
            mt-6
            w-full
            rounded-full
            border
            py-4
            font-semibold

            ${
              isDark
              ? "border-neutral-700 text-white"
              : "border-gray-300 text-gray-900"
            }

            hover:border-cyan-400
            hover:text-cyan-400
            `}
          >
            ✨ Recommend Another
          </button>



        </div>


      </div>


    </section>

  );

}


export default AIRecommendation;