import Link from "next/link";

const featuredProjects = [
  {
    title: "RE∀IVE",
    category: "Demo Released / 2D Metroidvania",
    role: "Main Client Programmer / Development Lead",
    description:
      "Steam과 STOVE에 데모를 출시한 Unity 2D 메트로배니아입니다. 데이터 파이프라인, 씬 전환, 캐릭터 전환, 세이브, 컷씬과 멀티 스토어 SDK 연동을 구현했습니다.",
    tags: ["Unity", "C#", "Steam", "STOVE", "Naninovel", "Save", "Scene Flow"],
    href: "/projects/revive",
    badge: "Demo Released",
  },
  {
    title: "Pixel Defense",
    category: "Released Commercial Game",
    role: "Unity Game Developer / Released Game",
    description:
      "STOVE 스토어에 출시 및 판매한 2D 타워 디펜스 게임입니다. 타워 조합, 업그레이드, 히든 조합, 40라운드 진행 구조를 기반으로 한 전략형 디펜스 게임입니다.",
    tags: ["Unity", "C#", "Tower Defense", "Released", "STOVE", "UX Update"],
    href: "/projects/pixel-defense",
    badge: "Released",
  },
  {
    title: "FindSuspect",
    category: "AI / Computer Vision",
    role: "Algorithm Developer",
    description:
      "CCTV 영상과 용의자 이미지를 기반으로 사람을 검출하고, 보행자 특징을 추출한 뒤 유사도를 계산해 유사 인물을 찾는 졸업과제 프로젝트입니다.",
    tags: ["Python", "YOLOv9", "VTFPAR++", "Similarity Search", "AI"],
    href: "/projects/find-suspect",
    badge: "Graduation Project",
  },
  {
    title: "Box.size Algorithm",
    category: "Computer Vision / Competition",
    role: "Computer Vision Algorithm Developer",
    description:
      "사진에서 박스를 검출하고, 배경 제거와 Edge Detection, 카메라 기하 계산을 통해 실제 박스 크기를 추정하는 알고리즘 프로젝트입니다.",
    tags: ["Python", "YOLOv8", "OpenCV", "Canny", "Camera Geometry"],
    href: "/projects/box-size",
    badge: "Competition",
  },
];

const skills = [
  {
    title: "Game Client",
    items: ["Unity", "C#", "URP 2D", "Input System", "Animator", "Tilemap"],
  },
  {
    title: "Game Systems",
    items: [
      "Player Controller",
      "Save / Load",
      "Scene Transition",
      "Object Pooling",
      "Cutscene Integration",
      "Data Pipeline",
    ],
  },
  {
    title: "Architecture",
    items: [
      "ScriptableObject",
      "DI Container",
      "Addressables",
      "Bootstrap Flow",
      "Manager Pattern",
      "Async Loading",
    ],
  },
  {
    title: "AI / Vision",
    items: [
      "Python",
      "YOLO",
      "OpenCV",
      "Image Processing",
      "Similarity Search",
      "Camera Geometry",
    ],
  },
];

