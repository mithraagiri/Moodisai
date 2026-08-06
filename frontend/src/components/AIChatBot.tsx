import { useEffect, useRef, useState } from "react";
import MessageBubble from "./MessageBubble";
import SongCard from "./SongCard";
import TypingIndicator from "./TypingIndicator";
import MoodAura from "./MoodAura";
import { type Song, analyzeMood } from "../utils/aiExplanation";
import { useTheme } from "../context/ThemeContext";

type Message = {
  id: number;
  sender: "user" | "mia";
  text: string;
  songs?: Song[];
};

function AIChatBot() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [currentMood, setCurrentMood] = useState("Unknown");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "mia",
      text: `👋 Hi, I'm Mia.

I'm your AI music companion.

Tell me what's on your mind...

Whether you're happy, stressed, heartbroken, excited or just confused—

I'll recommend songs that match your emotions. 🎵`,
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const isDark = theme === "dark";


  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);



  const sendMessage = () => {
    if (!input.trim()) return;

    const text = input.trim();


    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        text,
      },
    ]);


    setInput("");
    setTyping(true);


    setTimeout(() => {
      const result = analyzeMood(text);

      setCurrentMood(result.mood);


      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "mia",
          text: result.message,
          songs: result.songs,
        },
      ]);


      setTyping(false);

    }, 1200);
  };



  return (
    <>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
        fixed bottom-6 right-6 z-50
        flex h-16 w-16 items-center justify-center
        rounded-full
        bg-gradient-to-br from-cyan-300 via-cyan-400 to-teal-500
        text-2xl text-black
        shadow-lg shadow-cyan-500/40
        transition hover:scale-110
        "
      >
        ✨
      </button>




      {isOpen && (

        <div
          className={`
          fixed bottom-24 right-6 z-50
          flex h-[650px] w-[390px]
          flex-col overflow-hidden
          rounded-3xl
          border
          shadow-2xl

          ${
            isDark
              ? "border-cyan-400/20 bg-[#0b1118] text-white"
              : "border-gray-200 bg-white text-gray-900"
          }
          `}
        >



          <div
            className="
            bg-gradient-to-r from-cyan-400 to-teal-500
            p-4
            text-center
            text-xl
            font-bold
            text-black
            "
          >
            🎧 Mia • MoodMuse AI
          </div>




          <div
            className={`
            flex-1
            overflow-y-auto
            p-4

            ${
              isDark
                ? "bg-[#0b1118]"
                : "bg-gray-50"
            }
            `}
          >

            <MoodAura mood={currentMood} />



            {messages.map((msg) => (

              <div key={msg.id}>

                <MessageBubble
                  sender={msg.sender}
                  text={msg.text}
                />


                {msg.songs?.map((song, index) => (

  <SongCard
    key={`${song.title}-${index}`}
    title={song.title}
    artist={song.artist}
    language={song.language}
    spotify={song.spotify}
    youtube={song.youtube}
  />

))}


              </div>

            ))}



            {typing && <TypingIndicator />}


            <div ref={bottomRef} />

          </div>






          <div
            className={`
            border-t
            p-4

            ${
              isDark
                ? "border-cyan-400/20 bg-[#121212]"
                : "border-gray-200 bg-white"
            }
            `}
          >

            <div className="flex gap-2">


              <input
                type="text"
                value={input}
                placeholder="How are you feeling today?"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}

                className={`
                flex-1
                rounded-xl
                border
                px-4
                py-3
                outline-none
                transition

                ${
                  isDark
                    ? `
                    border-cyan-400/20
                    bg-[#1b2430]
                    text-white
                    placeholder:text-gray-400
                    caret-cyan-400
                    `
                    : `
                    border-gray-300
                    bg-gray-100
                    text-gray-900
                    placeholder:text-gray-500
                    caret-cyan-500
                    `
                }

                focus:border-cyan-400
                `}
              />



              <button
                onClick={sendMessage}
                className="
                rounded-xl
                bg-cyan-400
                px-5
                font-semibold
                text-black
                transition
                hover:bg-cyan-300
                "
              >
                ➜
              </button>


            </div>

          </div>


        </div>

      )}

    </>
  );
}

export default AIChatBot;