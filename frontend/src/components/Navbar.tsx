import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const isDark = theme === "dark";


  return (
    <header
      className={`
      sticky top-0 z-50
      border-b
      backdrop-blur-lg
      transition-all duration-300

      ${
        isDark
          ? "border-neutral-800 bg-[#050505]/80"
          : "border-gray-200 bg-white/80"
      }
      `}
    >

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">


        {/* Brand Logo */}

        <div
          onClick={() => scrollToSection("home")}
          className="
          flex
          cursor-pointer
          items-center
          gap-3
          "
        >

          <img
            src="/moodlogo.png"
            alt="MoodMuse Logo"
            className="
            h-12
            w-12
            rounded-xl
            object-contain
            transition
            duration-300
            hover:scale-110
            "
          />


          <div className="leading-tight">

            <h1
              className="
              text-xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              to-teal-400
              bg-clip-text
              text-transparent
              "
            >
              MoodMuse
            </h1>


            <p
              className={`
              text-xs

              ${
                isDark
                  ? "text-gray-400"
                  : "text-gray-500"
              }
              `}
            >
              AI Music Companion
            </p>

          </div>

        </div>





        {/* Navigation */}

        <ul
          className={`
          hidden
          items-center
          gap-10
          md:flex

          ${
            isDark
              ? "text-neutral-300"
              : "text-gray-700"
          }
          `}
        >

          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="transition hover:text-cyan-400"
            >
              Home
            </button>
          </li>


          <li>
            <button
              onClick={() => scrollToSection("moods")}
              className="transition hover:text-cyan-400"
            >
              Discover
            </button>
          </li>


          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="transition hover:text-cyan-400"
            >
              About
            </button>
          </li>


          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="transition hover:text-cyan-400"
            >
              Contact
            </button>
          </li>


        </ul>





        <div className="flex items-center gap-4">


          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className={`
            rounded-full
            p-3
            transition
            duration-300

            ${
              isDark
                ? "bg-neutral-800 text-yellow-300 hover:bg-neutral-700"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }
            `}
          >

            {isDark ? "☀︎" : "☾"}

          </button>





          {/* Get Started */}

          <button
            onClick={() => scrollToSection("moods")}
            className="
            rounded-full
            border
            border-cyan-400
            px-6
            py-2
            font-medium
            text-cyan-400
            transition
            duration-300
            hover:bg-cyan-400
            hover:text-black
            "
          >
            Get Started
          </button>


        </div>


      </nav>

    </header>
  );
}

export default Navbar;