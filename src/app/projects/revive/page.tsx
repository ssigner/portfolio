const contributions = [
  {
    title: "Data-Driven Architecture",
    body: "Excel 기반 게임 데이터를 ScriptableObject로 변환하고, Addressables와 DI Container를 통해 런타임에서 사용할 수 있는 구조를 구축했습니다.",
  },
  {
    title: "DI / Bootstrap Flow",
    body: "게임 시작 전 전역 데이터 초기화, 슬롯 데이터 로드, Manager 등록, 인게임 진입으로 이어지는 초기화 흐름을 구성했습니다.",
  },
  {
    title: "Scene / Portal / Spawn",
    body: "메트로배니아 구조에 맞춰 Stage > Sector 기반 맵 구조와 Portal 이동, Spawn 위치 복원 흐름을 구현했습니다.",
  },
  {
    title: "Player System",
    body: "이동, 점프, 대쉬, 공격, 투사체, 회복 기능을 구현하고 PlayerState를 통해 상태를 관리했습니다.",
  },
  {
    title: "Cutscene / Naninovel",
    body: "Naninovel 커스텀 커맨드를 개발하여 시나리오 스크립트에서 오브젝트 이동, BGM, 조명, Glow, 보스전 진입을 제어했습니다.",
  },
  {
    title: "Object Pooling",
    body: "Mob, Bullet, SFX 풀링 구조를 도입하고 Stage 단위 선할당 구조로 반복적인 Instantiate / Destroy 비용을 줄이는 방향으로 개선했습니다.",
  },
];

const caseStudies = [
  {
    title: "Excel 기반 데이터 구조에서 Google Sheet 협업 파이프라인으로 확장",
    problem:
      "초기에는 로컬 data.xlsx를 기준으로 게임 데이터를 관리했지만, 개발 인원이 늘어나면서 각자 수정한 데이터 파일이 충돌하는 문제가 발생했습니다.",
    solution:
      "Converter.cs를 통해 Excel 데이터를 ScriptableObject로 변환하는 기존 구조를 유지하면서, 후반부에 GoogleSheetSync.cs를 추가하여 공유 문서 기반으로 데이터를 동기화할 수 있도록 개선했습니다.",
    result:
      "기획 데이터와 런타임 코드를 분리한 상태를 유지하면서, 팀원이 동일한 데이터 소스를 기준으로 작업할 수 있는 구조로 확장했습니다.",
  },
  {
    title: "Stage / Sector 단위 Mob Pooling 구조 개선",
    problem:
      "초기에는 Sector 진입 시 Mob Prefab을 Instantiate하는 방식이어서 씬 전환이나 전투 진입 시 객체 생성 비용이 발생할 수 있는 구조였습니다.",
    solution:
      "Stage 단위로 필요한 Mob 종류와 최대 수를 계산해 미리 풀링하고, Sector 전환 시에는 풀에서 활성화/비활성화하여 재사용하도록 구조를 변경했습니다.",
    result:
      "런타임 중 반복적인 Instantiate / Destroy 호출과 GC Alloc 발생 가능성을 줄이는 방향으로 최적화했습니다.",
  },
  {
    title: "Naninovel 커스텀 커맨드를 통한 컷씬 제어",
    problem:
      "보스 등장, BGM 전환, 오브젝트 이동, 조명 효과, 전투 진입 같은 연출이 코드와 씬 오브젝트에 흩어지면 유지보수가 어려웠습니다.",
    solution:
      "Naninovel 커스텀 커맨드를 만들어 시나리오 스크립트에서 Unity 오브젝트와 게임 상태를 제어할 수 있도록 구성했습니다.",
    result:
      "컷씬 작성과 게임플레이 이벤트 연결을 스크립트 중심으로 처리할 수 있게 되어, 연출 수정과 테스트가 쉬워졌습니다.",
  },
];

