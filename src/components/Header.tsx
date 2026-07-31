const NAV = [
  { href: "#overview", label: "교육 개요" },
  { href: "#timeline", label: "60분 타임라인" },
  { href: "#modules", label: "실습 모듈" },
  { href: "#manual", label: "사용자 매뉴얼" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-fc-line-2 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-[17px] font-extrabold tracking-tight">
          <span className="text-fc-ink">Fact</span>
          <span className="text-fc-blue">Chat</span>
          <span className="ml-1 hidden rounded-full bg-fc-surface px-2 py-0.5 text-[11px] font-semibold text-fc-gray sm:inline">
            실무교육
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-fc-gray hover:text-fc-blue">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#modules"
          className="rounded-full bg-fc-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-fc-blue-dark"
        >
          실습 시작하기
        </a>
      </div>
    </header>
  );
}
