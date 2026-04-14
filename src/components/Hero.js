import AnimatedTitle from "./AnimatedTitle";

function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-8 py-10 md:py-8 min-h-[80vh] bg-dot-grid gap-10 md:gap-0 scroll-mt-16">
      {/* Left */}
      <div className="flex flex-col gap-3 w-full md:max-w-xl">
        <span className="bg-tertiary text-primary font-mono-tech text-xs px-3 py-1 tracking-widest uppercase w-fit">
          Terminal Access Established
        </span>

        <div className="flex items-center gap-3">
          <div
            className="font-mono-tech text-xs text-tertiary/70 tracking-widest leading-loose hidden sm:block"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            開発者・音楽家・作家・ゲーマー
          </div>
          <AnimatedTitle />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="font-inter font-black text-xs tracking-widest text-secondary uppercase">
            UI Design &amp; Interface Engineering
          </span>
          <span className="w-8 h-px bg-secondary/50 hidden sm:inline-block"></span>
          <span className="font-mono-tech text-xs text-secondary/60">
            フロントエンド開発者 — 東京 / 2026
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-3 w-full md:max-w-sm">
        <div className="relative border border-secondary/20 w-full aspect-[4/3] flex items-end overflow-hidden">
          <img
            src="https://images.pexels.com/photos/8070161/pexels-photo-8070161.jpeg"
            alt="Joel Beevors"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(46,58,78,0.7) 0%, rgba(179,90,56,0.4) 100%)",
              mixBlendMode: "multiply",
            }}
          ></div>
          <span className="relative z-10 font-mono-tech text-xs text-primary bg-secondary/80 px-2 py-1 m-2">
            REF: JB01-CHASSIS
          </span>
        </div>
        <p className="font-inter text-sm text-secondary/70 leading-relaxed">
          Building modern web experiences with a love for clean interfaces, sharp detail, and technology that feels alive.
        </p>
      </div>
    </section>
  );
}

export default Hero;
