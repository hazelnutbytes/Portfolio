export default function Navbar() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-5 bg-black/75 backdrop-blur-md border-b border-zinc-900/50 z-50">

      <a
        href="#home"
        className="tracking-widest text-sm font-bold text-white hover:opacity-80 transition"
      >
        HAZEL
      </a>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-zinc-400 hover:text-white transition duration-350 ease-in-out"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="border border-zinc-800 hover:border-zinc-700 bg-zinc-950 text-white px-5 py-1.5 rounded-full text-xs font-semibold hover:bg-zinc-900 transition duration-300"
      >
        Let’s Talk
      </a>

    </nav>
  )
}