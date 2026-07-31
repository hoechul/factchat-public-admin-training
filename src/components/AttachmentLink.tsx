import type { Attachment } from "@/data/curriculum";

const ICON_BG: Record<Attachment["type"], string> = {
  pdf: "bg-[#FEECEC] text-[#D23A3A]",
  jpg: "bg-fc-blue-bg text-fc-blue",
};

export function AttachmentLink({ attachment }: { attachment: Attachment }) {
  return (
    <a
      href={attachment.href}
      download
      className="group flex items-center gap-3 rounded-xl border border-fc-line-2 bg-white px-3.5 py-3 transition hover:border-fc-blue hover:bg-fc-blue-bg"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold uppercase ${ICON_BG[attachment.type]}`}
      >
        {attachment.type}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-fc-ink-2">{attachment.label}</span>
        <span className="block truncate text-xs text-fc-gray-2">
          {attachment.filename} · {attachment.size}
        </span>
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        className="shrink-0 text-fc-gray-3 transition group-hover:text-fc-blue"
        aria-hidden
      >
        <path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 15.5v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </a>
  );
}
