export default function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* Grid */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

      {/* Green Glow */}
      <div
        className="
        absolute
        left-1/4
        top-1/3
        h-[500px]
        w-[500px]
        rounded-full
        bg-green-500/20
        blur-[150px]
        "
      />


      {/* Cyan Glow */}
      <div
        className="
        absolute
        right-1/4
        top-1/2
        h-[400px]
        w-[400px]
        rounded-full
        bg-cyan-500/10
        blur-[150px]
        "
      />


      {/* Scan Line */}
      <div
        className="
        absolute
        inset-x-0
        top-0
        h-px
        bg-green-400/40
        shadow-[0_0_20px_#22c55e]
        "
      />

    </div>
  );
}