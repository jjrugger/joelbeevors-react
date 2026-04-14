function ContactSection() {
  return (
    <section id="contact" className="border-t border-secondary/20 scroll-mt-16">
      <div className="flex items-center gap-4 px-6 md:px-8 py-4 border-b border-secondary/20">
        <span className="font-inter font-black text-sm tracking-widest text-secondary uppercase">Contact</span>
        <span className="font-mono-tech text-xs text-secondary/50 tracking-widest">連絡先</span>
      </div>

      <div className="px-6 md:px-8 py-6 max-w-xl">
        <p className="font-inter text-sm text-secondary/80 leading-relaxed">
          If you want to get in touch — whether it's about a project, a collaboration, or just to say hello — feel free to reach out. I'm always open to interesting conversations and new opportunities.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 px-6 md:px-8 pb-6">
        <a
          href="https://www.linkedin.com/in/joel-beevors-772891232/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 border border-secondary/20 px-5 py-3 hover:bg-secondary hover:text-primary transition-colors group"
        >
          <span className="font-mono-tech text-xs text-secondary group-hover:text-primary tracking-widest uppercase">LinkedIn</span>
          <span className="font-mono-tech text-xs text-secondary/40 group-hover:text-primary/60">リンクトイン →</span>
        </a>
        <a
          href="https://www.instagram.com/joel_joelerson/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 border border-secondary/20 px-5 py-3 hover:bg-secondary hover:text-primary transition-colors group"
        >
          <span className="font-mono-tech text-xs text-secondary group-hover:text-primary tracking-widest uppercase">Instagram</span>
          <span className="font-mono-tech text-xs text-secondary/40 group-hover:text-primary/60">インスタグラム →</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
