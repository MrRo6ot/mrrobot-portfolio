export type Command = {
  name: string;
  description: string;
  output: string[];
};


export const commands: Command[] = [

  {
    name: "about",
    description: "About me",
    output: [
      "MR.ROBOT",
      "Full Stack Developer",
      "Security Researcher",
      "Bug Hunter",
    ],
  },


  {
    name: "skills",
    description: "Technical skills",
    output: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Cyber Security",
    ],
  },


  {
    name: "projects",
    description: "View projects",
    output: [
      "Portfolio Website",
      "Security Tools",
      "Automation Projects",
    ],
  },


  {
    name: "contact",
    description: "Contact information",
    output: [
      "GitHub: github.com/MrRo6ot",
      "LinkedIn: Coming soon...",
    ],
  },


];