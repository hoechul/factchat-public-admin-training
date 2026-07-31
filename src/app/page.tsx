import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { ModuleCard } from "@/components/ModuleCard";
import { ManualSection } from "@/components/ManualSection";
import { courseMeta, modules } from "@/data/curriculum";

const STATS = [
  { value: "60분", label: "총 교육시간" },
  { value: "0분", label: "이론 강의" },
  { value: "6개", label: "실무 실습 시나리오" },
  { value: "7종", label: "실습 다운로드 자료" },
];

export default function Home() {
  return (
    <div id="top">
      <Header />

      {/* Hero */}
      <section className="fc-hero-bg relative overflow-hidden">
        <div className="fc-hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90">
            공공기관 행정주무관 대상 실무교육
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            강의는 0분, 실습은 60분.
            <br />
            <span className="text-fc-blue-soft">FactChat</span>으로 익히는 행정 실무 자동화
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            민원 답변, 회의록 정리, 보도자료, 통계 확인, 조례 검토, 보고용 PPT까지 — 여섯 가지 실무
            시나리오를 프롬프트 복사 한 번으로 직접 실행해 보는 100% 실습형 교육과정입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#modules"
              className="rounded-full bg-fc-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-fc-blue-dark"
            >
              실습 모듈 바로가기
            </a>
            <a
              href="#manual"
              className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              사용자 매뉴얼 보기
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-20 px-5 py-16 sm:px-8 sm:py-20">
        {/* 교육 개요 */}
        <section id="overview" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">교육 개요</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-fc-line-2 bg-white p-6">
              <dl className="space-y-4 text-sm">
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">교육대상</dt>
                  <dd className="text-fc-ink-2">{courseMeta.audience}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">교육시간</dt>
                  <dd className="text-fc-ink-2">{courseMeta.duration}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">진행방식</dt>
                  <dd className="text-fc-ink-2">{courseMeta.format}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">교육목표</dt>
                  <dd className="text-fc-ink-2">{courseMeta.goal}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-fc-line-2 bg-fc-blue-bg p-6">
              <p className="text-sm font-bold text-fc-blue-dark">실습 전 준비물 체크리스트</p>
              <ul className="mt-3 space-y-2">
                {courseMeta.prerequisites.map((p) => (
                  <li key={p} className="flex gap-2 text-[13.5px] leading-relaxed text-fc-ink-3">
                    <span className="text-fc-blue">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 타임라인 */}
        <section id="timeline" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">60분 실습 타임라인</h2>
          <p className="mt-2 text-sm text-fc-gray-2">
            모듈을 클릭하면 해당 실습으로 바로 이동합니다. 각 모듈은 10분 단위로 진행됩니다.
          </p>
          <div className="mt-6">
            <Timeline />
          </div>
        </section>

        {/* 실습 모듈 */}
        <section id="modules" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">실습 모듈 (1 ~ 6)</h2>
          <p className="mt-2 text-sm text-fc-gray-2">
            각 모듈의 실습자료를 내려받고, 메뉴바의 [프롬프트 복사] 버튼으로 프롬프트를 FactChat
            채팅창에 붙여넣어 실습을 진행하세요.
          </p>
          <div className="mt-6 space-y-6">
            {modules.map((m) => (
              <ModuleCard key={m.no} module={m} />
            ))}
          </div>
        </section>

        {/* 사용자 매뉴얼 */}
        <section id="manual" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">사용자 매뉴얼</h2>
          <p className="mt-2 text-sm text-fc-gray-2">
            FactChat 공식 사용자 문서(Getting Started)를 바탕으로 정리한 요약 매뉴얼입니다.
          </p>
          <div className="mt-6">
            <ManualSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
