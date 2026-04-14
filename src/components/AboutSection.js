function AboutSection() {
  return (
    <section id="about" className="border-t border-secondary/20 scroll-mt-16">
      <div className="flex items-center gap-4 px-6 md:px-8 py-4 border-b border-secondary/20">
        <span className="font-inter font-black text-sm tracking-widest text-secondary uppercase">About</span>
        <span className="font-mono-tech text-xs text-secondary/50 tracking-widest">について</span>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16 px-6 md:px-8 py-10">
        {/* Bio */}
        <div className="flex flex-col gap-5 md:max-w-xl">
          <p className="font-inter text-sm text-secondary/80 leading-relaxed">
            I'm a front-end developer based in Leeds with a passion for building things that are as sharp to look at as they are to use. When I'm not pushing pixels, you'll find me deep in a good book, hunting down new music, grinding through a game, or tinkering with the latest in tech.
          </p>
          <p className="font-inter text-sm text-secondary/80 leading-relaxed">
            My work sits at an interesting crossroads — I'm just as comfortable with modern, clean tech aesthetics as I am with the darker, gothic and alternative side of design. That duality feeds into everything I build: precise and functional, but with a personality behind it.
          </p>
          <p className="font-mono-tech text-xs text-tertiary tracking-widest">
            {"// 音楽 • ゲーム • 技術 • 本"}
          </p>
        </div>

        {/* Interests */}
        <div className="flex flex-col gap-3">
          <p className="font-mono-tech text-xs text-secondary/40 tracking-widest uppercase mb-1">Interests / 興味</p>
          {[
            { en: "Music", ja: "音楽" },
            { en: "Gaming", ja: "ゲーム" },
            { en: "Technology", ja: "技術" },
            { en: "Books", ja: "本" },
            { en: "Art", ja: "芸術" },
          ].map(({ en, ja }) => (
            <div key={en} className="flex items-center gap-3 border-b border-secondary/10 pb-2">
              <span className="font-inter font-black text-xs text-secondary tracking-widest uppercase">{en}</span>
              <span className="font-mono-tech text-xs text-secondary/40">{ja}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
