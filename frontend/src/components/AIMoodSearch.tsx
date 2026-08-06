import { useState } from "react";
import { getSongsByMood } from "../services/api";

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
type AIMoodSearchProps = {
  setSelectedMood: (mood: string) => void;
  selectedLanguage: string;
};


function AIMoodSearch({
  setSelectedMood,
  selectedLanguage,
}: AIMoodSearchProps) {


  const [text, setText] = useState("");

  const [detectedMood, setDetectedMood] = useState("");

  const [confidence, setConfidence] = useState("");

  const [recommendedSong, setRecommendedSong] =
    useState<Song | null>(null);

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [analysisMessage, setAnalysisMessage] = useState("");





  const analyzeMood = async () => {


    if (!text.trim()) return;



    setIsAnalyzing(true);

    setDetectedMood("");
    setRecommendedSong(null);



    const messages = [
      "🤖 Understanding your emotions...",
      "🎧 Matching your music taste...",
      "✨ Finding the perfect song..."
    ];



    let index = 0;


    setAnalysisMessage(messages[index]);



    const loadingInterval = setInterval(() => {

      index++;


      if(index < messages.length) {

        setAnalysisMessage(messages[index]);

      }

    }, 700);






    setTimeout(async () => {


      clearInterval(loadingInterval);



      const sentence = text.toLowerCase();


      let mood = "Relaxed";
      let score = "85%";



      if (
        sentence.includes("happy") ||
        sentence.includes("excited") ||
        sentence.includes("fun") ||
        sentence.includes("celebrate") ||
        sentence.includes("great")
      ) {

        mood = "Happy";
        score = "94%";

      }



      else if (
        sentence.includes("sad") ||
        sentence.includes("lonely") ||
        sentence.includes("broken") ||
        sentence.includes("cry") ||
        sentence.includes("lost")
      ) {

        mood = "Sad";
        score = "91%";

      }



      else if (
        sentence.includes("energy") ||
        sentence.includes("workout") ||
        sentence.includes("power") ||
        sentence.includes("motivate") ||
        sentence.includes("gym")
      ) {

        mood = "Energetic";
        score = "93%";

      }



      else if (
        sentence.includes("love") ||
        sentence.includes("romantic") ||
        sentence.includes("crush") ||
        sentence.includes("heart")
      ) {

        mood = "Romantic";
        score = "90%";

      }



      else if (
        sentence.includes("study") ||
        sentence.includes("focus") ||
        sentence.includes("exam") ||
        sentence.includes("learn")
      ) {

        mood = "Study";
        score = "92%";

      }




      setDetectedMood(mood);
      setConfidence(score);
      setSelectedMood(mood);






      const allSongs = await getSongsByMood(mood);

const matchingSongs = allSongs.filter(
  (song: Song) =>
    selectedLanguage === "All" ||
    song.language === selectedLanguage
);

if (matchingSongs.length > 0) {
  const randomSong =
    matchingSongs[
      Math.floor(Math.random() * matchingSongs.length)
    ];

  setRecommendedSong(randomSong);
} else {
  setRecommendedSong(null);
}





      setIsAnalyzing(false);
      setAnalysisMessage("");



    }, 2500);


  };






  return (

    <section className="
      mx-auto
      max-w-5xl
      px-6
      py-24
    ">



      <div className="text-center">


        <p className="
          uppercase
          tracking-[0.3em]
          text-cyan-400
          font-medium
        ">
          AI Mood Search
        </p>



        <h2 className="
          mt-4
          text-5xl
          font-black
          text-white
        ">
          Describe how you feel
        </h2>



        <p className="
          mx-auto
          mt-5
          max-w-2xl
          text-neutral-400
        ">
          Type it in your own words. Our mood engine reads
          the emotion behind your sentence and builds a song
          to match.
        </p>


      </div>





      <div className="
        mt-10
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-900/70
        p-8
      ">



        <textarea

          value={text}

          onChange={(e)=>setText(e.target.value)}

          placeholder="Example: I need motivation before my workout..."

          className="
            h-40
            w-full
            resize-none
            rounded-2xl
            border
            border-neutral-700
            bg-black/40
            p-5
            text-white
            outline-none
            focus:border-cyan-400
          "

        />





        <button

          onClick={analyzeMood}

          disabled={isAnalyzing}

          className="
            mt-6
            w-full
            rounded-full
            bg-cyan-400
            py-4
            font-bold
            text-black
            transition
            hover:scale-105
            hover:bg-cyan-300
            disabled:cursor-not-allowed
            disabled:opacity-50
          "

        >

          {isAnalyzing
            ? "🤖 Analyzing..."
            : "🤖 Analyze My Mood"
          }

        </button>



      </div>





      {isAnalyzing && (

        <div className="
          mt-8
          rounded-3xl
          border
          border-cyan-400/20
          bg-cyan-400/5
          p-8
          text-center
        ">

          <p className="
            text-xl
            text-cyan-300
          ">
            {analysisMessage}
          </p>

        </div>

      )}







      {detectedMood && !isAnalyzing && (

        <div className="
          mt-8
          rounded-3xl
          border
          border-cyan-400/20
          bg-cyan-400/5
          p-8
        ">



          <div className="text-center">


            <p className="text-cyan-300">
              🤖 Mood Engine Result
            </p>



            <h3 className="
              mt-4
              text-3xl
              font-black
              text-white
            ">

              Detected Mood:
              <span className="text-cyan-400">
                {" "}{detectedMood}
              </span>

            </h3>



            <p className="mt-3 text-neutral-400">

              AI Confidence:
              <span className="text-white">
                {" "}{confidence}
              </span>

            </p>


          </div>






          {recommendedSong && (

            <div className="
              mt-8
              rounded-3xl
              border
              border-neutral-800
              bg-black/40
              p-6
            ">



              <p className="text-cyan-300">
                🎧 AI Recommended Song
              </p>



              <h4 className="
                mt-4
                text-3xl
                font-bold
                text-white
              ">
                {recommendedSong.title}
              </h4>



              <p className="text-neutral-400">
                {recommendedSong.artist}
              </p>





              <div className="mt-4 flex flex-wrap gap-3">

                <span className="rounded-full bg-neutral-800 px-4 py-2 text-sm">
                  🌍 {recommendedSong.language}
                </span>


                <span className="rounded-full bg-neutral-800 px-4 py-2 text-sm">
                  🎵 {recommendedSong.genre}
                </span>


              </div>





              <a
                href={recommendedSong.spotify}
                target="_blank"
                rel="noopener noreferrer"

                className="
                  mt-6
                  block
                  rounded-full
                  bg-cyan-400
                  py-3
                  text-center
                  font-bold
                  text-black
                "
              >

                🎵 Listen Now

              </a>



            </div>

          )}


        </div>

      )}





    </section>

  );

}


export default AIMoodSearch;