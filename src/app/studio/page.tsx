import type { Metadata } from "next";
import Link from "next/link";
import { StudioHeader } from "@/components/StudioHeader";
import { Footer } from "@/components/Footer";
import { ChatbotTabs } from "@/components/ChatbotTabs";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { AgentCard } from "@/components/AgentCard";
import { TestScenarioTable } from "@/components/TestScenarioTable";
import { PromptBlock } from "@/components/PromptBlock";
import { AttachmentLink } from "@/components/AttachmentLink";
import {
  studioMeta,
  guardrailPrompt,
  classifyPrompt,
  workflowAgents,
  workflowValidationRules,
  workflowWorksheet,
  studioCautions,
} from "@/data/studio";

const STUDIO_TITLE = "챗봇 · 워크플로우 실습 60분 | FactChat STUDIO";
const STUDIO_DESCRIPTION =
  "공공기관 행정주무관을 위한 FactChat 스튜디오 실습. 60분 동안 민원안내 챗봇과 부서 분류 워크플로우 챗봇을 직접 만들어 봅니다.";

export const metadata: Metadata = {
  title: STUDIO_TITLE,
  description: STUDIO_DESCRIPTION,
  openGraph: {
    title: STUDIO_TITLE,
    description: STUDIO_DESCRIPTION,
    url: "/studio",
    siteName: "FactChat 실무교육",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FactChat으로 익히는 행정 실무 자동화 — 강의 0분, 실습 60분",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: STUDIO_TITLE,
    description: STUDIO_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function StudioPage() {
  return (
    <div id="top">
      <StudioHeader />

      {/* Hero */}
      <section className="fc-hero-bg relative overflow-hidden">
        <div className="fc-hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90">
            공공기관 행정주무관 대상 · FactChat STUDIO 실습
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            나만의 민원 상담봇,
            <br />
            <span className="text-fc-blue-soft">챗봇 · 워크플로우</span>로 직접 만들기
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">
            {studioMeta.goal}. 실습①에서 기본 챗봇을 만들고, 실습②에서 부서별 업무를 자동으로 분류·라우팅하는
            워크플로우 챗봇까지 완성합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#chatbot-lab"
              className="rounded-full bg-fc-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-fc-blue-dark"
            >
              실습① 챗봇 만들기
            </a>
            <a
              href="#workflow-lab"
              className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              실습② 워크플로우 만들기
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            {studioMeta.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xl font-extrabold text-white sm:text-2xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-white/60 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <main className="mx-auto max-w-6xl space-y-20 px-5 py-16 sm:px-8 sm:py-20">
        {/* 실습 개요 */}
        <section id="studio-overview" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">실습 개요</h2>
          <div className="mt-6 rounded-2xl border border-fc-line-2 bg-white p-6">
            <dl className="space-y-4 text-sm">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">교육대상</dt>
                <dd className="text-fc-ink-2">{studioMeta.audience}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">교육시간</dt>
                <dd className="text-fc-ink-2">{studioMeta.duration}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">진행방식</dt>
                <dd className="text-fc-ink-2">{studioMeta.format}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-semibold text-fc-gray-2">교육목표</dt>
                <dd className="text-fc-ink-2">{studioMeta.goal}</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 실습① 챗봇 만들기 */}
        <section id="chatbot-lab" className="scroll-mt-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fc-blue text-sm font-bold text-white">
              1
            </span>
            <span className="rounded-full bg-fc-surface px-2.5 py-1 text-xs font-medium text-fc-gray">30분</span>
            <span className="rounded-full bg-fc-blue-bg px-2.5 py-1 text-xs font-semibold text-fc-blue">
              챗봇 스튜디오
            </span>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold text-fc-ink sm:text-3xl">실습① 챗봇 만들기</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fc-gray-2">
            민원인이 자주 묻는 질문에 1차로 답하는 「OO구청 민원안내봇」을 프로필 → 동작 → 지식 → 공유 순서로
            직접 만들어 봅니다.
          </p>
          <div className="mt-6">
            <ChatbotTabs />
          </div>
        </section>

        {/* 실습② 워크플로우 챗봇 만들기 */}
        <section id="workflow-lab" className="scroll-mt-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fc-blue text-sm font-bold text-white">
              2
            </span>
            <span className="rounded-full bg-fc-surface px-2.5 py-1 text-xs font-medium text-fc-gray">30분</span>
            <span className="rounded-full bg-fc-blue-bg px-2.5 py-1 text-xs font-semibold text-fc-blue">
              워크플로우
            </span>
          </div>
          <h2 className="mt-3.5 text-2xl font-extrabold text-fc-ink sm:text-3xl">실습② 워크플로우 챗봇 만들기</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fc-gray-2">
            생활민원과 복지민원, 두 업무를 하나의 챗봇으로 통합하는 「OO구청 통합 민원 상담봇」을 만듭니다. 문의
            내용을 자동으로 분류해 담당 에이전트로 라우팅합니다.
          </p>

          <div className="mt-6">
            <WorkflowDiagram />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-fc-line-2 bg-white p-5">
              <h4 className="text-base font-bold text-fc-ink">🛡️ Guardrail 설정</h4>
              <p className="mt-1 text-[13.5px] text-fc-gray-2">개인정보 마스킹과 금칙어 차단을 켭니다.</p>
              <div className="mt-3">
                <PromptBlock label="Guardrail · 안전장치 설정" prompt={guardrailPrompt} />
              </div>
            </div>
            <div className="rounded-2xl border border-fc-line-2 bg-white p-5">
              <h4 className="text-base font-bold text-fc-ink">🔀 Classify 설정</h4>
              <p className="mt-1 text-[13.5px] text-fc-gray-2">
                Gemini 3.5 Flash처럼 가볍고 빠른 모델로 문의 유형을 분류합니다.
              </p>
              <div className="mt-3">
                <PromptBlock label="Classify · 분류 지침" prompt={classifyPrompt} />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {workflowAgents.map((a) => (
              <AgentCard key={a.key} agent={a} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-fc-blue-soft/60 bg-fc-blue-bg-2 p-5">
            <h4 className="text-sm font-bold text-fc-blue-dark">저장 전 확인 — 이런 경우 저장이 거부됩니다</h4>
            <ul className="mt-2 space-y-1.5">
              {workflowValidationRules.map((r) => (
                <li key={r} className="flex gap-2 text-[13px] leading-relaxed text-fc-ink-3">
                  <span className="text-fc-blue">⚠</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-bold text-fc-ink-2">테스트 시나리오</h4>
            <TestScenarioTable />
          </div>
        </section>

        {/* 주의사항 */}
        <section id="studio-tips" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">주의사항</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {studioCautions.map((c) => (
              <div key={c.text} className="flex gap-3 rounded-2xl border border-fc-line-2 bg-white p-4">
                <span className="text-lg leading-none">{c.icon}</span>
                <p className="text-[13px] leading-relaxed text-fc-ink-3">{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 자료 */}
        <section id="studio-resources" className="scroll-mt-24">
          <h2 className="text-2xl font-extrabold text-fc-ink sm:text-3xl">자료</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Link
              href="/"
              className="group flex flex-col gap-2 rounded-2xl border border-fc-line-2 bg-white p-5 transition hover:border-fc-blue hover:bg-fc-blue-bg"
            >
              <span className="text-xl">↩️</span>
              <span className="text-sm font-bold text-fc-ink-2">60분 실무 활용 교육으로 돌아가기</span>
              <span className="text-[12.5px] text-fc-gray-2">
                민원 답변 · 회의록 · 통계 · 조례 검토 · PPT 실습 교안
              </span>
            </Link>
            <a
              href="https://docs.mindlogic.ai/docs/mindlogic-prod/factchat/getting-started/introduction"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-fc-line-2 bg-white p-5 transition hover:border-fc-blue hover:bg-fc-blue-bg"
            >
              <span className="text-xl">📘</span>
              <span className="text-sm font-bold text-fc-ink-2">FactChat 스튜디오 사용자 가이드 ↗</span>
              <span className="text-[12.5px] text-fc-gray-2">챗봇 · 워크플로우 기능 공식 문서</span>
            </a>
            <AttachmentLink attachment={workflowWorksheet} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