const featureVideos = [
  {
    title: "Player System",
    description:
      "PlayerState를 중심으로 이동, 점프, 공격 상태를 관리하고, 컷씬/사망/보스전 진입 상황에서 입력이 충돌하지 않도록 상태 전환 조건을 정리했습니다.",
    src: "/projects/revive/videos/player-move-attack-jump.mp4",
    tags: ["PlayerState", "PlayerMove", "PlayerJump", "PlayerAttack"],
    files: [
      "Assets/Scripts/Player/PlayerState.cs",
      "Assets/Scripts/Player/Function/PlayerMove.cs",
      "Assets/Scripts/Player/Function/PlayerJump.cs",
      "Assets/Scripts/Player/Function/PlayerAttack.cs",
    ],
  },
  {
    title: "Heal System",
    description:
      "회복약 사용 조건, 회복 이펙트, SFX 재생, 최대 체력 상태에서의 사용 방지 로직을 구현했습니다. 사망/부활 흐름과도 연결되도록 InGameManager와 PlayData를 함께 수정했습니다.",
    src: "/projects/revive/videos/player-heal.mp4",
    tags: ["PlayerHeal", "PlayerState", "PlayData", "SFX"],
    files: [
      "Assets/Scripts/Player/Function/PlayerHeal.cs",
      "Assets/Scripts/Player/PlayerState.cs",
      "Assets/Scripts/Data/PlayData.cs",
      "Assets/Scripts/Manager/InGameManager.cs",
    ],
  },
  {
    title: "Scene Transition",
    description:
      "PortalUnit을 통해 목적지 씬과 스폰 위치를 결정하고, SectorManager와 연동하여 메트로배니아식 룸 이동 흐름을 구성했습니다.",
    src: "/projects/revive/videos/scene-transition.mp4",
    tags: ["PortalUnit", "SectorManager", "Spawn", "ASM"],
    files: [
      "Assets/Scripts/Portal/PortalUnit.cs",
      "Assets/Scripts/Manager/SectorManager.cs",
      "Assets/Scripts/Scene/Spawn",
    ],
  },
  {
    title: "Save / Death / Respawn",
    description:
      "Easy Save 3 기반 PlayData/UserData 구조와 SaveCache를 사용해, 사망 후 복귀 시 플레이어 진행도와 위치 정보가 유지되도록 구성했습니다.",
    src: "/projects/revive/videos/save-death-respawn.mp4",
    tags: ["SaveCache", "PlayData", "UserData", "InGameManager"],
    files: [
      "Assets/Scripts/Save/SaveCache.cs",
      "Assets/Scripts/Save/SaveLoader.cs",
      "Assets/Scripts/Data/PlayData.cs",
      "Assets/Scripts/Data/UserData.cs",
    ],
  },
  {
    title: "Naninovel Cutscene",
    description:
      "Naninovel 커스텀 커맨드를 개발해 시나리오 스크립트에서 오브젝트 이동, BGM 제어, 조명, 스프라이트 효과, 보스전 진입을 제어할 수 있도록 만들었습니다.",
    src: "/projects/revive/videos/naninovel-cutscene.mp4",
    tags: ["Naninovel", "Custom Command", "Cutscene", "BGM"],
    files: [
      "Assets/Scripts/Nani/PlayBGM.cs",
      "Assets/Scripts/Nani/StopBGM.cs",
      "Assets/Scripts/Nani/ObjMoveToPos.cs",
      "Assets/Scripts/Nani/SpriteGlow.cs",
      "Assets/Scenario",
    ],
  },
  {
    title: "Boss Phase Transition",
    description:
      "보스전의 등장, 페이즈 전환, 컷씬, 전투 진입 흐름을 상태 단위로 나누어 관리하고, 재도전 시 트리거 조건이 꼬이지 않도록 수정했습니다.",
    src: "/projects/revive/videos/boss-phase-transition.mp4",
    tags: ["BossEncounterBase", "PlantFinalBoss", "Cutscene"],
    files: [
      "Assets/Scripts/CutScene/BossEncounterBase.cs",
      "Assets/Scripts/CutScene/PlantFinalBoss.cs",
      "Assets/Scenario/plantFinal2Phase.nani",
    ],
  },
];

const timelineVideos = [
  {
    period: "Early Prototype",
    title: "초기 프로토타입",
    description: "프로젝트 초기에 기본 조작과 전투 흐름을 검증하던 단계입니다.",
    src: "/projects/revive/videos/timeline-early-prototype.mp4",
  },
  {
    period: "Core Architecture",
    title: "데이터 / 씬 구조 정리",
    description:
      "데이터 기반 구조와 씬 전환 흐름이 잡히기 시작한 단계입니다.",
    src: "/projects/revive/videos/timeline-data-scene-structure.mp4",
  },
  {
    period: "First Boss",
    title: "첫 보스전 구현",
    description: "보스전, 전투 트리거, 컷씬 연결을 실험하던 단계입니다.",
    src: "/projects/revive/videos/timeline-first-boss.mp4",
  },
  {
    period: "Cutscene Integration",
    title: "컷씬 연동",
    description:
      "Naninovel과 Unity 런타임 오브젝트를 연결해 연출을 구성한 단계입니다.",
    src: "/projects/revive/videos/timeline-cutscene-integration.mp4",
  },
];

