import { Terminal } from "lucide-react";

export default function TerminalCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur">

      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">

        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <div className="ml-auto text-gray-500">
          <Terminal size={16} />
        </div>

      </div>


      {/* Terminal Content */}
      <div className="space-y-2 p-5 font-mono text-sm text-gray-300">

        <p>
          <span className="text-green-400">
            root@mrrobot
          </span>
          :~$ whoami
        </p>


        <p className="pl-4 text-gray-400">
          Full Stack Developer
        </p>


        <p className="pl-4 text-gray-400">
          Security Enthusiast
        </p>


        <p className="pl-4 text-gray-400">
          Bug Hunter
        </p>


        <p className="mt-4">
          <span className="text-green-400">
            root@mrrobot
          </span>
          :~$ _
        </p>

      </div>

    </div>
  );
}