function ProjectCard({
  title,
  category,
  role,
  description,
  tags,
  href,
  badge,
}: {
  title: string;
  category: string;
  role: string;
  description: string;
  tags: string[];
  href: string;
  badge: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-300">
            {category}
          </p>
          <h3 className="mt-3 text-3xl font-bold text-zinc-100">{title}</h3>
        </div>

        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300 group-hover:bg-emerald-300 group-hover:text-zinc-950">
          {badge}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-emerald-300">{role}</p>

      <p className="mt-4 leading-7 text-zinc-300">{description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-8 text-sm font-semibold text-zinc-300 transition group-hover:text-emerald-300">
        자세히 보기 →
      </p>
    </Link>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-bold text-emerald-300">{title}</h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <section className="flex min-h-[calc(100vh-10rem)] flex-col justify-center py-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
                UNITY CLIENT PROGRAMMER
              </p>

              <h1 className="mt-5 max-w-5xl break-keep text-5xl font-bold leading-tight md:text-6xl xl:text-7xl">
                게임 시스템과 데이터 기반 구조를 설계하는 개발자
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                Unity 기반 게임의 플레이어·씬·세이브·컷씬 흐름을 설계하고,
                RE∀IVE의 Steam·STOVE 데모 출시를 위한 플랫폼 SDK와 입력,
                도전과제 연동까지 구현했습니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects/revive"
                  className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
                >
                  개인 기여 자세히 보기
                </Link>

                <Link
                  href="/projects"
                  className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-emerald-300 hover:text-emerald-300"
                >
                  전체 프로젝트 보기
                </Link>

                <a
                  href="https://github.com/ssigner"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-emerald-300 hover:text-emerald-300"
                >
                  GitHub
                </a>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-emerald-300/30 bg-zinc-900/80 p-8 shadow-[0_30px_100px_rgba(16,185,129,0.12)]">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-300/15 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold tracking-[0.22em] text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]" />
                  NOW PLAYABLE
                </div>

                <p
                  className="mt-7 text-6xl font-black tracking-[-0.07em] text-white"
                  aria-label="REVIVE"
                >
                  RE∀IVE
                </p>
                <p className="mt-3 text-xl font-bold text-zinc-200">
                  Steam · STOVE Demo
                </p>
                <p className="mt-5 leading-7 text-zinc-400">
                  멀티 스토어 SDK, 도전과제, Steam Input과 저장 경로 대응까지
                  직접 구현한 팀 프로젝트입니다.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href="https://store.steampowered.com/app/4629440/REIVE_REVIVE_Demo/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-emerald-300 px-4 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-emerald-200"
                  >
                    Steam 플레이 ↗
                  </a>
                  <a
                    href="https://store.onstove.com/ko/games/105465"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-zinc-700 bg-zinc-950/50 px-4 py-3 text-center text-sm font-bold text-zinc-100 transition hover:border-emerald-300 hover:text-emerald-200"
                  >
                    STOVE 플레이 ↗
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <p className="text-3xl font-bold text-emerald-300">02</p>
              <p className="mt-2 text-sm text-zinc-400">Store Release Experiences</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <p className="text-3xl font-bold text-emerald-300">04</p>
              <p className="mt-2 text-sm text-zinc-400">Selected Projects</p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <p className="text-3xl font-bold text-emerald-300">AI</p>
              <p className="mt-2 text-sm text-zinc-400">Computer Vision Experience</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
                SELECTED PROJECTS
              </p>
              <h2 className="mt-3 text-4xl font-bold">Projects</h2>
              <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
                게임 프로젝트와 AI / Computer Vision 프로젝트를 통해 구현한
                주요 경험입니다.
              </p>
            </div>

            <Link
              href="/projects"
              className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300 hover:text-emerald-300"
            >
              전체 보기
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            SKILLS
          </p>
          <h2 className="mt-3 text-4xl font-bold">Technical Stack</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Unity 클라이언트 개발을 중심으로 게임 시스템 구조와 이미지 분석
            알고리즘 개발 경험을 함께 갖추고 있습니다.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-emerald-300/40 bg-zinc-900/60 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            ABOUT ME
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            기능 구현에서 끝내지 않고, 구조와 흐름을 고민합니다.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            게임 개발에서는 단순히 기능을 하나씩 붙이는 것보다, 데이터가
            어디서 시작해 런타임에서 어떻게 쓰이고, 플레이어 입력과 씬 전환,
            저장 데이터, 컷씬 연출이 어떤 순서로 연결되는지가 중요하다고
            생각합니다. RE∀IVE에서는 이러한 흐름을 직접 설계하고 구현했으며,
            Pixel Defense에서는 실제 출시와 업데이트를 경험했습니다. 또한
            FindSuspect와 Box.size Algorithm을 통해 이미지 분석과 AI 기반
            알고리즘 문제 해결 경험도 쌓았습니다.
          </p>

          <div className="mt-8">
            <Link
              href="/about"
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              About 자세히 보기
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
