const projects = [
  {
    title: "REVIVE",
    type: "2D Pixel-Art Metroidvania",
    description:
      "메인 클라이언트 프로그래머로 참여하여 데이터 파이프라인, DI 초기화 구조, 씬 전환, 플레이어 시스템, 세이브, 컷씬 연동, 보스 기믹을 구현한 프로젝트입니다.",
    tags: ["Unity", "C#", "Metroidvania", "DI", "Addressables", "Naninovel"],
    href: "/projects/revive",
  },
  {
    title: "Pixel Defense",
    type: "2D Tower Defense",
    description:
      "타워 배치, 웨이브, 적 이동, 투사체, 자원 관리 등 디펜스 게임의 핵심 루프를 구현한 프로젝트입니다.",
    tags: ["Unity", "C#", "Tower Defense", "Pooling", "UI"],
    href: "/projects/pixel-defense",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-emerald-300">
          UNITY CLIENT PROGRAMMER
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          게임플레이 시스템과 데이터 기반 구조를 설계하는 개발자
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
          Unity 기반 2D 게임을 개발하며, 단순 기능 구현뿐 아니라 데이터
          파이프라인, 런타임 초기화, 씬 전환, 세이브, 컷씬 연동처럼 게임을
          안정적으로 굴러가게 만드는 구조에 관심이 있습니다.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/projects/revive"
            className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
          >
            REVIVE 보기
          </a>
          <a
            href="/projects"
            className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-emerald-300"
          >
            프로젝트 보기
          </a>
        </div>

        <section className="mt-24 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-emerald-300"
            >
              <p className="text-sm text-emerald-300">{project.type}</p>
              <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </section>
      </section>
    </main>
  );
}