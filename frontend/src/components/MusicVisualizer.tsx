function MusicVisualizer() {
  return (
    <div className="flex items-center justify-center gap-1 py-4">

      <span
        className="
        h-3
        w-1
        rounded-full
        bg-cyan-400
        animate-pulse
        "
      />

      <span
        className="
        h-6
        w-1
        rounded-full
        bg-cyan-400
        animate-pulse
        "
        style={{
          animationDelay: "0.15s",
        }}
      />

      <span
        className="
        h-10
        w-1
        rounded-full
        bg-cyan-400
        animate-pulse
        "
        style={{
          animationDelay: "0.3s",
        }}
      />

      <span
        className="
        h-5
        w-1
        rounded-full
        bg-cyan-400
        animate-pulse
        "
        style={{
          animationDelay: "0.45s",
        }}
      />

      <span
        className="
        h-8
        w-1
        rounded-full
        bg-cyan-400
        animate-pulse
        "
        style={{
          animationDelay: "0.6s",
        }}
      />

      <span
        className="
        h-3
        w-1
        rounded-full
        bg-cyan-400
        animate-pulse
        "
        style={{
          animationDelay: "0.75s",
        }}
      />

    </div>
  );
}

export default MusicVisualizer;