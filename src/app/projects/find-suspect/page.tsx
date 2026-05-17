import Link from "next/link";

const keyFeatures = [
  {
    title: "YOLOv9 기반 사람 검출",
    body: "CCTV 영상과 용의자 이미지에서 사람 영역을 검출하기 위해 YOLOv9 모델을 사용했습니다. 영상 속 여러 사람을 탐지하고, 이후 특징 추출 파이프라인으로 넘길 수 있도록 구성했습니다.",
  },
  {
    title: "VTFPAR++ 기반 보행자 특징 추출",
    body: "검출된 사람 이미지에서 보행자의 속성 특징을 추출하기 위해 VTFPAR++ 모델을 활용했습니다. 의상, 외형적 특징 등 비교에 사용할 수 있는 특징 정보를 벡터/JSON 형태로 다루는 구조를 구성했습니다.",
  },
  {
    title: "코사인 유사도 기반 검색 알고리즘",
    body: "용의자 이미지에서 추출한 특징과 CCTV 영상 속 사람들의 특징을 비교하여, 코사인 유사도 기반으로 유사 인물을 정렬하고 결과를 제공하는 알고리즘을 개발했습니다.",
  },
  {
    title: "이미지 / 영상 처리 파이프라인",
    body: "사용자가 업로드한 이미지와 관리자가 등록한 CCTV 영상이 같은 분석 흐름을 거치도록, 객체 검출 → 특징 추출 → 유사도 계산 → 결과 제공으로 이어지는 파이프라인을 구성했습니다.",
  },
  {
    title: "QA 및 프론트 예외 처리",
    body: "분석 결과가 정상적으로 표시되는지 확인하고, 이미지 업로드/결과 조회 과정에서 발생할 수 있는 예외 상황을 검증 및 보완했습니다.",
  },
  {
    title: "졸업과제 통합 프로젝트",
    body: "알고리즘, 백엔드, 프론트엔드가 연결된 통합 시스템에서 알고리즘 파트를 담당하며, AI 모델 결과가 실제 웹 서비스 흐름에 연결되도록 개발했습니다.",
  },
];

const pipeline = [
  {
    step: "01",
    title: "CCTV 영상 업로드",
    body: "관리자가 분석할 CCTV 영상을 업로드합니다.",
  },
  {
    step: "02",
    title: "사람 영역 검출",
    body: "YOLOv9 모델을 이용해 영상 속 사람들을 탐지하고, 사람 영역을 추출합니다.",
  },
  {
    step: "03",
    title: "보행자 특징 추출",
    body: "VTFPAR++ 모델을 사용해 검출된 사람들의 특징 정보를 추출하고 저장합니다.",
  },
  {
    step: "04",
    title: "용의자 이미지 업로드",
    body: "사용자가 찾고 싶은 용의자 또는 실종자의 이미지를 업로드합니다.",
  },
  {
    step: "05",
    title: "용의자 특징 추출",
    body: "용의자 이미지에서도 YOLOv9과 VTFPAR++를 사용해 사람 영역과 특징을 추출합니다.",
  },
  {
    step: "06",
    title: "유사도 계산 및 결과 제공",
    body: "영상 속 사람들의 특징과 용의자 특징을 코사인 유사도로 비교하고, 유사도가 높은 결과를 정렬해 제공합니다.",
  },
];

const myRole = [
  "YOLOv9 모델 학습 및 객체 검출 실험",
  "VTFPAR++ 모델을 활용한 보행자 특징 추출 구조 개발",
  "보행자 특징 기반 유사도 측정 알고리즘 개발",
  "코사인 유사도 기반 검색 결과 정렬 로직 구성",
  "분석 결과 검증 및 QA",
  "프론트엔드 예외 상황 확인 및 보완",
];

const techStack = [
  "Python",
  "YOLOv9",
  "VTFPAR++",
  "Computer Vision",
  "Pedestrian Attribute Recognition",
  "Cosine Similarity",
  "Similarity Search",
  "AI Model Pipeline",
  "Image Processing",
];

const caseStudies = [
  {
    title: "객체 검출과 특징 추출을 분리한 분석 파이프라인",
    problem:
      "단순히 이미지에서 사람을 찾는 것만으로는 용의자 검색이 어렵고, 영상 속 여러 사람 중 누구와 유사한지 비교할 기준이 필요했습니다.",
    solution:
      "YOLOv9으로 사람 영역을 먼저 검출하고, VTFPAR++로 보행자 속성 특징을 추출한 뒤, 특징 벡터를 비교하는 방식으로 검출과 검색 단계를 분리했습니다.",
    result:
      "사람 검출, 특징 추출, 유사도 계산이 각각 독립된 단계로 구성되어 모델 교체나 파이프라인 개선이 쉬운 구조가 되었습니다.",
  },
  {
    title: "코사인 유사도 기반 용의자 검색",
    problem:
      "CCTV 영상 속 사람과 용의자 이미지가 정확히 같은 각도나 품질로 찍히지 않기 때문에, 단순 이미지 비교만으로는 검색 정확도를 확보하기 어려웠습니다.",
    solution:
      "보행자 특징 정보를 벡터화하고, 코사인 유사도를 통해 용의자 이미지와 영상 속 인물들의 특징 방향성을 비교했습니다.",
    result:
      "사용자에게 유사도가 높은 후보를 정렬해 보여줄 수 있는 검색 알고리즘을 구성했습니다.",
  },
  {
    title: "AI 모델 결과를 웹 서비스 흐름에 연결",
    problem:
      "AI 모델 추론 결과가 단독으로 존재하면 실제 사용자가 확인하기 어렵고, 업로드/분석/결과 조회 흐름과 연결되어야 했습니다.",
    solution:
      "모델 결과를 JSON 형태의 특징 데이터와 유사도 결과로 다루고, 백엔드/프론트엔드와 연결될 수 있도록 데이터 흐름을 맞췄습니다.",
    result:
      "이미지 업로드 후 유사 후보를 확인하는 실제 웹 기반 용의자 검색 시스템으로 통합할 수 있었습니다.",
  },
];

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <h3 className="text-xl font-bold text-emerald-300">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-300">{body}</p>
    </article>
  );
}

function PipelineCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <p className="text-sm font-semibold tracking-[0.25em] text-emerald-300">
        STEP {step}
      </p>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-300">{body}</p>
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

export default function FindSuspectPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link href="/projects" className="text-sm text-emerald-300 hover:underline">
          ← Projects
        </Link>

        <section className="mt-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            AI / COMPUTER VISION / GRADUATION PROJECT
          </p>

          <h1 className="mt-4 text-6xl font-bold">FindSuspect</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            CCTV 영상과 용의자 이미지를 기반으로 사람을 검출하고, 보행자
            특징을 추출한 뒤 유사도를 계산해 유사 인물을 찾는 이미지 기반
            용의자 검색 시스템입니다. 알고리즘 파트를 담당하여 YOLOv9 모델
            학습, VTFPAR++ 기반 특징 추출, 코사인 유사도 기반 검색 알고리즘을
            개발했습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/PNUCSE-A2O/FindSuspect"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              GitHub 보기
            </a>

            <a
              href="https://findsuspect.modelx.me/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-emerald-300 hover:text-emerald-300"
            >
              Demo 보기
            </a>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-emerald-300/40 bg-zinc-900/60 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <h2 className="text-3xl font-bold">Project Overview</h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-300">
            FindSuspect는 여러 CCTV 영상에서 특정 용의자 또는 실종자와
            유사한 인물을 찾는 것을 목표로 한 졸업과제 프로젝트입니다.
            CCTV 영상에서 사람 영역을 검출하고, 각 인물의 보행자 특징을
            추출한 뒤, 사용자가 업로드한 용의자 이미지의 특징과 비교해
            유사도가 높은 후보를 제공합니다.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">My Role</h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <p className="text-emerald-300">
              Algorithm Developer / Computer Vision
            </p>

            <ul className="mt-6 grid gap-3 text-zinc-300 md:grid-cols-2">
              {myRole.map((role) => (
                <li key={role} className="leading-7">
                  <span className="mr-2 text-emerald-300">•</span>
                  {role}
                </li>
              ))}
            </ul>
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
          <h2 className="text-3xl font-bold">Analysis Pipeline</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            FindSuspect는 객체 검출, 특징 추출, 유사도 계산을 분리된 단계로
            구성하여 CCTV 영상과 용의자 이미지를 같은 기준으로 비교합니다.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pipeline.map((step) => (
              <PipelineCard key={step.step} {...step} />
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
          <h2 className="text-3xl font-bold">Architecture</h2>

          <pre className="mt-6 overflow-x-auto rounded-xl bg-zinc-950 p-6 text-sm leading-7 text-zinc-300">
            {`CCTV Video
    ↓
YOLOv9 Person Detection
    ↓
Person Crop / Frame Extraction
    ↓
VTFPAR++ Attribute Extraction
    ↓
Feature JSON / Vector

Suspect Image
    ↓
YOLOv9 Person Detection
    ↓
VTFPAR++ Attribute Extraction
    ↓
Cosine Similarity Search
    ↓
Ranked Similar Results`}
          </pre>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-300">
            CCTV 영상과 용의자 이미지를 모두 같은 분석 흐름으로 처리한 뒤,
            추출된 특징을 비교하는 구조입니다. 이 방식은 사람 검출 모델과
            특징 추출 모델, 유사도 계산 로직을 분리하여 각 단계의 개선과
            테스트가 가능하도록 구성한 것이 특징입니다.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            AI 모델을 단순히 실행하는 데서 끝내지 않고, 실제 검색 시스템의
            파이프라인으로 연결하기 위해 해결했던 문제들입니다.
          </p>

          <div className="mt-8 grid gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
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
            이미지 분석과 유사도 검색 알고리즘 경험
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            FindSuspect를 통해 객체 검출 모델을 학습하고, 보행자 특징 추출
            모델의 결과를 활용해 유사도 검색 알고리즘으로 연결하는 경험을
            했습니다. 이 프로젝트는 AI 모델을 단순히 사용하는 것을 넘어, 실제
            사용자 흐름 안에서 이미지 업로드, 영상 분석, 후보 검색 결과까지
            이어지는 통합 시스템으로 구성했다는 점에서 의미가 있습니다.
          </p>
        </section>
      </section>
    </main>
  );
}