import { songs } from "../data/songs";


export type Song = {
  title: string;
  artist: string;
  language: string;
  mood: string;
  genre: string;
  duration: string;
  spotify: string;
  youtube: string;
};


export type MoodResult = {
  mood: string;
  message: string;
  songs: Song[];
};




// Mia personality responses

export function generateMiaReply(mood: string) {

  const replies: Record<string, string> = {

    Happy: `
😊 You sound happy!

I'm glad you're having a beautiful moment.
Let's keep that positive energy flowing with these songs. 🎵
`,


    Sad: `
💙 I'm here with you.

Sometimes music helps us express feelings that are difficult to explain.

Here are some songs that match your feelings. 🎧
`,


    Motivated: `
🔥 Motivation mode activated!

Keep moving towards your goals.
Whether you're studying, coding, creating, or improving yourself — keep going! 🚀

Here are some powerful tracks.
`,


    Study: `
📚 Focus mode activated!

Create your study space, remove distractions, and take it one step at a time.

Here are some songs for your study session. 🎧
`,


    Stressed: `
🌿 It sounds like you have a lot happening.

Take a small pause, breathe, and reset.

Here are some calming songs for you. 💙
`,


    Relaxed: `
😌 Calm vibes detected.

Slow down and enjoy this peaceful moment.

Here are some relaxing songs. 🎶
`,


    Romantic: `
❤️ Romantic vibes detected.

Here are some beautiful songs matching your mood. 🎵
`,


    Party: `
🎉 Party mode activated!

Let's bring up the energy with these tracks. 🔥
`,


    Sleep: `
🌙 Night mode activated.

Relax your mind and enjoy these peaceful sounds.
`,


    Gaming: `
🎮 Gaming mode activated!

Here are some powerful tracks to boost your gameplay. ⚡
`,


    Rainy: `
🌧️ Rainy mood detected.

Enjoy these emotional and cozy songs while you relax. ☔
`,


    Morning: `
🌅 Good morning vibes!

Start your day with fresh and positive energy. ☀️
`,


    Night: `
🌙 Night vibes detected.

Here are some songs for your quiet moments.
`,


    Heartbreak: `
💔 I understand this feeling.

Sometimes music helps us process emotions.

Here are some songs that match your mood.
`,


    Meditation: `
🧘 Peaceful mode activated.

Slow down, relax, and enjoy these calming sounds.
`,


    "Road Trip": `
🚗 Road trip mode activated!

Let's make the journey more memorable with these tracks. 🎵
`,

  };


  return replies[mood] || `
🎧 I'm listening.

Tell me what you're feeling and I'll find music that matches your vibe.
`;

}






// Mood detection

export function analyzeMood(input: string): MoodResult {


  const text = input.toLowerCase();



  const moods: Record<string, string[]> = {


    Happy: [
      "happy",
      "joy",
      "excited",
      "great",
      "awesome",
      "amazing",
      "fun",
      "celebrate",
      "smile",
      "positive"
    ],



    Sad: [
      "sad",
      "lonely",
      "cry",
      "broken",
      "hurt",
      "empty",
      "miss",
      "lost",
      "upset"
    ],



    Motivated: [
      "motivation",
      "motivated",
      "goal",
      "success",
      "work",
      "gym",
      "push",
      "confidence",
      "productive",
      "inspire"
    ],



    Study: [
      "study",
      "studying",
      "exam",
      "college",
      "assignment",
      "coding",
      "code",
      "learn",
      "revision",
      "project"
    ],



    Stressed: [
      "stress",
      "stressed",
      "pressure",
      "deadline",
      "tired",
      "overwhelmed",
      "busy",
      "anxiety"
    ],



    Relaxed: [
      "relax",
      "calm",
      "peace",
      "peaceful",
      "chill",
      "quiet",
      "rest"
    ],



    Romantic: [
      "love",
      "romantic",
      "crush",
      "heart",
      "date"
    ],



    Party: [
      "party",
      "dance",
      "festival",
      "friends",
      "celebrate"
    ],



    Sleep: [
      "sleep",
      "sleepy",
      "bed",
      "night"
    ],



    Gaming: [
      "game",
      "gaming",
      "play",
      "battle"
    ],



    Rainy: [
      "rain",
      "rainy",
      "weather",
      "cloud"
    ],



    Morning: [
      "morning",
      "wake",
      "sunrise"
    ],



    Night: [
      "night",
      "midnight",
      "dark"
    ],



    Heartbreak: [
      "heartbreak",
      "breakup",
      "broken heart",
      "lost love"
    ],



    Meditation: [
      "meditate",
      "meditation",
      "peace",
      "mindfulness"
    ],



    "Road Trip": [
      "travel",
      "trip",
      "drive",
      "journey",
      "road"
    ]

  };





  let detectedMood = "Relaxed";

  let highestScore = 0;



  Object.entries(moods).forEach(
    ([mood, keywords]) => {

      let score = 0;


      keywords.forEach(keyword => {

        if (text.includes(keyword)) {
          score++;
        }

      });



      if (score > highestScore) {

        highestScore = score;
        detectedMood = mood;

      }

    }
  );





  const recommendedSongs = songs.filter(
    (song) => song.mood === detectedMood
  );





  return {

    mood: detectedMood,

    message:
      generateMiaReply(detectedMood),


    songs:
      recommendedSongs.length > 0
        ? recommendedSongs.slice(0, 5)
        : songs.filter(song => song.mood === "Relaxed").slice(0,5)

  };


}