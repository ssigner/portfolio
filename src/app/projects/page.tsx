import Link from "next/link";

const gameProjects = [
  {
    title: "REVIVE",
    subtitle: "2D Pixel-Art Metroidvania",
    role: "Main Client Programmer / Development Lead",
    description:
      "Unity 기반 2D 메트로배니아 프로젝트입니다. 데이터 파이프라인, DI 초기화 구조, 씬 전환, 플레이어 시스템, 세이브/진행도, 컷씬 연동, 보스 기믹을 구현했습니다.",
    tags: [
      "Unity",
      "C#",
      "Metroidvania",
      "Data Pipeline",
      "DI Container",
      "Naninovel",
      "Addressables",
    ],
    href: "/projects/revive",
    status: "Team Project",
    highlight: true,
  },
  {
    title: "Pixel Defense",
    subtitle: "Released Commercial Tower Defense Game",
    role: "Unity Game Developer / Released Game",
    description:
      "STOVE 스토어에 출시 및 판매한 2D 타워 디펜스 게임입니다. 타워 조합, 업그레이드, 히든 조합, 40라운드 진행 구조를 기반으로 제한된 자원 안에서 마지막 라운드 클리어에 도전하는 전략형 게임입니다.",
    tags: [
      "Unity",
      "C#",
      "Tower Defense",
      "Released Game",
      "STOVE",
      "Game Balance",
      "UX Update",
    ],
    href: "/projects/pixel-defense",
    externalHref: "https://store.onstove.com/ko/games/2681",
    status: "Released",
    highlight: true,
  },
];

const aiProjects = [
  {
    title: "FindSuspect",
    subtitle: "AI-based Suspect Search System",
    role: "Algorithm Developer",
    description:
      "CCTV 영상과 용의자 이미지를 기반으로 사람을 검출하고, 보행자 특징을 추출한 뒤 유사도를 계산해 유사 인물을 찾는 졸업과제 프로젝트입니다. YOLOv9 모델 학습, VTFPAR++ 기반 특징 추출, 코사인 유사도 기반 검색 알고리즘 개발을 담당했습니다.",
    tags: [
      "Python",
      "YOLOv9",
      "VTFPAR++",
      "Computer Vision",
      "Similarity Search",
      "Cosine Similarity",
    ],
    href: "/projects/find-suspect",
    externalHref: "https://github.com/PNUCSE-A2O/FindSuspect",
    status: "Graduation Project",
  },
  {
    title: "Box.size Algorithm",
    subtitle: "Computer Vision Box Dimension Estimation",
    role: "Computer Vision Algorithm Developer",
    description:
      "CJ대한통운 미래기술 챌린지 공모전용 프로젝트입니다. 이미지에서 박스를 검출하고, 배경 제거와 Edge Detection을 거쳐 꼭지점 좌표를 추출한 뒤, 카메라 기하를 활용해 실제 박스 크기를 추정하는 알고리즘을 개발했습니다.",
    tags: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Canny Edge Detection",
      "Camera Geometry",
      "Object Detection",
    ],
    href: "/projects/box-size",
    externalHref: "https://github.com/Box-size/box.size-algorithm",
    status: "Competition Project",
  },
];

function ProjectCard({
  title,
  subtitle,
  role,
  description,
  tags,
  href,
  externalHref,
  status,
  highlight,
}: {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  tags: string[];
  href: string;
  externalHref?: string;
  status: string;
  highlight?: boolean;
}) {
  return (
    <article
      className={[
        "group rounded-2xl border bg-zinc-900/60 p-6 transition duration-300",
        "hover:-translate-y-1 hover:border-emerald-300",
        highlight
          ? "border-emerald-300/40 shadow-[0_0_40px_rgba(16,185,129,0.08)]"
          : "border-zinc-800",
      ].join(" ")}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-emerald-300">
            {status}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-zinc-100">{title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{subtitle}</p>
        </div>

        {highlight && (
          <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-bold text-zinc-950">
            Featured
          </span>
        )}
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

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={href}
          className="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
        >
          자세히 보기
        </Link>

        {externalHref && (
          <a
            href={externalHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300 hover:text-emerald-300"
          >
            외부 링크
          </a>
        )}
      </div>
    </article>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-bold text-zinc-100">{title}</h2>
      <p className="mt-4 max-w-3xl leading-8 text-zinc-300">{description}</p>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div>
          <Link href="/" className="text-sm text-emerald-300 hover:underline">
            ← Home
          </Link>

          <p className="mt-12 text-sm font-semibold tracking-[0.3em] text-emerald-300">
            SELECTED PROJECTS
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            게임 시스템 개발부터 이미지 분석 알고리즘까지
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Unity 기반 게임 프로젝트에서는 플레이어 시스템, 데이터 파이프라인,
            씬 전환, 세이브, 컷씬 연동을 구현했고, AI / Computer Vision
            프로젝트에서는 객체 검출, 이미지 분석, 유사도 검색 알고리즘을
            개발했습니다.
          </p>
        </div>

        <section className="mt-20">
          <SectionHeader
            eyebrow="GAME PROJECTS"
            title="Unity Game Development"
            description="실제 출시작과 팀 프로젝트를 통해 게임플레이 시스템, 런타임 구조, 데이터 파이프라인, 씬 전환, 컷씬 연동 경험을 쌓았습니다."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {gameProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-24">
          <SectionHeader
            eyebrow="AI / COMPUTER VISION"
            title="Image Analysis & Algorithm"
            description="이미지 기반 객체 검출, 보행자 특징 추출, 유사도 계산, 카메라 기하 기반 크기 추정 등 실제 문제 해결 중심의 알고리즘 프로젝트를 진행했습니다."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {aiProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            SUMMARY
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            내가 보여주고 싶은 개발자 방향
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            저는 Unity 클라이언트 개발을 중심으로 게임 시스템과 데이터 기반
            구조를 설계해왔습니다. REVIVE에서는 메인 프로그래머로서 게임의
            핵심 런타임 구조와 기능을 담당했고, Pixel Defense에서는 실제
            스토어 출시와 운영 업데이트 경험을 쌓았습니다. 또한 FindSuspect와
            Box.size Algorithm을 통해 이미지 분석과 AI 기반 알고리즘 개발
            경험을 함께 확장했습니다.
          </p>
        </section>
      </section>
    </main>
  );
}