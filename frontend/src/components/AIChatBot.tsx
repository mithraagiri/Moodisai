import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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



type AIChatBotProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};





function AIChatBot({
  isOpen,
  setIsOpen,
}: AIChatBotProps) {



const { theme } = useTheme();

const isDark = theme === "dark";



const [input,setInput] = useState("");

const [typing,setTyping] = useState(false);

const [currentMood,setCurrentMood] =
useState("Unknown");





const [messages,setMessages] = useState<Message[]>([


{
id:1,

sender:"mia",

text:
`👋 Hi, I'm Mia.

I'm your music companion.

Tell me what's on your mind...

I'll understand your mood and suggest songs that match your vibe 🎵`

}


]);





const bottomRef = useRef<HTMLDivElement | null>(null);






useEffect(()=>{


bottomRef.current?.scrollIntoView({

behavior:"smooth"

});


},[messages,typing]);







const sendMessage = ()=>{


if(!input.trim()) return;


const userText=input.trim();



setMessages(prev=>[

...prev,

{

id:Date.now(),

sender:"user",

text:userText

}

]);



setInput("");

setTyping(true);






setTimeout(()=>{


const result =
analyzeMood(userText);



setCurrentMood(result.mood);



setMessages(prev=>[

...prev,


{

id:Date.now()+1,

sender:"mia",

text:result.message,

songs:result.songs

}


]);



setTyping(false);



},800);



};








const chatbot = (


<>



{/* Floating Mia Button */}


<button

onClick={()=>setIsOpen(prev=>!prev)}

className="
fixed
bottom-6
right-6
z-[999999]
flex
h-16
w-16
items-center
justify-center
rounded-full
bg-gradient-to-br
from-cyan-300
via-cyan-400
to-teal-500
text-2xl
text-black
shadow-xl
shadow-cyan-500/40
transition-transform
duration-200
hover:scale-110
"

>

✨

</button>








{/* Chat Window */}


<div


className={`

fixed
bottom-24
right-6
z-[999999]
transition-all
duration-300


${
isOpen

?

"opacity-100 translate-y-0 scale-100"

:

"pointer-events-none opacity-0 translate-y-5 scale-95"

}

`}



>





<div

className={`

flex
h-[650px]
w-[390px]
flex-col
overflow-hidden
rounded-3xl
border
shadow-2xl


${
isDark

?

"border-cyan-400/20 bg-[#0b1118] text-white"

:

"border-gray-200 bg-white text-gray-900"

}


`}

>







{/* Header */}


<div

className="
bg-gradient-to-r
from-cyan-400
to-teal-500
p-4
text-center
text-xl
font-bold
text-black
"

>

🎧 Mia • Moodisai

</div>









{/* Mood Aura */}

<MoodAura mood={currentMood}/>









{/* Messages */}


<div

className={`

flex-1
overflow-y-auto
p-4


${
isDark
?
"bg-[#0b1118]"
:
"bg-gray-50"
}


`}

>



{
messages.map(msg=>(


<div key={msg.id}>


<MessageBubble

sender={msg.sender}

text={msg.text}

/>






{
msg.songs?.map((song,index)=>(


<SongCard

key={`${song.title}-${index}`}

title={song.title}

artist={song.artist}

language={song.language}

spotify={song.spotify}

youtube={song.youtube}

/>


))

}





</div>



))

}






{
typing && <TypingIndicator />

}





<div ref={bottomRef}/>



</div>









{/* Input */}


<div

className={`

border-t
p-4


${
isDark

?

"border-cyan-400/20 bg-[#121212]"

:

"border-gray-200 bg-white"

}


`}

>


<div className="flex gap-2">





<input

value={input}

onChange={(e)=>setInput(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter")

sendMessage();

}}


placeholder="How are you feeling today?"

className={`

flex-1
rounded-xl
border
px-4
py-3
outline-none


${
isDark

?

"border-cyan-400/20 bg-[#1b2430] text-white"

:

"border-gray-300 bg-gray-100"

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
font-bold
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


</div>





</>

);






return createPortal(

chatbot,

document.body

);



}



export default AIChatBot;