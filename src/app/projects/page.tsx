export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-emerald-300 hover:underline">
          ← Home
        </a>

        <h1 className="mt-12 text-5xl font-bold">Projects</h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <a
            href="/projects/revive"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-emerald-300"
          >
            <p className="text-sm text-emerald-300">2D Metroidvania</p>
            <h2 className="mt-3 text-3xl font-bold">REVIVE</h2>
            <p className="mt-4 text-zinc-300">
              데이터 파이프라인, DI, 씬 전환, 플레이어 시스템, 컷씬 연동을
              담당한 Unity 프로젝트입니다.
            </p>
          </a>

          <a
            href="/projects/pixel-defense"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-emerald-300"
          >
            <p className="text-sm text-emerald-300">2D Tower Defense</p>
            <h2 className="mt-3 text-3xl font-bold">Pixel Defense</h2>
            <p className="mt-4 text-zinc-300">
              타워 디펜스 핵심 루프를 구현한 Unity 프로젝트입니다.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}