import Link from "next/link";

const keyFeatures = [
  {
    title: "YOLOv8 기반 박스 검출",
    body: "이미지에서 박스 영역을 자동으로 탐지하기 위해 YOLOv8 커스텀 모델을 활용했습니다. confidence 값을 조절하여 일정 기준 이상의 박스 영역만 추출할 수 있도록 구성했습니다.",
  },
  {
    title: "배경 제거 및 전처리",
    body: "검출된 박스 이미지에서 배경을 제거하고, 이후 외곽선 검출이 잘 이루어지도록 이미지 전처리 과정을 구성했습니다.",
  },
  {
    title: "Canny Edge Detection",
    body: "박스의 윤곽선을 추출하기 위해 Canny Edge Detection을 적용했습니다. 배경 제거 이후 박스 외곽선만 남겨 꼭지점 탐색이 가능하도록 구성했습니다.",
  },
  {
    title: "꼭지점 좌표 추출",
    body: "외곽선 정보에서 박스의 꼭지점 좌표를 추출하고, 이미지 상의 2D 좌표를 기반으로 실제 크기 계산에 필요한 입력값을 구성했습니다.",
  },
  {
    title: "카메라 기하 기반 크기 추정",
    body: "초점거리, 원본 이미지 중심점, 2D 좌표, 임의의 3D 좌표를 활용해 카메라 외부 파라미터를 계산하고, 투영 관계를 바탕으로 실제 박스 크기를 추정했습니다.",
  },
  {
    title: "공모전용 알고리즘 개발",
    body: "CJ대한통운 미래기술 챌린지 문제를 해결하기 위해, 물류 환경에서 사진 기반 박스 크기 측정이 가능하도록 객체 검출과 기하 계산을 연결한 알고리즘을 개발했습니다.",
  },
];

const pipeline = [
  {
    step: "01",
    title: "Input Image",
    body: "측정하고 싶은 박스가 포함된 이미지를 입력합니다.",
  },
  {
    step: "02",
    title: "Box Detection",
    body: "YOLOv8 모델을 사용해 이미지에서 박스 영역을 검출하고 crop 이미지를 생성합니다.",
  },
  {
    step: "03",
    title: "Background Removal",
    body: "rembg를 사용해 박스 영역의 배경을 제거하고, 박스 형태가 더 뚜렷하게 남도록 전처리합니다.",
  },
  {
    step: "04",
    title: "Edge Detection",
    body: "Canny Edge Detection으로 박스의 윤곽선을 추출합니다.",
  },
  {
    step: "05",
    title: "Vertex Detection",
    body: "외곽선에서 박스 꼭지점 좌표를 추출하고, 이미지 상의 박스 형태를 계산 가능한 좌표 데이터로 변환합니다.",
  },
  {
    step: "06",
    title: "Dimension Estimation",
    body: "카메라 파라미터와 투영 관계를 활용해 실제 박스의 가로, 세로, 높이를 추정합니다.",
  },
];

const myRole = [
  "이미지 기반 박스 크기 측정 알고리즘 개발",
  "YOLOv8 기반 박스 검출 파이프라인 구성",
  "배경 제거 및 Canny Edge Detection 기반 전처리 구현",
  "박스 외곽선 및 꼭지점 좌표 추출 로직 개발",
  "카메라 기하와 투영 관계를 활용한 실제 크기 계산 로직 구현",
  "공모전 문제 해결을 위한 알고리즘 실험 및 검증",
];

const caseStudies = [
  {
    title: "객체 검출과 크기 계산을 분리한 파이프라인",
    problem:
      "입력 이미지에는 박스 외에도 배경과 불필요한 물체가 포함될 수 있어, 바로 크기 계산을 수행하기 어려웠습니다.",
    solution:
      "먼저 YOLOv8로 박스 영역을 검출하고 crop한 뒤, 배경 제거와 Edge Detection을 통해 크기 계산에 필요한 박스 윤곽선만 남기는 단계형 파이프라인을 구성했습니다.",
    result:
      "검출, 전처리, 좌표 추출, 크기 계산이 분리되어 각 단계별 실험과 보정이 가능한 구조를 만들었습니다.",
  },
  {
    title: "외곽선 기반 박스 꼭지점 좌표 추출",
    problem:
      "실제 박스 크기를 계산하려면 이미지 상에서 박스의 기준점이 필요하지만, 원본 이미지에서는 배경과 조명, 각도에 따라 경계가 불분명할 수 있었습니다.",
    solution:
      "배경 제거 후 Canny Edge Detection을 적용해 박스 외곽선을 추출하고, contour 정보를 기반으로 꼭지점 좌표를 얻는 방식을 사용했습니다.",
    result:
      "이미지 상의 박스 형태를 좌표 데이터로 변환하여 카메라 기하 계산에 사용할 수 있게 했습니다.",
  },
  {
    title: "카메라 기하 기반 실제 치수 추정",
    problem:
      "이미지 상의 픽셀 크기만으로는 실제 박스의 가로, 세로, 높이를 직접 알 수 없었습니다.",
    solution:
      "초점거리, 이미지 중심점, 2D 좌표, 임의의 3D 좌표를 활용해 카메라 외부 파라미터를 구하고, 실제 월드 좌표계와 이미지 좌표계의 관계를 이용해 크기를 추정했습니다.",
    result:
      "객체 검출 결과를 단순 인식에서 끝내지 않고, 실제 물류 문제에서 필요한 박스 치수 계산으로 연결했습니다.",
  },
];

const techStack = [
  "Python",
  "YOLOv8",
  "OpenCV",
  "Canny Edge Detection",
  "rembg",
  "NumPy",
  "Camera Geometry",
  "Object Detection",
  "Computer Vision",
  "Dimension Estimation",
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

export default function BoxSizePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <Link href="/projects" className="text-sm text-emerald-300 hover:underline">
          ← Projects
        </Link>

        <section className="mt-12">
          <p className="text-sm font-semibold tracking-[0.3em] text-emerald-300">
            COMPUTER VISION / DIMENSION ESTIMATION / COMPETITION PROJECT
          </p>

          <h1 className="mt-4 text-6xl font-bold">Box.size Algorithm</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            CJ대한통운 미래기술 챌린지 2023에서 진행한 이미지 기반 박스 크기
            측정 알고리즘 프로젝트입니다. 사진에서 박스를 탐색하고, 외곽선과
            꼭지점 좌표를 추출한 뒤, 카메라 기하 계산을 활용해 실제 박스의
            가로, 세로, 높이를 추정하는 알고리즘을 개발했습니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/Box-size/box.size-algorithm"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              GitHub 보기
            </a>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-emerald-300/40 bg-zinc-900/60 p-8 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <h2 className="text-3xl font-bold">Project Overview</h2>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-300">
            Box.size Algorithm은 물류 환경에서 사진 한 장을 기반으로 박스의
            실제 크기를 추정하는 것을 목표로 했습니다. 단순 객체 검출에서
            끝나는 것이 아니라, 박스 영역 검출, 배경 제거, 외곽선 추출,
            꼭지점 좌표 계산, 카메라 기하 기반 치수 계산까지 이어지는
            파이프라인을 구성했습니다.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">My Role</h2>

          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">
            <p className="text-emerald-300">
              Computer Vision Algorithm Developer
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
          <h2 className="text-3xl font-bold">Algorithm Pipeline</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Box.size Algorithm은 객체 검출, 이미지 전처리, 외곽선 검출,
            꼭지점 좌표 추출, 실제 치수 계산을 단계적으로 수행합니다.
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
            {`Input Image
    ↓
YOLOv8 Box Detection
    ↓
Box Crop
    ↓
Background Removal (rembg)
    ↓
Canny Edge Detection
    ↓
Contour / Vertex Extraction
    ↓
Camera Geometry Calculation
    ↓
Width / Depth / Height Estimation`}
          </pre>

          <p className="mt-6 max-w-4xl leading-8 text-zinc-300">
            객체 검출 모델로 박스 위치를 찾고, 이후 이미지 처리 기법으로
            박스의 형태를 좌표 데이터로 변환합니다. 마지막 단계에서는 이미지
            상의 2D 좌표와 카메라 파라미터를 활용해 실제 월드 좌표계의 박스
            크기를 추정합니다.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold">Case Studies</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            이미지 속 박스를 단순히 탐지하는 것을 넘어, 실제 물류 문제에서
            필요한 치수 계산까지 연결하기 위해 해결한 문제들입니다.
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
            객체 검출에서 실제 치수 계산까지 연결한 알고리즘
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-zinc-300">
            Box.size Algorithm은 YOLO 기반 객체 검출, 이미지 전처리, 외곽선
            검출, 좌표 계산, 카메라 기하를 하나의 파이프라인으로 연결한
            프로젝트입니다. 이 경험을 통해 AI 모델의 탐지 결과를 실제 문제
            해결에 필요한 수치 계산으로 변환하는 알고리즘 개발 과정을
            경험했습니다.
          </p>
        </section>
      </section>
    </main>
  );
}