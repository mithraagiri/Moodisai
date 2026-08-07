import { useTheme } from "../context/ThemeContext";
type HeroProps = {
  openChat: () => void;
  findSong: () => void;
  exploreMoods: () => void;
};
function Hero({
  openChat,
  findSong,
  exploreMoods,
}: HeroProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (


<section

className="
relative
flex
min-h-[92vh]
items-center
justify-center
overflow-hidden
px-4
py-14
sm:px-6
sm:py-20
"

>





{/* Background Glow */}


<div

className="
absolute
-left-40
-top-40
h-[350px]
w-[350px]
sm:h-[550px]
sm:w-[550px]
rounded-full
bg-cyan-500/20
blur-[170px]
"

/>



<div

className="
absolute
-bottom-40
-right-40
h-[380px]
w-[380px]
sm:h-[600px]
sm:w-[600px]
rounded-full
bg-teal-400/20
blur-[180px]
"

/>







{/* Floating particles */}


<div

className="
absolute
left-[18%]
top-[22%]
h-3
w-3
animate-pulse
rounded-full
bg-cyan-400
"

/>


<div

className="
absolute
right-[20%]
top-[30%]
h-2
w-2
animate-ping
rounded-full
bg-teal-400
"

/>






<div

className="
relative
z-10
mx-auto
max-w-6xl
"

>


<div

className="
grid
items-center
gap-10
lg:grid-cols-2
lg:gap-14
"

>






{/* LEFT CONTENT */}



<div

className="
text-center
lg:text-left
"

>



<div

className="
inline-flex
items-center
gap-3
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
px-5
py-3
"

>

✨


<span

className="
text-sm
font-medium
tracking-wide
text-cyan-400
"

>

AI-Powered Music Discovery

</span>


</div>








<h1

className={`

mt-8
text-4xl
font-black
leading-tight
sm:text-5xl
md:text-7xl


${
isDark
?
"text-white"
:
"text-gray-900"
}

`}

>

Music That

<br/>

Understands

<br/>


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

Your Mood

</span>



</h1>








<p

className={`

mt-7
max-w-xl
mx-auto
lg:mx-0
text-lg
leading-8


${
isDark
?
"text-neutral-400"
:
"text-gray-600"
}

`}

>

MoodMuse uses AI to understand your emotions and recommends songs that match your feelings, language and personal vibe.

</p>









{/* BUTTONS */}



<div

className="
mt-10
flex
flex-col
sm:flex-row
flex-wrap
justify-center
gap-3
lg:justify-start
"

>






<button

onClick={findSong}

className="
h-14
rounded-full
bg-cyan-400
px-6
font-bold
text-black
transition-transform
duration-200
hover:scale-105
hover:bg-cyan-300
"

>

🎵 Find My Song

</button>







<button

onClick={openChat}

className="
h-14
rounded-full
bg-gradient-to-r
from-teal-400
to-cyan-400
px-6
font-bold
text-black
transition-transform
duration-200
hover:scale-105
"

>

🤖 Talk with Mia

</button>







<button

onClick={exploreMoods}

className={`

h-14
rounded-full
border
px-6
font-semibold
transition-transform
duration-200
hover:scale-105


${
isDark
?
"border-white/20 bg-white/5 text-white"
:
"border-gray-300 bg-white text-gray-900"
}

`}

>

Explore Moods →

</button>




</div>








{/* STATS */}



<div

className="
mt-14
flex
flex-wrap
justify-center
gap-10
lg:justify-start
"

>


{
[
["16+","Mood Types"],
["1000+","Songs"],
["AI","Smart Picks"]

].map(([number,text])=>(


<div key={text}>


<h3

className="
text-3xl
font-black
text-cyan-400
"

>

{number}

</h3>



<p

className={`

mt-1
text-sm

${
isDark
?
"text-neutral-400"
:
"text-gray-600"
}

`}

>

{text}

</p>



</div>


))

}



</div>




</div>









{/* RIGHT AI CARD */}




<div

className="
hidden
justify-center
md:flex
lg:flex
"

>


<div

className={`

relative
h-[380px]
w-[300px]
sm:h-[430px]
sm:w-[330px]
rounded-[35px]
border
p-6
shadow-2xl


${
isDark
?
"border-white/10 bg-white/5"
:
"border-gray-200 bg-white"
}

`}

>



<p className="text-cyan-400 font-semibold">

🤖 MoodMuse AI

</p>





<div

className={`

mt-8
rounded-3xl
p-5

${
isDark
?
"bg-black/30"
:
"bg-gray-100"
}

`}

>

<p className="text-sm text-gray-400">

Current mood detected

</p>


<h2 className="mt-3 text-4xl font-bold">

😌 Calm

</h2>


</div>







<div

className="
mt-6
rounded-3xl
border
border-cyan-400/20
bg-cyan-400/10
p-5
"

>


<p className="text-cyan-400">

AI Recommendation

</p>



<p className="mt-3 font-semibold">

🎧 Perfect songs selected for your vibe

</p>


</div>




</div>


</div>






</div>


</div>



</section>


  );

}



export default Hero;