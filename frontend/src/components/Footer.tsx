import { useTheme } from "../context/ThemeContext";

function Footer() {
const { theme } = useTheme();

const isDark = theme === "dark";


return (
<footer
id="contact"
className={`
      mt-24
      border-t
      transition-colors duration-300

${
        isDark
          ? "border-neutral-800 bg-black/40"
          : "border-gray-200 bg-gray-100/70"
}
      `}
>

<div className="mx-auto max-w-7xl px-6 py-12">


<h2
className="
          text-3xl
          font-black
          text-cyan-500
          "
>
          Moodisai
</h2>




<p
className={`
          mt-4
          max-w-xl

${
            isDark
              ? "text-neutral-400"
              : "text-gray-600"
}
          `}
>
          Discover music that matches your emotions, mood by mood.
</p>





<div className="mt-8 flex flex-wrap gap-6">


<a
href="https://github.com/mithraagiri/MoodMuse"
target="_blank"
rel="noopener noreferrer"
className={`
            transition

${
              isDark
                ? "text-neutral-300"
                : "text-gray-700"
}

            hover:text-cyan-400
            `}
>
            GitHub
</a>




<a
href="#home"
className={`
            transition

${
              isDark
                ? "text-neutral-300"
                : "text-gray-700"
}

            hover:text-cyan-400
            `}
>
            Home
</a>




<a
href="#about"
className={`
            transition

${
              isDark
                ? "text-neutral-300"
                : "text-gray-700"
}

            hover:text-cyan-400
            `}
>
            About
</a>




<a
href="#contact"
className={`
            transition

${
              isDark
                ? "text-neutral-300"
                : "text-gray-700"
}

            hover:text-cyan-400
            `}
>
            Contact
</a>



</div>





<p
className={`
          mt-10
          text-sm

${
            isDark
              ? "text-neutral-500"
              : "text-gray-500"
}
          `}
>
          © 2026 Moodisai • Made by Mithraa 💕
</p>



</div>


</footer>
  );
}

export default Footer;