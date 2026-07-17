export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-white">
          MR<span className="text-green-400">.</span>ROBOT
        </div>

        <nav className="hidden gap-6 text-sm text-gray-400 md:flex">
          <a href="#" className="hover:text-white">
            Home
          </a>

          <a href="#skills" className="hover:text-white">
            Skills
          </a>

          <a href="#projects" className="hover:text-white">
            Projects
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}