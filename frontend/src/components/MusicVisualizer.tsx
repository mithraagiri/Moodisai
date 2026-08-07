function MusicVisualizer() {

  const bars = [
    "h-3",
    "h-6",
    "h-10",
    "h-14",
    "h-8",
    "h-12",
    "h-6",
    "h-4",
    "h-9",
    "h-5",
    "h-11",
    "h-7",
  ];


  return (

    <div
    className="
    flex
    h-20
    items-center
    justify-center
    gap-1
    py-5
    "
    >

      {
        bars.map((height,index)=>(

          <span
          key={index}
          className={`
          w-1.5
          rounded-full
          bg-gradient-to-t
          from-cyan-500
          to-teal-300
          shadow-[0_0_15px_rgba(34,211,238,0.7)]
          animate-[musicWave_1s_ease-in-out_infinite]
          ${height}
          `}
          style={{
            animationDelay:`${index*0.12}s`
          }}
          />


        ))
      }


    </div>

  );
}


export default MusicVisualizer;