import Link from "next/link";

const keyFeatures = [
  {
    title: "Released Commercial Game",
    body: "STOVE 스토어에 출시 및 판매한 2D 타워 디펜스 게임입니다. 교육 프로젝트에서 시작해 실제 유저가 구매하고 플레이할 수 있는 형태로 완성했습니다.",
  },
  {
    title: "Tower Combination System",
    body: "4개 클래스와 30종류의 타워를 기반으로 일반 조합과 히든 조합을 찾는 전략형 플레이 구조를 구성했습니다.",
  },
  {
    title: "40-Round Defense Loop",
    body: "총 40개의 라운드를 진행하며, 라운드 종료 보상과 타워 업그레이드를 통해 제한된 자원 안에서 마지막 라운드 클리어에 도전하도록 설계했습니다.",
  },
  {
    title: "Upgrade & Strategy",
    body: "타워 조합, 업그레이드, 라운드 보상을 통해 플레이어가 매 판 다른 전략을 선택할 수 있도록 디펜스 게임의 핵심 루프를 구성했습니다.",
  },
  {
    title: "Post-Release UX Update",
    body: "출시 이후 히든 조합 표시, 인게임 도감, 타워 배치 UX, 해상도 선택 등 실제 플레이 편의성을 개선하는 업데이트를 진행했습니다.",
  },
  {
    title: "Store Publishing Experience",
    body: "게임 개발뿐 아니라 스토어 등록, 게임 설명 작성, 이미지 준비, 출시 이후 패치까지 포함한 상용 배포 과정을 경험했습니다.",
  },
];

const storeInfo = [
  { label: "Platform", value: "STOVE Store" },
  { label: "Genre", value: "Defense / Puzzle / Strategy" },
  { label: "Release Date", value: "2023.12.14" },
  { label: "Creator / Publisher", value: "ssigner" },
  { label: "Price", value: "$1.00" },
  { label: "User Rating", value: "95% Recommended" },
];

const systems = [
  {
    title: "Tower System",
    items: [
      "타워 클래스와 개별 타워 구분",
      "일반 조합 / 히든 조합 구조",
      "타워 업그레이드 및 강화 흐름",
      "타워 배치와 판매/관리 UX",
    ],
  },
  {
    title: "Round / Monster System",
    items: [
      "총 40라운드 기반 진행 구조",
      "라운드 종료 보상 제공",
      "몬스터 침입 방어 목표",
      "난이도 상승에 따른 전략 선택 유도",
    ],
  },
  {
    title: "Player Progression",
    items: [
      "제한된 자원 안에서의 선택 구조",
      "기록 갱신 중심의 반복 플레이",
      "히든 조합 발견을 통한 학습 요소",
      "라운드 클리어 목표 기반 플레이 루프",
    ],
  },
];

const updates = [
  {
    version: "1.1 Update",
    date: "2024.01.15",
    items: [
      "히든 조합 타워에 마우스를 올리면 조합법이 표시되도록 개선",
      "인게임 도감에서도 조합법 확인이 가능하도록 UX 개선",
    ],
  },
  {
    version: "1.2 Update",
    date: "2024.01.22",
    items: [
      "타워 배치 시 우측 UI를 숨기고, 배치 완료 후 다시 표시되도록 개선",
      "사용자 모니터 환경에 맞는 해상도 선택 기능 추가",
    ],
  },
];

const techStack = [
  "Unity",
  "C#",
  "Tower Defense",
  "Game Balance",
  "Game UI",
  "STOVE Publishing",
  "Released Game",
  "Post-Release Update",
];

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-5">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-zinc-100">{value}</p>
    </div>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-bold text-emerald-300">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-300">{body}</p>
    </article>
  );
}

function SystemCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-bold text-emerald-300">{title}</h3>

      <ul className="mt-5 space-y-3 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="leading-7">
            <span className="mr-2 text-emerald-300">•</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function UpdateCard({
  version,
  date,
  items,
}: {
  version: string;
  date: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-bold text-emerald-300">{version}</h3>
        <p className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
          {date}
        </p>
      </div>

      <ul className="mt-5 space-y-3 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="leading-7">
            <span className="mr-2 text-emerald-300">•</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function PixelDefensePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link href="/projects" className="text-sm text-emerald-300 hover:underline">
          ← Projects
        </Link>

        <section className="mt-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            RELEASED COMMERCIAL GAME / UNITY
          </p>

          <h1 className="mt-4 text-6xl font-bold">Pixel Defense</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            STOVE 스토어에 출시 및 판매한 2D 타워 디펜스 게임입니다.
            2023 부산 콘텐츠 아카데미 교육 프로젝트에서 시작해, 타워 조합과
            업그레이드, 히든 조합, 40라운드 진행 구조를 갖춘 상용 출시작으로
            완성했습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://store.onstove.com/ko/games/2681"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              STOVE 페이지 보기
            </a>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-emerald-300/40 bg-zinc-900/60 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <h2 className="text-3xl font-bold">Store Information</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {storeInfo.map((info) => (
              <InfoCard key={info.label} {...info} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Overview</h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <p className="max-w-4xl leading-8 text-zinc-300">
              Pixel Defense는 한정된 자원으로 마지막 라운드까지 도전하는
              디펜스 게임입니다. 플레이어는 라운드마다 얻는 보상을 활용해
              타워를 배치하고 업그레이드하며, 일반 조합과 히든 조합을 찾아
              더 강한 타워를 구성합니다. 단순히 타워를 많이 배치하는 것이
              아니라, 어떤 타워를 조합하고 어느 타이밍에 강화할지 결정하는
              전략성을 중심으로 설계했습니다.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Key Features</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {keyFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Game Systems</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Pixel Defense에서는 디펜스 게임의 핵심 루프인 타워 배치, 조합,
            업그레이드, 라운드 진행, 보상 선택이 서로 연결되도록 구성했습니다.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {systems.map((system) => (
              <SystemCard key={system.title} {...system} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h2 className="text-3xl font-bold">My Role</h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            이 프로젝트에서는 Unity 기반 2D 타워 디펜스 게임의 핵심 시스템을
            구현하고, 실제 스토어 출시까지 이어지는 과정을 경험했습니다.
            단순한 프로토타입에서 끝내지 않고, 플레이 가능한 완성본으로
            구성한 뒤 STOVE 스토어에 등록하고 출시 이후 UX 개선 업데이트까지
            진행했습니다.
          </p>

          <ul className="mt-8 grid gap-3 text-zinc-300 md:grid-cols-2">
            <li>타워 조합 및 업그레이드 구조 구현</li>
            <li>라운드 진행 및 보상 기반 플레이 루프 구성</li>
            <li>히든 조합 탐색 중심의 전략 요소 설계</li>
            <li>타워 배치 및 인게임 UI/UX 개선</li>
            <li>STOVE 스토어 출시 및 판매 경험</li>
            <li>출시 이후 유저 편의성 개선 업데이트 진행</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Post-Release Updates</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            출시 이후에는 실제 플레이 편의성을 높이기 위해 히든 조합 확인,
            인게임 도감, 타워 배치, 해상도 선택 기능 등을 개선했습니다.
          </p>

          <div className="mt-8 grid gap-6">
            {updates.map((update) => (
              <UpdateCard key={update.version} {...update} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h2 className="text-3xl font-bold">Tech Stack</h2>

          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            SUMMARY
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            출시까지 완료한 Unity 게임 프로젝트
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            Pixel Defense는 게임을 구현하는 것에서 끝나지 않고, 실제 스토어에
            등록해 판매까지 진행한 프로젝트입니다. 이 경험을 통해 게임 시스템
            구현뿐 아니라 스토어 공개, 유저 대상 설명, 출시 이후 업데이트와
            UX 개선까지 포함한 전체 개발 사이클을 경험했습니다.
          </p>
        </section>
      </section>
    </main>
  );
}