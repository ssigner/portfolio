import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0B0F14]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold tracking-tight text-zinc-100">
          ssigner.dev
        </Link>

        <nav className="flex items-center gap-6 text-sm text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-300"
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://github.com/ssigner"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-4 py-2 transition hover:border-emerald-300 hover:text-emerald-300"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}