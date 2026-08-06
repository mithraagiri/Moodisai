import { analyzeMood, type MoodResult } from "./moodAnalyzer";


export function generateMiaReply(
  input: string
): MoodResult {

  const text = input.toLowerCase();


  // Greetings

  if (
    text.includes("hi") ||
    text.includes("hello") ||
    text.includes("hey")
  ) {
    return {
      mood: "Happy",
      message:
        "👋 Hey! I'm Mia, your music companion. Tell me how you're feeling and I'll find songs that match your vibe 🎧",
      songs: [],
    };
  }



  // Thanks

  if (
    text.includes("thank") ||
    text.includes("thanks")
  ) {
    return {
      mood: "Happy",
      message:
        "😊 You're welcome! Whenever you need a song or a mood boost, I'm here 🎵",
      songs: [],
    };
  }



  // Exam / fear

  if (
    text.includes("exam") ||
    text.includes("fear") ||
    text.includes("scared") ||
    text.includes("worried")
  ) {
    return {
      mood: "Stressed",
      message:
        "📚 Exams can feel stressful, but you've got this! Take it one step at a time. Here are some calming and focus songs for you.",
      songs: analyzeMood("exam").songs,
    };
  }



  // Celebration

  if (
    text.includes("selected") ||
    text.includes("won") ||
    text.includes("achievement") ||
    text.includes("success")
  ) {
    return {
      mood: "Happy",
      message:
        "🎉 That's amazing! Congratulations! Enjoy this moment. Here are some songs to celebrate your success.",
      songs: analyzeMood("happy").songs,
    };
  }



  // Bored

  if (
    text.includes("bored") ||
    text.includes("boring")
  ) {
    return {
      mood: "Energetic",
      message:
        "😄 Feeling bored? Let's change that mood! Here are some energetic tracks to refresh your vibe.",
      songs: analyzeMood("energy").songs,
    };
  }



  // Motivation

  if (
    text.includes("motivation") ||
    text.includes("motivate") ||
    text.includes("give up")
  ) {
    return {
      mood: "Motivated",
      message:
        "🔥 I believe you can do it! Keep moving forward. Here's some motivation through music.",
      songs: analyzeMood("motivation").songs,
    };
  }



  // Default: use mood analyzer

  return analyzeMood(input);

}