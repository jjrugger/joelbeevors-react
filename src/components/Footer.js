const MARQUEE_TEXT = "ARCHITECTURE アーキテクチャ • RELIABILITY 信頼性 • PRECISION 精度 • PERFORMANCE パフォーマンス • 0.00ms LATENCY レイテンシ • SCALABILITY スケーラビリティ • ACCESSIBILITY アクセシビリティ • ";

function Footer() {
  return (
    <footer className="bg-dot-grid-dark">
      <div className="overflow-hidden border-b border-primary/10 py-3 bg-secondary">
        <div className="animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-mono-tech text-xs text-primary/60 tracking-widest whitespace-nowrap px-1">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 md:px-8 py-6">
        <div className="flex flex-col gap-1">
          <span className="font-inter font-black text-primary text-sm tracking-widest uppercase bg-secondary px-1 w-fit inline-block">Joel Beevors</span>
          <span className="font-mono-tech text-xs text-primary/40 tracking-widest bg-secondary px-1 w-fit inline-block">フロントエンド開発者 / リーズ</span>
        </div>
        <span className="font-mono-tech text-xs text-primary/30 tracking-widest bg-secondary px-1 w-fit inline-block">© {new Date().getFullYear()} JB-SYSTEMS</span>
      </div>
    </footer>
  );
}

export default Footer;
