import { useState, useEffect } from "react";

const JAPANESE = "フロントエンド\n開発者";
const ENGLISH = "Front-End\nDeveloper";
const SCRAMBLE_CHARS = "アイウエオカキクケコサシスセソ0123456789#$%@-_";
const CYCLES = 3;
const CHAR_DELAY = 20;
const INTERVAL = 20;

function AnimatedTitle() {
  const [output, setOutput] = useState(ENGLISH);

  useEffect(() => {
    const allTimers = [];

    const scrambleTo = (_from, to, startDelay, onComplete) => {
      const toArr = to.split("");
      const current = new Array(toArr.length).fill(" ");
      toArr.forEach((ch, i) => {
        if (ch === "\n") current[i] = "\n";
      });
      let resolved = 0;
      const nonNewline = toArr.filter((c) => c !== "\n").length;

      toArr.forEach((targetChar, index) => {
        if (targetChar === "\n") {
          current[index] = "\n";
          return;
        }
        let cycle = 0;
        const t = setTimeout(() => {
          const interval = setInterval(() => {
            if (cycle >= CYCLES) {
              clearInterval(interval);
              current[index] = targetChar;
              setOutput(toArr.map((_, i) => current[i] ?? "").join(""));
              resolved++;
              if (resolved === nonNewline) onComplete?.();
            } else {
              current[index] = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
              setOutput(toArr.map((_, i) => current[i] ?? " ").join(""));
            }
            cycle++;
          }, INTERVAL);
          allTimers.push(interval);
        }, startDelay + index * CHAR_DELAY);
        allTimers.push(t);
      });
    };

    scrambleTo(ENGLISH, JAPANESE, 600, () => {
      const t = setTimeout(() => {
        scrambleTo(JAPANESE, ENGLISH, 0, null);
      }, 400);
      allTimers.push(t);
    });

    return () => allTimers.forEach((t) => { clearTimeout(t); clearInterval(t); });
  }, []);

  const lines = output.split("\n");

  return (
    <h1 className="font-bebas text-[64px] md:text-[100px] xl:text-[140px] 2xl:text-[180px] leading-none text-secondary tracking-wide w-full md:w-[600px] xl:w-[800px] 2xl:w-[1000px] min-h-[140px] md:min-h-[200px] xl:min-h-[280px] 2xl:min-h-[360px]">
      {lines.map((line, i) => (
        <span key={i} className="block h-[70px] md:h-[100px] xl:h-[140px] 2xl:h-[180px] overflow-hidden">
          {line || "\u00A0"}
        </span>
      ))}
    </h1>
  );
}

export default AnimatedTitle;
