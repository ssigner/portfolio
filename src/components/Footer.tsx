import CopyEmailButton from "./CopyEmailButton";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0B0F14]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 ssigner. Unity Client Programmer.</p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/ssigner"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-300"
          >
            GitHub
          </a>

          <a
            href="https://ssigner.notion.site/be135b64b6e14a1dab3df0da39ad0d33"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-300"
          >
            Blog
          </a>

          <CopyEmailButton className="transition hover:text-emerald-300" />
        </div>
      </div>
    </footer>
  );
}