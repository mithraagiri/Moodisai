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

// 🤖 Mia personality responses
function getMoodMessage(mood: string): string {
  switch (mood) {
    case "Happy":
      return `
😊 I love this energy!

You seem to be having a beautiful moment.
Let these songs make your day even brighter. 🎵
`;

    case "Sad":
      return `
💙 I'm here with you.

Sometimes music becomes a small comfort during difficult moments.
Take your time, be kind to yourself, and enjoy these songs. 🎧
`;

    case "Energetic":
      return `
⚡ Energy detected!

Your vibe is powerful today.
Turn up the volume and let these tracks boost your mood. 🔥
`;

    case "Motivated":
      return `
🚀 That's the mindset!

Whether you're studying, coding, creating, or chasing a dream—
keep moving forward.

Here are some tracks to keep your motivation high. 💪
`;

    case "Study":
      return `
📚 Focus mode activated!

Create your perfect study environment, remove distractions,
and let these songs help you concentrate. 🎧
`;

    case "Stressed":
      return `
🌿 It sounds like you need a reset.

Take a small break, relax your mind,
and let these calming songs create a peaceful space. 💙
`;

    case "Relaxed":
      return `
😌 Calm vibes detected.

Slow down, enjoy the moment,
and let these songs create a peaceful atmosphere. 🎶
`;

    case "Romantic":
      return `
❤️ A romantic mood detected.

Here are some soulful songs matching your feelings. ✨
`;

    case "Sleep":
      return `
🌙 Time to slow down.

Relax, disconnect from the day,
and enjoy these peaceful sounds. 😴
`;

    case "Rainy":
      return `
🌧️ Rainy day vibes!

These songs match the quiet and emotional beauty of a rainy moment. ☔
`;

    case "Morning":
      return `
🌅 Good morning!

Start your day with positive energy and refreshing music. ☀️
`;

    case "Night":
      return `
🌌 Night vibes detected.

Enjoy these songs while you relax and reflect. ✨
`;

    case "Party":
      return `
🎉 Party mode activated!

Increase the volume and enjoy these energetic tracks. 🔥
`;

    case "Heartbreak":
      return `
💔 Emotional vibes detected.

Sometimes music helps us process feelings and find comfort.
Here are songs that match your mood. 🎧
`;

    case "Meditation":
      return `
🧘 Peace mode activated.

Take a moment for yourself and enjoy these calming sounds. 🌿
`;

    case "Road Trip":
      return `
🚗 Adventure mode!

These songs are perfect companions for your journey. 🌎
`;

    case "Gaming":
      return `
🎮 Gaming mode activated!

Power up your session with these epic tracks. ⚡
`;

    case "Chill":
      return `
🌊 Chill vibes detected.

Relax and enjoy these smooth songs. 🎶
`;

    case "Feel Good":
      return `
✨ Feel-good mode activated!

These songs are here to bring positive energy. 😊
`;

    default:
      return `
🎧 I'm listening.

Tell me more about your mood and I'll find music that matches your vibe.
`;
  }
}

// 🧠 Mood detection keywords
const moodKeywords: Record<string, string[]> = {
  Happy: [
    "happy",
    "joy",
    "excited",
    "amazing",
    "great",
    "fun",
    "smile",
    "awesome",
    "positive",
  ],

  Sad: [
    "sad",
    "lonely",
    "cry",
    "broken",
    "hurt",
    "empty",
    "down",
    "upset",
  ],

  Energetic: [
    "energy",
    "energetic",
    "dance",
    "power",
    "active",
    "hype",
  ],

  Motivated: [
    "motivation",
    "motivated",
    "goal",
    "success",
    "achieve",
    "productive",
    "coding",
    "work",
  ],

  Study: [
    "study",
    "exam",
    "college",
    "assignment",
    "learning",
    "revision",
    "reading",
  ],

  Stressed: [
    "stress",
    "stressed",
    "pressure",
    "deadline",
    "busy",
    "overwhelmed",
  ],

  Relaxed: [
    "relax",
    "calm",
    "peace",
    "chill",
    "quiet",
    "rest",
  ],

  Romantic: [
    "love",
    "romantic",
    "crush",
    "heart",
    "date",
  ],

  Sleep: [
    "sleep",
    "sleepy",
    "bed",
    "tired",
  ],

  Rainy: [
    "rain",
    "rainy",
    "weather",
    "cloud",
  ],

  Morning: [
    "morning",
    "sunrise",
    "wake",
  ],

  Night: [
    "night",
    "midnight",
    "moon",
  ],

  Party: [
    "party",
    "celebrate",
    "festival",
    "friends",
  ],

  Heartbreak: [
    "breakup",
    "heartbreak",
    "lost",
    "miss",
  ],

  Meditation: [
    "meditate",
    "meditation",
    "mindful",
    "peaceful",
  ],

  "Road Trip": [
    "trip",
    "travel",
    "journey",
    "drive",
  ],

  Gaming: [
    "game",
    "gaming",
    "play",
    "battle",
  ],

  Chill: [
    "chill",
    "smooth",
    "vibe",
  ],

  "Feel Good": [
    "feel good",
    "positive",
    "wonderful",
  ],
};

export function analyzeMood(input: string): MoodResult {
  const text = input.toLowerCase();

  let detectedMood = "Relaxed";
  let highestScore = 0;

  Object.entries(moodKeywords).forEach(([mood, keywords]) => {
    let score = 0;

    keywords.forEach((word) => {
      if (text.includes(word.toLowerCase())) {
        score++;
      }
    });

    if (score > highestScore) {
      highestScore = score;
      detectedMood = mood;
    }
  });

  const matchedSongs = songs
    .filter((song) => song.mood === detectedMood)
    .slice(0, 5);

  return {
    mood: detectedMood,
    message: getMoodMessage(detectedMood),
    songs:
      matchedSongs.length > 0
        ? matchedSongs
        : songs.filter((song) => song.mood === "Relaxed").slice(0, 5),
  };
}