function VideoCard({
  title,
  description,
  src,
  tags,
  files,
}: {
  title: string;
  description: string;
  src: string;
  tags: string[];
  files: string[];
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
      <video
        className="aspect-video w-full bg-black object-cover"
        src={src}
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-emerald-300">{title}</h3>
        <p className="mt-3 leading-7 text-zinc-300">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <details className="mt-5 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <summary className="cursor-pointer text-sm font-semibold text-zinc-200">
            Related Files
          </summary>

          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {files.map((file) => (
              <li key={file} className="font-mono">
                {file}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  );
}

function TimelineVideoCard({
  period,
  title,
  description,
  src,
}: {
  period: string;
  title: string;
  description: string;
  src: string;
}) {
  return (
    <article className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 md:grid-cols-[220px_1fr]">
      <div>
        <p className="text-sm font-semibold tracking-[0.2em] text-emerald-300">
          {period}
        </p>
        <h3 className="mt-3 text-2xl font-bold">{title}</h3>
        <p className="mt-4 leading-7 text-zinc-300">{description}</p>
      </div>

      <video
        className="aspect-video w-full rounded-xl bg-black object-cover"
        src={src}
        muted
        loop
        playsInline
        controls
        preload="metadata"
      />
    </article>
  );
}

function CaseStudyCard({
  title,
  problem,
  solution,
  result,
}: {
  title: string;
  problem: string;
  solution: string;
  result: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-2xl font-bold text-emerald-300">{title}</h3>

      <div className="mt-6 grid gap-5">
        <div>
          <p className="text-sm font-semibold text-zinc-100">Problem</p>
          <p className="mt-2 leading-7 text-zinc-300">{problem}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-100">Solution</p>
          <p className="mt-2 leading-7 text-zinc-300">{solution}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-zinc-100">Result</p>
          <p className="mt-2 leading-7 text-zinc-300">{result}</p>
        </div>
      </div>
    </article>
  );
}

export default function RevivePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a href="/" className="text-sm text-emerald-300 hover:underline">
          ← Home
        </a>

        <section className="mt-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            UNITY / 2D PIXEL-ART METROIDVANIA
          </p>

          <h1 className="mt-4 text-6xl font-bold">REVIVE</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Unity 기반 2D 픽셀아트 메트로배니아 프로젝트입니다. 메인
            클라이언트 프로그래머로 참여하여 데이터 파이프라인, DI 초기화
            구조, 씬 전환, 플레이어 시스템, 세이브/진행도, 컷씬 연동, 보스
            기믹을 구현했습니다.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-black">
            <video
              className="aspect-video w-full object-cover"
              src="/projects/revive/videos/current-build-pv.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h2 className="text-3xl font-bold">My Role</h2>
          <p className="mt-4 text-emerald-300">
            Main Client Programmer / Development Lead
          </p>

          <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
            <li>게임 시스템 구조 설계</li>
            <li>Excel / Google Sheet 기반 데이터 파이프라인 구축</li>
            <li>
              ScriptableObject / Addressables / DI 기반 런타임 데이터 구조
            </li>
            <li>플레이어 이동, 공격, 점프, 회복 시스템 구현</li>
            <li>Portal / Sector / Stage 기반 씬 전환 구조 구현</li>
            <li>Easy Save 3 기반 Save / Load 구조 구현</li>
            <li>Naninovel 커스텀 커맨드 및 컷씬 연출 구현</li>
            <li>Mob / Bullet / SFX Object Pooling 최적화</li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Key Contributions</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {contributions.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
              >
                <h3 className="text-xl font-bold text-emerald-300">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h2 className="text-3xl font-bold">Architecture</h2>

          <pre className="mt-6 overflow-x-auto rounded-xl bg-zinc-950 p-6 text-sm leading-7 text-zinc-300">
            {`Google Sheet / Excel
        ↓
Converter.cs
        ↓
ScriptableObject Data
        ↓
Addressables
        ↓
GlobalInstaller
        ↓
DIContainer.Global
        ↓
Runtime Managers`}
          </pre>

          <p className="mt-6 leading-8 text-zinc-300">
            초기에는 로컬 Excel 파일을 기준으로 데이터를 관리했고,
            Converter.cs를 통해 각 시트를 ScriptableObject로 변환했습니다.
            이후 협업 중 데이터 충돌 문제가 생기면서 Google Sheet 기반
            동기화 구조를 추가하여 팀원이 같은 데이터 소스를 기준으로 작업할
            수 있도록 개선했습니다.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            프로젝트를 진행하며 발생한 구조적 문제와 이를 해결하기 위해 적용한
            개선 사례입니다.
          </p>

          <div className="mt-8 grid gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Feature Videos</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            개발 과정에서 구현한 주요 기능들을 짧은 영상으로 정리했습니다. 각
            영상은 실제 구현 기능과 관련 시스템을 보여주기 위한 기록입니다.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featureVideos.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Development Timeline</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            프로젝트 초기 프로토타입부터 현재 빌드까지, 주요 기능이 어떤
            순서로 발전했는지 정리했습니다.
          </p>

          <div className="mt-8 grid gap-6">
            {timelineVideos.map((video) => (
              <TimelineVideoCard key={video.title} {...video} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}