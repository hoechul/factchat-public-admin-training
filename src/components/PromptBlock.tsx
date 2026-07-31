"use client";

import { useState } from "react";

function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise((resolve, reject) => {
    const el = document.createElement("textarea");
    el.value = text;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.focus();
    el.select();
    try {
      document.execCommand("copy");
      resolve();
    } catch (err) {
      reject(err);
    } finally {
      document.body.removeChild(el);
    }
  });
}

export function PromptBlock({ label, prompt }: { label: string; prompt: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근이 차단된 환경 — 사용자가 직접 드래그하여 복사할 수 있도록 안내만 유지
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-fc-line-2 bg-white">
      {/* 실습 진행용 메뉴바: 프롬프트명 + 즉시 복사 버튼 */}
      <div className="flex items-center justify-between gap-3 border-b border-fc-line-2 bg-fc-ink px-4 py-2.5">
        <span className="flex items-center gap-2 text-xs font-semibold text-white/90">
          <span className="flex h-2 w-2 rounded-full bg-fc-blue-soft" aria-hidden />
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/20 active:scale-95"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="fc-copied-pop">복사됨</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
                <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 13V4.5A1.5 1.5 0 0 1 5.5 3H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              프롬프트 복사
            </>
          )}
        </button>
      </div>
      <p className="whitespace-pre-wrap px-4 py-3.5 text-[13.5px] leading-relaxed text-fc-ink-3">
        {prompt}
      </p>
    </div>
  );
}
