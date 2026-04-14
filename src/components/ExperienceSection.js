function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-secondary/20 scroll-mt-16">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 border-b border-secondary/20">
        <div className="flex items-center gap-4">
          <span className="font-inter font-black text-sm tracking-widest text-secondary uppercase">Experience</span>
          <span className="font-mono-tech text-xs text-secondary/50 tracking-widest">経験</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tertiary inline-block animate-pulse"></span>
          <span className="font-mono-tech text-xs text-secondary tracking-widest uppercase hidden sm:inline">Live Feed</span>
        </div>
      </div>

      {/* Current */}
      <div className="flex items-start justify-between px-6 md:px-8 py-6 border-b border-secondary/10">
        <div className="flex items-start gap-4 md:gap-6">
          <span className="bg-tertiary text-primary font-mono-tech text-xs px-2 py-1 tracking-widest uppercase mt-1 shrink-0">Current</span>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <a href="https://musicvine.com" target="_blank" rel="noreferrer" className="font-inter font-black text-secondary text-lg tracking-widest uppercase hover:text-tertiary transition-colors">Musicvine</a>
              <span className="text-secondary/30 relative -top-0.5">|</span>
              <a href="https://uppbeat.io" target="_blank" rel="noreferrer" className="font-inter font-black text-secondary text-lg tracking-widest uppercase hover:text-tertiary transition-colors">Uppbeat</a>
            </div>
            <p className="font-mono-tech text-xs text-secondary/50 tracking-widest">現在の雇用 — フロントエンド開発者</p>
            <p className="font-inter text-sm text-secondary/70 leading-relaxed max-w-2xl">
              Musicvine and Uppbeat provide music licensing for creators and businesses worldwide. As a front-end developer, my role involves building and maintaining the platforms that power both products, creating fast, accessible, and polished user experiences that make finding and licensing music as seamless as possible.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "React", href: "https://react.dev" },
                { label: "Next.js", href: "https://nextjs.org" },
                { label: "Tailwind", href: "https://tailwindcss.com" },
                { label: "HEX", href: "https://hex.tech" },
                { label: "Google Drive", href: "https://drive.google.com" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="font-mono-tech text-xs text-secondary border border-secondary/20 px-2 py-0.5 tracking-widest hover:bg-secondary hover:text-primary transition-colors">{label}</a>
              ))}
            </div>
          </div>
        </div>
        <span className="font-mono-tech text-xs text-secondary/40 tracking-widest hidden sm:inline whitespace-nowrap">REF: MV-01</span>
      </div>

      {/* Previous */}
      <div className="flex items-start justify-between px-6 md:px-8 py-6">
        <div className="flex items-start gap-4 md:gap-6">
          <span className="bg-secondary/10 text-secondary font-mono-tech text-xs px-2 py-1 tracking-widest uppercase mt-1 shrink-0">Previous</span>
          <div className="flex flex-col gap-3">
            <a href="https://www.union.co.uk" target="_blank" rel="noreferrer" className="font-inter font-black text-secondary text-lg tracking-widest uppercase hover:text-tertiary transition-colors">The Union</a>
            <p className="font-mono-tech text-xs text-secondary/50 tracking-widest">以前の雇用 — フロントエンド開発者</p>
            <p className="font-inter text-sm text-secondary/70 leading-relaxed max-w-2xl">
              The Union is one of Scotland's leading advertising and marketing agencies. During my time there I built and maintained countless client websites, working across a wide range of industries and briefs, delivering polished, on-brand digital experiences to some of their biggest accounts.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { label: "jQuery", href: "https://jquery.com" },
                { label: "Drupal CMS", href: "https://www.drupal.org" },
                { label: "Microsoft Office", href: "https://www.microsoft.com/en-us/microsoft-365" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="font-mono-tech text-xs text-secondary border border-secondary/20 px-2 py-0.5 tracking-widest hover:bg-secondary hover:text-primary transition-colors">{label}</a>
              ))}
            </div>
          </div>
        </div>
        <span className="font-mono-tech text-xs text-secondary/40 tracking-widest hidden sm:inline whitespace-nowrap">REF: TU-01</span>
      </div>
    </section>
  );
}

export default ExperienceSection;
