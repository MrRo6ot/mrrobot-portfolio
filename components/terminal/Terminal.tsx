"use client";

import { useState } from "react";
import { executeCommand } from "./engine";

type Line = {
  type: "command" | "output";
  content: string;
};

export default function Terminal() {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState<Line[]>([
    {
      type: "output",
      content: "MR.ROBOT Terminal v1.0",
    },
    {
      type: "output",
      content: "Type 'help' to see available commands.",
    },
  ]);


  function handleCommand() {
    if (!input.trim()) return;


    const result = executeCommand(input);


    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        content: input,
      },
      ...result.map((line) => ({
        type: "output" as const,
        content: line,
      })),
    ]);


    setInput("");
  }


  return (
    <div
      className="
      w-full
      max-w-xl
      overflow-hidden
      rounded-xl
      border
      border-white/10
      bg-black/60
      backdrop-blur
      shadow-2xl
      "
    >

      {/* Header */}
      <div
        className="
        flex
        items-center
        gap-2
        border-b
        border-white/10
        px-4
        py-3
        "
      >

        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-auto font-mono text-xs text-gray-500">
          MR.ROBOT TERMINAL
        </span>

      </div>


      {/* Body */}
      <div
        className="
        min-h-[260px]
        space-y-2
        p-5
        font-mono
        text-sm
        text-gray-300
        "
      >

        {history.map((line, index) => (

          <div key={index}>

            {line.type === "command" ? (
              <p>
                <span className="text-green-400">
                  root@mrrobot:~$
                </span>{" "}
                {line.content}
              </p>
            ) : (
              <p className="pl-4 text-gray-400">
                {line.content}
              </p>
            )}

          </div>

        ))}


        {/* Input */}
        <div className="flex">

          <span className="text-green-400">
            root@mrrobot:~$
          </span>

          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand();
              }
            }}
            className="
            ml-2
            flex-1
            bg-transparent
            outline-none
            text-white
            "
          />

          <span className="animate-pulse text-green-400">
            _
          </span>

        </div>

      </div>

    </div>
  );
}