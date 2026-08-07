import { useTheme } from "../context/ThemeContext";


function Creator(){


const {theme}=useTheme();

const isDark=theme==="dark";



return (

<section

id="creator"

className="
mx-auto
max-w-5xl
px-6
py-24
"

>



<div

className={`

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





<img

src="/creator.jpeg"

alt="Creator"

className="
mx-auto
h-40
w-40
rounded-full
object-cover
border-4
border-cyan-400
shadow-lg
"

/>







<h2

className="
mt-8
text-4xl
font-black
"

>

Created by Mithraa ✨

</h2>





<p

className="
mx-auto
mt-4
max-w-xl
leading-7
opacity-80
"

>

Moodisai is a mood-based music discovery platform
built to connect emotions with music.

Designed and developed with passion for
technology, music and creativity.

</p>






<div

className="
mt-6
flex
justify-center
gap-4
"

>


<a

href="https://github.com/mithraagiri"

target="_blank"

rel="noopener noreferrer"

className="
rounded-full
bg-cyan-400
px-6
py-3
font-bold
text-black
"

>

GitHub

</a>





</div>




</div>



</section>

);


}


export default Creator;