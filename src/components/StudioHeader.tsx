import Link from "next/link";

const NAV = [
  { href: "#studio-overview", label: "실습 개요" },
  { href: "#chatbot-lab", label: "챗봇 실습" },
  { href: "#workflow-lab", label: "워크플로우 실습" },
  { href: "#studio-tips", label: "주의사항" },
];

export function StudioHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-fc-line-2 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight">
          <span className="text-fc-ink">Fact</span>
          <span className="text-fc-blue">Chat</span>
          <span className="ml-1 hidden rounded-full bg-fc-surface px-2 py-0.5 text-[11px] font-semibold text-fc-gray sm:inline">
            챗봇 · 워크플로우
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-fc-gray hover:text-fc-blue">
              {n.label}
            </a>
          ))}
        </nav>
        <Link
          href="/"
          className="rounded-full border border-fc-line-2 px-4 py-2 text-sm font-semibold text-fc-ink-2 transition hover:border-fc-blue hover:text-fc-blue"
        >
          ← 60분 실무 활용 교육
        </Link>
      </div>
    </header>
  );
}
