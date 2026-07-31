const STEPS = [
  {
    n: 1,
    title: "가입하기",
    desc: "기관에서 안내받은 이메일 또는 SSO(소속 기관 계정 연동)로 가입합니다. 신규 사용자는 이 단계부터, 기존 사용자는 2단계(앱 설치)부터 시작해도 됩니다.",
  },
  {
    n: 2,
    title: "앱처럼 설치하기",
    desc: "모바일 기기의 홈 화면에 웹앱 형태로 설치해 두면 매번 주소를 입력하지 않고 바로 실행할 수 있습니다.",
  },
  {
    n: 3,
    title: "2단계 인증(OTP) 등록",
    desc: "인증 앱(OTP)을 등록해 두면 로그인 보안이 강화됩니다. 기기를 변경하거나 잠금이 걸린 경우 재등록·잠금 해제 절차를 안내받을 수 있습니다.",
  },
];

const FEATURE_GROUPS = [
  {
    group: "채팅 · 검색",
    items: "멀티 모델 비교 채팅, 모델별 크레딧 단가, 웹 검색, 심층 사고, 파일 업로드, 대화 공유, Super Agent, Deep Research",
  },
  {
    group: "콘텐츠 생성",
    items: "이미지 · 동영상 생성, 음성 대화, 프레젠테이션(PPT) 자동 생성, 회의록 전사 · 요약 · 화자 분리",
  },
  {
    group: "데이터 분석",
    items: "Korea-in-Data(지역 통계), Law-in-Data(법률 문서 분석), Univ-in-Data(대학 데이터)",
  },
  {
    group: "정리 · 협업",
    items: "프로젝트(대화 · 지시문 · 메모리 · 파일 통합 및 공유), 지시문, 메모리 관리",
  },
  {
    group: "챗봇 제작",
    items: "스튜디오(기관 지식 최대 100건 학습), 워크플로우, 스토어, 웹사이트 임베드",
  },
];

export function ManualSection() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-fc-line-2 bg-white p-6 sm:p-7">
        <h3 className="text-lg font-bold text-fc-ink">FactChat이란?</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-fc-gray-2">
          텍스트 · 이미지 · 동영상 생성부터 국가통계 데이터 분석까지, 여러 AI 기능을 한곳에서 다루는
          생성형 AI 플랫폼입니다. 보안이 유지된 환경에서 다양한 AI 모델을 선택해 사용할 수 있고,
          기관 내부 지식을 학습시킨 전용 챗봇도 운영할 수 있습니다.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-fc-gray-2">
          <span className="rounded-full bg-fc-surface px-3 py-1">권장 RAM 4GB 이상 (8GB 권장)</span>
          <span className="rounded-full bg-fc-surface px-3 py-1">듀얼코어 이상 프로세서</span>
          <span className="rounded-full bg-fc-surface px-3 py-1">안정적인 브로드밴드 인터넷</span>
          <span className="rounded-full bg-fc-surface px-3 py-1">해상도 1024×768 이상</span>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold text-fc-ink">시작하기 3단계</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-fc-line-2 bg-white p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fc-blue-bg text-sm font-bold text-fc-blue">
                {s.n}
              </span>
              <p className="mt-3 text-[15px] font-bold text-fc-ink-2">{s.title}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-fc-gray-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold text-fc-ink">오늘 실습에서 만나는 핵심 기능</h3>
        <div className="overflow-hidden rounded-2xl border border-fc-line-2 bg-white">
          {FEATURE_GROUPS.map((f, i) => (
            <div
              key={f.group}
              className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[140px_1fr] sm:gap-4 ${
                i !== FEATURE_GROUPS.length - 1 ? "border-b border-fc-line-2" : ""
              }`}
            >
              <span className="text-sm font-bold text-fc-blue-dark">{f.group}</span>
              <span className="text-[13.5px] leading-relaxed text-fc-gray-2">{f.items}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 rounded-2xl bg-fc-ink px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13.5px] leading-relaxed text-white/85">
          더 자세한 기능 설명과 최신 업데이트는 FactChat 공식 사용자 문서에서 확인할 수 있습니다.
        </p>
        <a
          href="https://docs.mindlogic.ai/docs/mindlogic-prod/factchat/getting-started/introduction"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-fc-ink transition hover:bg-white/90"
        >
          공식 사용자 매뉴얼 보기 ↗
        </a>
      </div>
    </div>
  );
}
