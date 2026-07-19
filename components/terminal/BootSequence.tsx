"use client";

import { useEffect, useState } from "react";
import { useTyping } from "./useTyping";


const bootLines = [
  "Initializing system...",
  "Loading security modules...",
  "Checking vulnerabilities...",
  "Establishing secure connection...",
  "Access granted [OK]",
];


export default function BootSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {

  const [currentLine, setCurrentLine] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);


  const typedText = useTyping(
    bootLines[currentLine],
    40
  );


  useEffect(() => {

    if (
      typedText === bootLines[currentLine]
    ) {

      const timer = setTimeout(() => {


        if (currentLine < bootLines.length - 1) {
          setCompletedLines((prev) => [
            ...prev,
            typedText,
          ]);
        }


        if(currentLine < bootLines.length - 1){

          setCurrentLine((prev)=>prev + 1);

        } else {

          setTimeout(() => {
            onComplete();
          },300);

        }

      },100);


      return () => clearTimeout(timer);

    }


  }, [
    typedText,
    currentLine,
    onComplete
  ]);



  return (
    <div className="space-y-2 font-mono text-sm text-green-400">

      {completedLines.map((line,index)=>(
        <p key={index}>
          {">"} {line}
        </p>
      ))}


      {currentLine < bootLines.length && (
        <p>
          {">"} {typedText}
          <span className="animate-pulse">
            _
          </span>
        </p>
      )}

    </div>
  );
}