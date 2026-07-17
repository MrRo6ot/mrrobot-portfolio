"use client";

import { useEffect, useState } from "react";


const bootLines = [
  "Initializing system...",
  "Loading security modules...",
  "Checking vulnerabilities...",
  "Establishing secure connection...",
  "Access granted ✓",
];


export default function BootSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {

  const [lines, setLines] = useState<string[]>([]);


  useEffect(() => {

    let index = 0;


    const timer = setInterval(() => {

      setLines((prev) => [
        ...prev,
        bootLines[index],
      ]);


      index++;


      if(index === bootLines.length){

        clearInterval(timer);


        setTimeout(() => {
          onComplete();
        },1000);

      }


    },700);


    return () => clearInterval(timer);

  },[onComplete]);


  return (
    <div className="font-mono text-sm text-green-400">

      {lines.map((line,i)=>(
        <p key={i}>
          {">"} {line}
        </p>
      ))}

    </div>
  );
}