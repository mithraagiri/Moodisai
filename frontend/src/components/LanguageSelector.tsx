import { useTheme } from "../context/ThemeContext";


type LanguageSelectorProps = {

  selectedLanguage: string;

  setSelectedLanguage: (language: string) => void;

  generateRecommendation: () => void;

};



const languages = [

  { name: "All", emoji: "🌎" },

  { name: "Tamil", emoji: "🎵" },

  { name: "Telugu", emoji: "🎶" },

  { name: "Malayalam", emoji: "🎼" },

  { name: "English", emoji: "🎧" },

];




function LanguageSelector({

  selectedLanguage,

  setSelectedLanguage,

  generateRecommendation,

}: LanguageSelectorProps) {



const { theme } = useTheme();

const isDark = theme === "dark";




return (


<section className="mx-auto max-w-5xl px-6 py-12">


<div

className={`

rounded-3xl

border

p-8

backdrop-blur-xl

transition-all

duration-300


${
isDark

?

"border-cyan-400/20 bg-white/[0.03]"

:

"border-gray-200 bg-white shadow-lg"

}

`}

>





<div className="text-center">


<p

className="
font-medium
uppercase
tracking-[0.3em]
text-cyan-400
"

>

Select Language

</p>





<h2

className={`

mt-4

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

What do you want to listen?

</h2>






<p

className={`

mx-auto

mt-4

max-w-lg

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

🌐 Moodisai understands music across multiple languages.

</p>


</div>







<div

className="
mt-8
flex
flex-wrap
justify-center
gap-4
"

>



{

languages.map((language)=>(


<button

type="button"

key={language.name}

onClick={()=>{

setSelectedLanguage(language.name);

}}

className={`

rounded-full

border

px-6

py-3

font-semibold

transition-all

duration-300


${
selectedLanguage === language.name

?

`
border-cyan-400
bg-cyan-400
text-black
scale-105
shadow-[0_0_25px_rgba(34,211,238,0.35)]
`

:

isDark

?

`
border-neutral-700
bg-white/[0.02]
text-white
hover:border-cyan-400
hover:text-cyan-400
`

:

`
border-gray-300
bg-white
text-gray-900
hover:border-cyan-400
hover:text-cyan-500
`

}

`}

>

{language.emoji} {language.name}

</button>


))

}



</div>








<button

type="button"

onClick={generateRecommendation}

className="

mx-auto

mt-10

flex

items-center

justify-center

rounded-full

bg-cyan-400

px-8

py-4

font-bold

text-black

transition-transform

duration-200

hover:scale-105

hover:bg-cyan-300

"

>

✨ Generate My Recommendation

</button>








<div

className={`

mt-8

flex

items-center

justify-center

gap-2

text-sm


${
isDark

?

"text-neutral-400"

:

"text-gray-500"

}

`}

>


<span

className="
h-2
w-2
rounded-full
bg-cyan-400
animate-pulse
"

/>


Recommendation Engine Ready


</div>






</div>


</section>


);


}


export default LanguageSelector;