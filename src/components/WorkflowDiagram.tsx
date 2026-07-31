const NodeBox = ({ icon, label, sub }: { icon: string; label: string; sub: string }) => (
  <div className="flex w-32 flex-col items-center gap-1 rounded-xl border border-fc-line-2 bg-white px-3 py-3.5 text-center shadow-sm">
    <span className="text-xl leading-none">{icon}</span>
    <span className="text-sm font-bold text-fc-ink-2">{label}</span>
    <span className="text-[11px] leading-snug text-fc-gray-2">{sub}</span>
  </div>
);

const Arrow = () => (
  <span className="shrink-0 text-lg text-fc-gray-3" aria-hidden>
    →
  </span>
);

export function WorkflowDiagram() {
  return (
    <div className="fc-scrollbar overflow-x-auto rounded-2xl border border-fc-line-2 bg-fc-surface p-5">
      <div
        className="grid min-w-max items-center gap-x-2 gap-y-3"
        style={{
          gridTemplateColumns: "auto auto auto auto auto auto auto auto auto",
          gridTemplateRows: "auto auto",
        }}
      >
        <div className="row-span-2 flex items-center">
          <NodeBox icon="▶️" label="Start" sub="민원 문의 접수" />
        </div>
        <div className="row-span-2 flex items-center">
          <Arrow />
        </div>
        <div className="row-span-2 flex items-center">
          <NodeBox icon="🛡️" label="Guardrail" sub="개인정보 마스킹" />
        </div>
        <div className="row-span-2 flex items-center">
          <Arrow />
        </div>
        <div className="row-span-2 flex items-center">
          <NodeBox icon="🔀" label="Classify" sub="민원 유형 분류" />
        </div>

        <div className="col-start-6 row-start-1 flex items-center">
          <Arrow />
        </div>
        <div className="col-start-7 row-start-1 flex items-center">
          <NodeBox icon="🏘️" label="Agent A" sub="생활민원팀" />
        </div>

        <div className="col-start-6 row-start-2 flex items-center">
          <Arrow />
        </div>
        <div className="col-start-7 row-start-2 flex items-center">
          <NodeBox icon="💳" label="Agent B" sub="복지민원팀" />
        </div>

        <div className="col-start-8 row-start-1 flex items-center">
          <Arrow />
        </div>
        <div className="col-start-8 row-start-2 flex items-center">
          <Arrow />
        </div>
        <div className="col-start-9 row-span-2 row-start-1 flex items-center">
          <NodeBox icon="⏹️" label="End" sub="답변 및 종료" />
        </div>
      </div>
      <p className="mt-4 text-[12px] text-fc-gray-2">
        Classify 노드가 문의 내용을 분류해 Agent A(생활민원) 또는 Agent B(복지민원) 중 한 곳으로만 전달합니다.
      </p>
    </div>
  );
}
