export default function PixelDefensePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-emerald-300 hover:underline">
          ← Home
        </a>

        <h1 className="mt-12 text-6xl font-bold">Pixel Defense</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          2D 타워 디펜스 프로젝트입니다. 타워 배치, 웨이브, 적 이동,
          투사체, 자원 관리 등 디펜스 게임의 핵심 루프를 구현한 프로젝트로
          정리할 예정입니다.
        </p>
      </section>
    </main>
  );
}