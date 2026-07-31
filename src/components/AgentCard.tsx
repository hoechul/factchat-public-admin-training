import type { WorkflowAgent } from "@/data/studio";
import { PromptBlock } from "./PromptBlock";
import { AttachmentLink } from "./AttachmentLink";

export function AgentCard({ agent }: { agent: WorkflowAgent }) {
  return (
    <div className="rounded-2xl border border-fc-line-2 bg-white p-5">
      <h4 className="text-base font-bold text-fc-ink">{agent.name}</h4>
      <p className="mt-1 text-[13.5px] text-fc-gray-2">{agent.desc}</p>
      <div className="mt-4">
        <AttachmentLink attachment={agent.attachment} />
      </div>
      <div className="mt-3">
        <PromptBlock label={`${agent.name} · 지침 프롬프트`} prompt={agent.prompt} />
      </div>
    </div>
  );
}
