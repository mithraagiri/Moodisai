import { useTheme } from "../context/ThemeContext";


type SongCardProps = {
  title: string;
  artist: string;
  language: string;
  genre?: string;
  duration?: string;
  spotify: string;
  youtube: string;
};



function SongCard({
  title,
  artist,
  language,
  genre,
  duration,
  spotify,
  youtube,
}: SongCardProps) {


  const { theme } = useTheme();

  const isDark = theme === "dark";



  return (

    <div
      className={`
      mt-4
      rounded-2xl
      border
      p-4
      shadow-lg
      transition
      duration-300
      hover:-translate-y-1

      ${
        isDark
          ? `
          border-cyan-400/20
          bg-[#111827]
          text-white
          hover:border-cyan-400/60
          hover:shadow-cyan-500/20
          `
          :
          `
          border-gray-200
          bg-white
          text-gray-900
          hover:border-cyan-400
          hover:shadow-cyan-300/30
          `
      }
      `}
    >


      <h3
        className={`
        text-lg
        font-bold

        ${
          isDark
            ? "text-cyan-300"
            : "text-teal-600"
        }
        `}
      >
        🎵 {title}
      </h3>




      <p
        className={`
        mt-1
        text-sm

        ${
          isDark
            ? "text-gray-300"
            : "text-gray-600"
        }
        `}
      >
        🎤 {artist}
      </p>





      <div
        className="
        mt-3
        flex
        flex-wrap
        gap-2
        text-xs
        "
      >


        <span
          className={`
          rounded-full
          px-3
          py-1

          ${
            isDark
              ? `
              bg-cyan-400/10
              text-cyan-300
              `
              :
              `
              bg-cyan-100
              text-teal-700
              `
          }
          `}
        >
          🌎 {language}
        </span>





        {
          genre && (

            <span
              className={`
              rounded-full
              px-3
              py-1

              ${
                isDark
                  ? `
                  bg-purple-400/10
                  text-purple-300
                  `
                  :
                  `
                  bg-purple-100
                  text-purple-700
                  `
              }
              `}
            >
              🎼 {genre}
            </span>

          )
        }






        {
          duration && (

            <span
              className={`
              rounded-full
              px-3
              py-1

              ${
                isDark
                  ? `
                  bg-teal-400/10
                  text-teal-300
                  `
                  :
                  `
                  bg-teal-100
                  text-teal-700
                  `
              }
              `}
            >
              ⏱️ {duration}
            </span>

          )
        }


      </div>







      <div
        className="
        mt-4
        flex
        gap-3
        "
      >



        <a
          href={spotify}
          target="_blank"
          rel="noreferrer"
          className={`
          flex-1
          rounded-xl
          border
          py-2
          text-center
          font-semibold
          transition
          hover:scale-105


          ${
            isDark
              ? `
              border-cyan-400/30
              bg-[#16232d]
              text-cyan-300
              hover:bg-cyan-400
              hover:text-black
              `
              :
              `
              border-cyan-300
              bg-white
              text-teal-600
              hover:bg-teal-500
              hover:text-white
              `
          }
          `}
        >
          🎧 Spotify
        </a>





        <a
          href={youtube}
          target="_blank"
          rel="noreferrer"
          className={`
          flex-1
          rounded-xl
          border
          py-2
          text-center
          font-semibold
          transition
          hover:scale-105


          ${
            isDark
              ? `
              border-cyan-400/30
              bg-[#16232d]
              text-cyan-300
              hover:bg-cyan-400
              hover:text-black
              `
              :
              `
              border-cyan-300
              bg-white
              text-teal-600
              hover:bg-teal-500
              hover:text-white
              `
          }
          `}
        >
          ▶ YouTube
        </a>



      </div>


    </div>

  );

}


export default SongCard;