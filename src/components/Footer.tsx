export function Footer() {
  return (
    <footer className="border-t border-fc-line-2 bg-fc-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-[15px] font-extrabold">
              <span className="text-fc-ink">Fact</span>
              <span className="text-fc-blue">Chat</span> 실무교육
            </p>
            <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-fc-gray-2">
              본 교안은 공공기관 행정주무관 대상 60분 실습 교육을 위해 제작된 자료입니다. 실습에
              사용되는 민원·회의록·조례·통계 등 모든 예시 문서와 이미지는 교육 목적의 가상 자료이며,
              실제 기관·인물·수치와 무관합니다.
            </p>
          </div>
          <div className="text-[13px] text-fc-gray-2">
            <p className="font-semibold text-fc-ink-2">참고 자료 출처</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                · FactChat 공식 사이트:{" "}
                <a className="text-fc-blue hover:underline" href="https://www.factchat.kr/ko" target="_blank" rel="noreferrer">
                  factchat.kr/ko
                </a>
              </li>
              <li>
                · FactChat 사용자 문서(Getting Started):{" "}
                <a
                  className="text-fc-blue hover:underline"
                  href="https://docs.mindlogic.ai/docs/mindlogic-prod/factchat/getting-started/introduction"
                  target="_blank"
                  rel="noreferrer"
                >
                  docs.mindlogic.ai
                </a>
              </li>
            </ul>
            <p className="mt-4 text-[12px] text-fc-gray-3">
              실제 기능 제공 범위는 소속 기관의 정책 및 계약 조건에 따라 다를 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
