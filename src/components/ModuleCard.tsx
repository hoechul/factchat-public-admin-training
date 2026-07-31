import type { CurriculumModule } from "@/data/curriculum";
import { PromptBlock } from "./PromptBlock";
import { AttachmentLink } from "./AttachmentLink";

export function ModuleCard({ module: m }: { module: CurriculumModule }) {
  return (
    <section
      id={`module-${m.no}`}
      className="scroll-mt-24 rounded-2xl border border-fc-line-2 bg-white p-5 shadow-[0_1px_2px_rgba(18,19,21,0.04)] sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fc-blue text-sm font-bold text-white">
          {m.no}
        </span>
        <span className="rounded-full bg-fc-surface px-2.5 py-1 text-xs font-medium text-fc-gray">
          {m.time} · {m.duration}
        </span>
        <span className="rounded-full bg-fc-blue-bg px-2.5 py-1 text-xs font-semibold text-fc-blue">
          {m.feature}
        </span>
      </div>

      <h3 className="mt-3.5 text-xl font-bold text-fc-ink sm:text-2xl">{m.title}</h3>
      <p className="mt-1.5 text-sm font-medium text-fc-blue-mid">🎯 {m.objective}</p>
      <p className="mt-3 text-[14px] leading-relaxed text-fc-gray">{m.scenario}</p>

      {m.attachments.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-fc-gray-2">
            실습자료 다운로드
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {m.attachments.map((a) => (
              <AttachmentLink key={a.filename} attachment={a} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wide text-fc-gray-2">
          실습 프롬프트
        </h4>
        {m.prompts.map((p) => (
          <PromptBlock key={p.label} label={p.label} prompt={p.prompt} />
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-fc-surface p-4">
        <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-fc-gray-2">
          진행 순서
        </h4>
        <ol className="space-y-1.5">
          {m.steps.map((s, i) => (
            <li key={i} className="flex gap-2 text-[13.5px] leading-relaxed text-fc-ink-3">
              <span className="shrink-0 font-semibold text-fc-blue">{i + 1}.</span>
              {s}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-4 flex gap-2.5 rounded-xl border border-dashed border-fc-blue-soft/60 bg-fc-blue-bg-2 p-3.5">
        <span className="shrink-0 text-base leading-none">💡</span>
        <p className="text-[13px] leading-relaxed text-fc-ink-3">
          <span className="font-semibold text-fc-blue-dark">진행자 Tip. </span>
          {m.trainerTip}
        </p>
      </div>
    </section>
  );
}
