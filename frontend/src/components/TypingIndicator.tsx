import { useTheme } from "../context/ThemeContext";

function TypingIndicator() {

  const { theme } = useTheme();

  const isDark = theme === "dark";


  return (
    <div className="mb-4 flex justify-start">


      <div
        className={`
        flex
        items-center
        gap-3
        rounded-2xl
        border
        px-4
        py-3
        shadow-lg

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
            shadow-gray-200
            `
        }
        `}
      >



        <span className="text-xl">
          🎧
        </span>




        <div className="flex gap-1">

          <span
            className="
            h-2
            w-2
            animate-bounce
            rounded-full
            bg-cyan-400
            "
          />


          <span
            className="
            h-2
            w-2
            animate-bounce
            rounded-full
            bg-cyan-400
            "
            style={{
              animationDelay: "0.15s",
            }}
          />


          <span
            className="
            h-2
            w-2
            animate-bounce
            rounded-full
            bg-cyan-400
            "
            style={{
              animationDelay: "0.3s",
            }}
          />

        </div>





        <span
          className={`
          text-sm

          ${
            isDark
              ? "text-gray-300"
              : "text-gray-600"
          }
          `}
        >
          Mia is thinking...
        </span>



      </div>


    </div>
  );
}

export default TypingIndicator;