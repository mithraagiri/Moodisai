import { useEffect, useRef, useState } from "react";

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



const [song,setSong] = useState<Song | null>(null);

const [loading,setLoading] = useState(false);

const [score,setScore] = useState(90);

const [notFound,setNotFound] = useState(false);

// Tracks the "current" request so a slower, older request can't
// overwrite state after a newer one has already resolved.
const requestIdRef = useRef(0);





const getRecommendation = async()=>{

const thisRequestId = ++requestIdRef.current;

try{


setLoading(true);

setNotFound(false);

setSong(null);


let songs: Song[] = await getSongsByMood(selectedMood);
console.log("Mood:", selectedMood);
console.log("Language:", selectedLanguage);
console.log("Songs:", songs);


// If a newer request has started since this one began, drop this result.
if(thisRequestId !== requestIdRef.current){
  return;
}


if(!Array.isArray(songs)){

songs = [];

}




if (selectedLanguage !== "All") {
  songs = songs.filter(
    (song) =>
      song &&
      typeof song.language === "string" &&
      song.language.toLowerCase().trim() ===
      selectedLanguage.toLowerCase().trim()
  );
}





if(!songs.length){

let fallbackSongs = await getSongsByMood(selectedMood);

if(thisRequestId !== requestIdRef.current){
  return;
}

songs = Array.isArray(fallbackSongs) ? fallbackSongs : [];

}





if(!songs.length){


setLoading(false);

setNotFound(true);

return;


}







const randomSong =

songs[

Math.floor(

Math.random()*songs.length

)

];






setScore(

Math.floor(Math.random()*14)+85

);






setTimeout(()=>{

// Only apply this result if it's still the most recent request.
if(thisRequestId !== requestIdRef.current){
  return;
}


setSong(randomSong);

setLoading(false);


},400);





}

catch(error){


console.error("Recommendation error:",error);

if(thisRequestId === requestIdRef.current){

setLoading(false);

setNotFound(true);

}


}


};







useEffect(()=>{


getRecommendation();


},[selectedMood,selectedLanguage]);







if(loading){


return (
<section
id="recommendation"
className="
mx-auto
max-w-5xl
px-6
py-24
"
>

<div className="text-center">


<div

className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-cyan-400/20
text-4xl
animate-pulse
"

>

🤖

</div>




<h2

className={`

mt-6

text-4xl

font-black


${
isDark

?

"text-white"

:

"text-gray-900"

}

`}

>

Finding your vibe...

</h2>




<p className="mt-4 text-gray-500">

Moodisai is matching your emotion 🎧

</p>


</div>


</section>

);


}







if(!song){

if(notFound){

return (
<section
id="recommendation"
className="
mx-auto
max-w-5xl
px-6
py-24
"
>

<div

className={`

mx-auto

max-w-2xl

rounded-[35px]

border

p-10

text-center

shadow-xl


${
isDark

?

"border-cyan-400/20 bg-white/5 text-white"

:

"border-gray-200 bg-white text-gray-900"

}

`}

>

<div className="
mx-auto
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-cyan-400/10
text-4xl
">

🎧

</div>



<h2

className={`

mt-6

text-3xl

font-black


${
isDark

?

"text-white"

:

"text-gray-900"

}

`}

>

No Recommendation Found

</h2>



<p className="
mt-4
text-gray-400
">

We couldn't find a song for this mood and language combo. Try a different mood or language, or search again.

</p>



<button

type="button"

onClick={getRecommendation}

className="
mt-8
rounded-full
bg-cyan-400
px-8
py-4
font-bold
text-black
transition
hover:scale-105
"

>

✨ Try Again

</button>


</div>


</section>

);

}

return null;


}




const insight = analyzeMood(selectedMood).message;







return (

<section

id="recommendation"

className="
mx-auto
max-w-5xl
px-6
py-24
"

>





<div className="text-center">


<p className="
text-sm
uppercase
tracking-[0.3em]
text-cyan-400
">

Your Recommendation

</p>




<h2

className={`

mt-5

text-5xl

font-black


${
isDark

?

"text-white"

:

"text-gray-900"

}

`}

>

Your Perfect Match 🎧

</h2>


</div>








<div

className={`

mt-12

rounded-[35px]

border

p-8

shadow-xl


${
isDark

?

"border-cyan-400/20 bg-white/5 text-white"

:

"border-gray-200 bg-white text-gray-900"

}

`}

>





<div className="
inline-flex
rounded-full
bg-cyan-400/10
px-5
py-2
text-cyan-400
">

🎯 Smart Pick

</div>






<MusicVisualizer />







<h3 className="
mt-6
text-4xl
font-black
">

{song.title}

</h3>




<p className="
mt-2
text-xl
text-gray-400
">

{song.artist}

</p>







<div className="
mt-6
flex
flex-wrap
gap-3
">


<span className="
rounded-full
bg-cyan-400/10
px-4
py-2
">

🌍 {song.language}

</span>



<span className="
rounded-full
bg-cyan-400/10
px-4
py-2
">

🎵 {song.genre}

</span>



<span className="
rounded-full
bg-cyan-400/10
px-4
py-2
">

⏱ {song.duration}

</span>



</div>









<div className="
mt-8
rounded-3xl
bg-cyan-400/10
p-6
">


<div className="
flex
items-center
justify-between
">

<span className="font-bold">

🎯 Mood Match

</span>



<span className="
text-3xl
font-black
">

{score}%

</span>


</div>





<div className="
mt-4
h-2
overflow-hidden
rounded-full
bg-gray-700
">


<div

className="
h-full
rounded-full
bg-gradient-to-r
from-cyan-400
to-teal-400
"

style={{

width:`${score}%`

}}

/>


</div>



</div>









<div className="
mt-8
rounded-3xl
border
p-6
">


<h4 className="
font-bold
text-cyan-400
">

🤖 Moodisai Insight

</h4>



<p className="
mt-3
leading-7
">

{insight}

</p>


</div>









<div className="
mt-8
grid
gap-4
md:grid-cols-2
">



<a

href={song.spotify}

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

🎵 Spotify

</a>







<a

href={song.youtube}

target="_blank"

rel="noopener noreferrer"

className="
rounded-full
border
py-4
text-center
font-bold
transition
hover:scale-105
"

>

▶ YouTube

</a>



</div>









<button

type="button"

onClick={getRecommendation}

className="
mt-6
w-full
rounded-full
border
py-4
font-semibold
transition
hover:border-cyan-400
"

>

✨ Find Another Song

</button>





</div>





</section>

);


}



export default AIRecommendation;