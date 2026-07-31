import { modules } from "@/data/curriculum";

export function Timeline() {
  return (
    <ol className="fc-scrollbar grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {modules.map((m) => (
        <li key={m.no}>
          <a
            href={`#module-${m.no}`}
            className="flex h-full flex-col gap-2 rounded-xl border border-fc-line-2 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-fc-blue hover:shadow-md"
          >
            <span className="text-[11px] font-semibold text-fc-gray-2">{m.time.split(" ")[0]}</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fc-blue-bg text-xs font-bold text-fc-blue">
              {m.no}
            </span>
            <span className="text-[13px] font-semibold leading-snug text-fc-ink-2">{m.title}</span>
            <span className="mt-auto text-[11px] text-fc-gray-3">{m.feature}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
