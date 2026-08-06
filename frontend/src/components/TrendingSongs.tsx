const songs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    mood: "Energetic",
    duration: "3:20",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    mood: "Romantic",
    duration: "4:23",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    mood: "Motivated",
    duration: "3:24",
    image:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&auto=format&fit=crop&q=80",
  },
  {
    title: "Night Changes",
    artist: "One Direction",
    mood: "Relaxed",
    duration: "3:46",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&auto=format&fit=crop&q=80",
  },
];

function TrendingSongs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      {/* Heading */}
      <div className="text-center">
        <p className="font-medium uppercase tracking-[0.3em] text-cyan-400">
          Trending Now
        </p>

        <h2 className="mt-4 text-5xl font-black text-white">
          Discover What's Popular
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
          Explore trending songs handpicked by MoodMuse across
          different moods and genres.
        </p>
      </div>

      {/* Song Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {songs.map((song) => (
          <div
            key={song.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={song.image}
                alt={song.title}
                className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {song.mood}
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                {song.title}
              </h3>

              <p className="mt-1 text-neutral-400">
                {song.artist}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-neutral-500">
                  {song.duration}
                </span>

                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 text-xl text-black transition-all duration-300 hover:scale-110 hover:bg-cyan-300">
                  ▶
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingSongs;