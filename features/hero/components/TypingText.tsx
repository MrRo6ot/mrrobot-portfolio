"use client";

import { useEffect, useState } from "react";

const texts = [
  "Building secure systems...",
  "Hunting vulnerabilities...",
  "Creating digital experiences...",
];


export default function TypingText() {

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {

    let index = 0;

    const currentText = texts[textIndex];

    const typing = setInterval(() => {

      setDisplayText(currentText.slice(0, index));

      index++;

      if (index > currentText.length) {
        clearInterval(typing);

        setTimeout(() => {
          setDisplayText("");

          setTextIndex(
            (prev) => (prev + 1) % texts.length
          );

        }, 1500);
      }

    }, 80);


    return () => clearInterval(typing);

  }, [textIndex]);


  return (
    <p className="mt-6 font-mono text-lg text-green-400">
      &gt; {displayText}
      <span className="animate-pulse">
        _
      </span>
    </p>
  );
}