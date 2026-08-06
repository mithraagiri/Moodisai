import { useTheme } from "../context/ThemeContext";

type MessageBubbleProps = {
  sender: "user" | "mia";
  text: string;
};

function MessageBubble({ sender, text }: MessageBubbleProps) {

  const { theme } = useTheme();

  const isDark = theme === "dark";

  const isUser = sender === "user";


  return (
    <div
      className={`
      mb-4
      flex

      ${
        isUser
          ? "justify-end"
          : "justify-start"
      }
      `}
    >


      <div
        className={`
        max-w-[82%]
        rounded-2xl
        px-5
        py-3
        shadow-lg
        transition-all
        duration-300

        hover:scale-[1.02]

        ${
          isUser

            ? `
              rounded-br-md
              bg-cyan-400
              text-black
              shadow-cyan-400/20
              `


            :

            `
              rounded-bl-md

              ${
                isDark

                  ? `
                    border
                    border-cyan-400/20
                    bg-[#151d27]
                    text-white
                    `

                  :

                    `
                    border
                    border-gray-200
                    bg-white
                    text-gray-900
                    shadow-gray-200
                    `
              }
              `
        }
        `}
      >


        {!isUser && (

          <p
            className="
            mb-2
            text-xs
            font-semibold
            text-cyan-400
            "
          >
            ✨ Mia
          </p>

        )}



        <p className="whitespace-pre-line leading-relaxed">
          {text}
        </p>



      </div>


    </div>
  );
}

export default MessageBubble;