import { commands } from "./commands";

export function executeCommand(input: string) {
  const command = input.trim().toLowerCase();

  if (!command) {
    return [];
  }

  if (command in commands) {
    return commands[command as keyof typeof commands];
  }

  return [
    `command not found: ${command}`,
    "Type 'help' to see available commands.",
  ];
}