import Link from "next/link";
import CopyEmailButton from "@/components/CopyEmailButton";
const strengths = [
  {
    title: "Game System Architecture",
    body: "단순 기능 구현보다 데이터, 초기화 순서, 매니저 구조, 씬 전환, 저장 데이터가 런타임에서 어떻게 연결되는지 고민합니다.",
  },
  {
    title: "Unity Client Development",
    body: "Unity와 C#을 기반으로 플레이어 조작, 전투, 씬 전환, 세이브, 컷씬 연동, 오브젝트 풀링 등 게임 클라이언트 시스템을 구현했습니다.",
  },
  {
    title: "Data-Driven Workflow",
    body: "Excel / Google Sheet 기반 데이터를 ScriptableObject로 변환하고, Addressables와 DI Container를 통해 런타임에서 사용하는 구조를 설계했습니다.",
  },
  {
    title: "AI / Computer Vision",
    body: "YOLO 기반 객체 검출, 이미지 분석, 보행자 특징 추출, 유사도 검색, 카메라 기하 기반 치수 계산 프로젝트를 경험했습니다.",
  },
  {
    title: "Technical Writing & Review",
    body: "Unity, C#, 알고리즘, 프로젝트 회고를 개인 기록장에 정리하며, 구현한 기능의 구조와 장단점을 되돌아보는 습관을 유지하고 있습니다.",
  },
];

const experiences = [
  {
    title: "RE∀IVE",
    role: "Main Client Programmer / Development Lead",
    body: "Steam과 STOVE에 데모를 출시한 Unity 2D 메트로배니아 프로젝트에서 데이터 파이프라인, 씬 전환, 캐릭터 전환, 세이브/진행도, 컷씬/Naninovel과 멀티 스토어 SDK 연동을 구현했습니다.",
    href: "/projects/revive",
  },
  {
    title: "Pixel Defense",
    role: "Unity Game Developer / Released Game",
    body: "STOVE 스토어에 출시 및 판매한 2D 타워 디펜스 게임입니다. 타워 조합, 업그레이드, 히든 조합, 40라운드 구조를 기반으로 개발하고 출시 이후 UX 업데이트를 진행했습니다.",
    href: "/projects/pixel-defense",
  },
  {
    title: "FindSuspect",
    role: "Algorithm Developer",
    body: "졸업과제 프로젝트에서 YOLOv9 모델 학습, VTFPAR++ 기반 보행자 특징 추출, 코사인 유사도 기반 용의자 검색 알고리즘 개발을 담당했습니다.",
    href: "/projects/find-suspect",
  },
  {
    title: "Box.size Algorithm",
    role: "Computer Vision Algorithm Developer",
    body: "CJ대한통운 미래기술 챌린지 프로젝트에서 이미지 기반 박스 검출, 외곽선/꼭지점 추출, 카메라 기하 기반 실제 치수 계산 알고리즘을 개발했습니다.",
    href: "/projects/box-size",
  },
];

const skillGroups = [
  {
    title: "Game Engine",
    items: [
      "Unity",
      "C#",
      "URP 2D",
      "Input System",
      "Animator",
      "Tilemap",
      "Addressables",
    ],
  },
  {
    title: "Game Architecture",
    items: [
      "ScriptableObject",
      "DI Container",
      "Bootstrap Flow",
      "Save / Load",
      "Scene Transition",
      "Object Pooling",
      "Cutscene Integration",
    ],
  },
  {
    title: "Tools / Middleware",
    items: [
      "Naninovel",
      "Easy Save 3",
      "Advanced Scene Manager",
      "OneJS",
      "Behavior Designer",
      "Sensor Toolkit",
    ],
  },
  {
    title: "AI / Computer Vision",
    items: [
      "Python",
      "YOLOv8 / YOLOv9",
      "OpenCV",
      "Canny Edge Detection",
      "Cosine Similarity",
      "Camera Geometry",
    ],
  },
];

const workStyle = [
  "기능을 만들 때 단순히 동작 여부만 보지 않고, 이후 수정과 확장이 쉬운 구조인지 함께 확인합니다.",
  "문제가 생기면 로그, 재현 조건, 관련 시스템 순서를 기준으로 원인을 좁혀갑니다.",
  "게임 시스템은 플레이어 경험과 연결되어야 한다고 생각해서, 조작감·튜토리얼·피드백 흐름을 함께 고려합니다.",
  "팀 프로젝트에서는 내가 구현한 기능이 다른 파트와 충돌하지 않도록 데이터 구조와 초기화 순서를 중요하게 봅니다.",
];

const earlyProjects = [
  {
    title: "Black Jack",
    type: "First Personal Project",
    body: "학교 텀프로젝트 겸 처음으로 진행한 개인 프로젝트입니다. 초기 개인 개발 경험을 통해 게임 로직 구현과 프로젝트 완성 과정을 경험했습니다.",
  },
  {
    title: "Random Roadview Game",
    type: "Open API Personal Project",
    body: "학교 텀프로젝트의 Open API 활용 요구사항에 맞춰 새로 제작한 개인 프로젝트입니다. 외부 API를 활용해 게임 아이디어를 구현한 경험입니다.",
  },
  {
    title: "Pixel Defense Code Review",
    type: "Released Game Review",
    body: "Pixel Defense 개발 이후 GameData, Installer, ObjectPool, GameSystem, Graphics, Tower, Mob, Audio 등 파트별 코드 구조와 장단점을 되돌아보는 리뷰를 작성했습니다.",
  },
];

function StrengthCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-bold text-emerald-300">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-300">{body}</p>
    </article>
  );
}

function ExperienceCard({
  title,
  role,
  body,
  href,
}: {
  title: string;
  role: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-emerald-300"
    >
      <h3 className="text-2xl font-bold text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm font-semibold text-emerald-300">{role}</p>
      <p className="mt-4 leading-7 text-zinc-300">{body}</p>
      <p className="mt-6 text-sm font-semibold text-zinc-300 transition group-hover:text-emerald-300">
        프로젝트 보기 →
      </p>
    </Link>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
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

function EarlyProjectCard({
  title,
  type,
  body,
}: {
  title: string;
  type: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-emerald-300">
        {type}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-zinc-100">{title}</h3>

      <p className="mt-4 leading-7 text-zinc-300">{body}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link href="/" className="text-sm text-emerald-300 hover:underline">
          ← Home
        </Link>

        <section className="mt-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            ABOUT
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
            게임 시스템과 사용자 경험의 흐름을 함께 고민하는 개발자
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-300">
            Unity 기반 게임 클라이언트 개발을 중심으로, 플레이어 조작과 씬
            전환, 세이브, 데이터 파이프라인, 컷씬 연동처럼 게임을 실제로
            굴러가게 만드는 구조를 구현해왔습니다. 또한 AI / Computer Vision
            프로젝트를 통해 이미지 분석과 알고리즘 문제 해결 경험도 함께
            쌓았습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              프로젝트 보기
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
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            DIRECTION
          </p>
          <h2 className="mt-3 text-4xl font-bold">Developer Profile</h2>

          <div className="mt-8 rounded-2xl border border-emerald-300/40 bg-zinc-900/60 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
            <p className="max-w-4xl leading-8 text-zinc-300">
              저는 기능을 하나씩 붙이는 것보다, 기능들이 어떤 순서로 초기화되고
              어떤 데이터에 의존하며 어떤 플레이 흐름으로 이어지는지를 중요하게
              생각합니다. 특히 게임 개발에서는 플레이어 입력, 상태 관리, 씬
              전환, 저장 데이터, 컷씬 연출이 서로 강하게 연결되기 때문에, 이
              흐름을 안정적으로 설계하는 개발자가 되고 싶습니다.
            </p>

            <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
              RE∀IVE에서는 메인 클라이언트 프로그래머로서 복잡한 런타임 구조를
              설계했고, Pixel Defense에서는 실제 출시와 업데이트를 경험했습니다.
              FindSuspect와 Box.size Algorithm에서는 AI 모델과 이미지 분석
              결과를 실제 문제 해결 알고리즘으로 연결하는 경험을 했습니다.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            STRENGTHS
          </p>
          <h2 className="mt-3 text-4xl font-bold">Core Strengths</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {strengths.map((strength) => (
              <StrengthCard key={strength.title} {...strength} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            PROJECT EXPERIENCE
          </p>
          <h2 className="mt-3 text-4xl font-bold">Main Projects</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.title} {...experience} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            SKILLS
          </p>
          <h2 className="mt-3 text-4xl font-bold">Technical Stack</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <SkillGroup key={group.title} {...group} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            WORK STYLE
          </p>

          <h2 className="mt-3 text-3xl font-bold">How I Work</h2>

          <ul className="mt-8 grid gap-4 text-zinc-300">
            {workStyle.map((item) => (
              <li key={item} className="leading-8">
                <span className="mr-2 text-emerald-300">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            TECHNICAL ARCHIVE
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Early Projects & Technical Notes
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-zinc-300">
            초기 개인 프로젝트와 학습 기록은 Notion 기반 개인 기록장에 정리했습니다.
            Black Jack, Open API 기반 랜덤 로드뷰 게임, Pixel Defense 코드 리뷰 등을
            통해 기능 구현뿐 아니라 코드 구조, 설계 의도, 장단점을 되돌아보는 습관을
            만들었습니다.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {earlyProjects.map((project) => (
              <EarlyProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://ssigner.notion.site/be135b64b6e14a1dab3df0da39ad0d33"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Notion 기록장 보기
            </a>
          </div>
        </section>

        <section className="mt-20 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            ADDITIONAL EXPERIENCE
          </p>

          <h2 className="mt-3 text-3xl font-bold">Player Experience Observation</h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            부산 서면 방탈출카페 미스테리인의 정직원으로 근무하며 오프라인 게임형 콘텐츠를 운영한
            경험이 있습니다. 이 경험을 통해 이용자가 어떤 지점에서 막히고, 어떤
            힌트와 피드백을 받았을 때 진행을 이어가는지 가까이에서 관찰했습니다.
            게임 개발에서도 튜토리얼, 동선, 난이도, 피드백 설계를 플레이어 경험
            관점에서 바라보는 데 도움이 되었습니다.
          </p>
        </section>

        <section className="mt-20 rounded-2xl border border-emerald-300/40 bg-zinc-900/60 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            CONTACT
          </p>

          <h2 className="mt-3 text-3xl font-bold">Contact</h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-300">
            프로젝트와 코드 기록은 GitHub에서 확인할 수 있습니다. 이메일은
            이력서 공개용 주소를 정한 뒤 아래 링크에 연결하면 됩니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
                href="https://github.com/ssigner"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
                GitHub
            </a>

            <CopyEmailButton className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-emerald-300 hover:text-emerald-300" />
            </div>
        </section>
      </section>
    </main>
  );
}
