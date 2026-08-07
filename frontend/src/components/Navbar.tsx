import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
const { theme, toggleTheme } = useTheme();

const [menuOpen, setMenuOpen] = useState(false);

const isDark = theme === "dark";


const scrollToSection = (id: string) => {
const section = document.getElementById(id);

if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };


return (

<header
className={`
      sticky
      top-4
      z-50
      mx-4
      rounded-2xl
      border
      backdrop-blur-2xl
      transition-all
      duration-300

${
        isDark
        ?
"border-white/10 bg-black/40 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
        :
"border-gray-200 bg-white/70 shadow-lg"
}

      `}
>


<nav
className="
      mx-auto
      flex
      h-18
      max-w-7xl
      items-center
      justify-between
      px-6
      py-4
      "
>



{/* Logo */}


<div
onClick={() => scrollToSection("home")}
className="
        flex
        cursor-pointer
        items-center
        gap-3
        "
>

<div
className="
          relative
          "
>

<img
src="/moodlogo.png"
alt="Moodisai Logo"
className="
            h-11
            w-11
            rounded-xl
            object-contain
            transition
            duration-300
            hover:scale-110
            "
/>


<span
className="
            absolute
            -right-1
            -top-1
            h-3
            w-3
            rounded-full
            bg-cyan-400
            shadow-[0_0_15px_rgba(34,211,238,1)]
            "
/>


</div>




<div>


<p
className={`

${
              isDark
              ?
"text-cyan-400"
              :
"text-cyan-400"
}

            `}
>
             Moodisai♫
</p>


</div>


</div>






{/* Desktop Links */}


<ul
className={`
        hidden
        items-center
        gap-9
        md:flex

${
          isDark
          ?
"text-neutral-300"
          :
"text-gray-700"
}

        `}
>


{[
            ["Home","home"],
            ["Discover","moods"],
            ["About","about"],
            ["Contact","contact"]
          ].map(([name,id])=>(

<li key={id}>

<button
onClick={() => scrollToSection(id)}
className="
              text-sm
              font-medium
              transition
              hover:text-cyan-400
              "
>
{name}
</button>

</li>

          ))}


</ul>








<div
className="
        flex
        items-center
        gap-3
        "
>



{/* Theme Button */}


<button
onClick={toggleTheme}
className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          transition
          hover:scale-110

${
            isDark
            ?
"bg-white/10 text-yellow-300"
            :
"bg-gray-200 text-gray-800"
}

          `}
>

{isDark ? "☀️" : "🌙"}

</button>






{/* CTA */}


<button
onClick={() => scrollToSection("moods")}
className="
          hidden
          rounded-full
          bg-cyan-400
          px-6
          py-2.5
          font-semibold
          text-black
          transition
          hover:scale-105
          hover:bg-cyan-300
          md:block
          "
>

            Start Listening

</button>






{/* Mobile Menu Button */}


<button
onClick={() => setMenuOpen(!menuOpen)}
className="
          text-2xl
          md:hidden
          "
>

{menuOpen ? "✕" : "☰"}

</button>



</div>



</nav>







{/* Mobile Menu */}


{
        menuOpen && (

<div
className={`
          mx-4
          mb-4
          rounded-xl
          border
          p-5
          backdrop-blur-xl
${
            isDark
            ?
"border-white/10 bg-black/60"
            :
"border-gray-200 bg-white"
}

          `}
>


{[
              ["Home","home"],
              ["Discover","moods"],
              ["About","about"],
              ["Contact","contact"]
            ].map(([name,id])=>(


<button
key={id}
onClick={() => scrollToSection(id)}
className="
              block
              w-full
              py-3
              text-left
              transition
              hover:text-cyan-400
              "
>

{name}

</button>


            ))}


</div>

        )
}



</header>

  );
}


export default Navbar;