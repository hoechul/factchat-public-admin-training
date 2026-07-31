"use client";

import { useState } from "react";
import { PromptBlock } from "./PromptBlock";
import { AttachmentLink } from "./AttachmentLink";
import {
  chatbotProfile,
  chatbotBehaviorPrompt,
  chatbotKnowledge,
  chatbotShareNotes,
} from "@/data/studio";

const TABS = [
  { key: "profile", label: "프로필" },
  { key: "behavior", label: "동작" },
  { key: "knowledge", label: "지식" },
  { key: "share", label: "공유" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function ChatbotTabs() {
  const [active, setActive] = useState<TabKey>("profile");

  return (
    <div className="rounded-2xl border border-fc-line-2 bg-white p-2 sm:p-3">
      <div className="flex flex-wrap gap-1.5 border-b border-fc-line-2 px-2 pb-2.5">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === t.key
                ? "bg-fc-blue text-white"
                : "text-fc-gray hover:bg-fc-surface hover:text-fc-ink-2"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-4 sm:p-5">
        {active === "profile" && (
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-fc-gray-2">챗봇 이름</span>
              <p className="mt-1 text-lg font-bold text-fc-ink">{chatbotProfile.name}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-fc-gray-2">소개문</span>
              <p className="mt-1 text-[14px] leading-relaxed text-fc-ink-3">{chatbotProfile.intro}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-fc-gray-2">추천 질문</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {chatbotProfile.suggestedQuestions.map((q) => (
                  <span
                    key={q}
                    className="rounded-full border border-fc-blue-soft/50 bg-fc-blue-bg px-3.5 py-1.5 text-[13px] font-medium text-fc-blue-dark"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {active === "behavior" && (
          <div className="space-y-3">
            <p className="text-[13.5px] text-fc-gray-2">
              챗봇의 답변 원칙을 지시문으로 입력하는 단계입니다. GPT-5.3 Chat과 같은 대화형 모델을 선택한 뒤,
              아래 프롬프트를 복사해 붙여넣으세요.
            </p>
            <PromptBlock label="동작 지침 · 민원안내봇 시스템 프롬프트" prompt={chatbotBehaviorPrompt} />
          </div>
        )}

        {active === "knowledge" && (
          <div className="space-y-3">
            <p className="text-[13.5px] text-fc-gray-2">
              챗봇이 근거로 삼을 문서를 업로드하는 단계입니다. 아래 예시자료를 내려받아 그대로 첨부해 보세요.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {chatbotKnowledge.map((a) => (
                <AttachmentLink key={a.filename} attachment={a} />
              ))}
            </div>
            <p className="rounded-xl bg-fc-surface p-3 text-[12.5px] leading-relaxed text-fc-gray-2">
              💡 커넥터를 연결하면 정적 문서 대신 실시간 데이터(예: 재고·처리현황 조회 MCP)를 참조하게 할 수도
              있습니다. 오늘 실습에서는 PDF 지식문서 연결까지만 진행합니다.
            </p>
          </div>
        )}

        {active === "share" && (
          <ul className="space-y-2.5">
            {chatbotShareNotes.map((n) => (
              <li key={n} className="flex gap-2 text-[13.5px] leading-relaxed text-fc-ink-3">
                <span className="text-fc-blue">✓</span>
                {n}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
