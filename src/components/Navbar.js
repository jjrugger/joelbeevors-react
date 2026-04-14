import { useState } from "react";

function NavLink({ href, label, active }) {
  return (
    <a
      href={href}
      className={`font-inter font-bold text-xs tracking-widest uppercase ${active ? "text-tertiary" : "text-secondary hover:text-tertiary"} transition-colors`}
    >
      {label}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary border-b border-secondary/20">
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <span className="text-secondary text-lg font-mono-tech">⊞</span>
          <span className="font-inter font-black text-secondary text-xs md:text-sm tracking-widest uppercase">
            Joel Beevors <span className="hidden md:inline">/ フロントエンド開発者 - リーズ</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <NavLink href="#home" label="Home" active />
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#contact" label="Contact" />
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <span className="font-mono-tech text-xs text-secondary tracking-widest uppercase">Status: OK</span>
          <span className="bg-secondary text-primary font-mono-tech text-xs px-3 py-1 tracking-widest">アクティブ</span>
        </div>

        <button
          className="lg:hidden font-mono-tech text-secondary text-xs tracking-widest"
          onClick={() => setOpen(!open)}
        >
          {open ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden flex flex-col border-t border-secondary/20 bg-primary">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#contact", label: "Contact" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-inter font-bold text-xs tracking-widest text-secondary uppercase px-6 py-2 border-b border-secondary/10 hover:text-tertiary transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
