import {
  commands,
} from "./commands";


export type TerminalResult = {
  output: string[];
  action?: "clear";
};


export function executeCommand(
  input: string
): TerminalResult {


  const command =
    input.trim().toLowerCase();



  if (!command) {
    return {
      output: [],
    };
  }



  if (command === "clear") {

    return {
      output: [],
      action: "clear",
    };

  }



  if (command === "help") {

    return {
      output: [
        "╭──── MR.ROBOT TERMINAL ────╮",
        "",
        "Available Commands:",
        "",
        ...commands.flatMap((cmd)=>[
          `> ${cmd.name}`,
          `  ${cmd.description}`,
          "",
        ]),
        "╰──────────────────────────╯",
      ],
    };

  }



  const found =
    commands.find(
      (cmd)=>cmd.name === command
    );



  if(found){

    return {
      output: found.output,
    };

  }



  return {
    output:[
      `command not found: ${command}`,
      "Type 'help' to see available commands.",
    ],
  };

}