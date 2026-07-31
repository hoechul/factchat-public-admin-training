import type { Attachment } from "./curriculum";

export const studioMeta = {
  title: "챗봇 · 워크플로우로 우리 기관 전용 상담봇 만들기",
  audience: "공공기관 행정주무관 (행정실무 담당자)",
  duration: "60분 (실습① 챗봇 만들기 30분 + 실습② 워크플로우 챗봇 만들기 30분)",
  format: "1인 1PC/노트북 실습, FactChat 스튜디오에서 직접 챗봇을 만들고 배포까지 실습",
  goal: "민원안내 챗봇을 직접 만들고, 여러 부서 업무를 자동 분류·라우팅하는 워크플로우 챗봇까지 완성",
  stats: [
    { value: "2가지", label: "실습 유형" },
    { value: "60분", label: "총 소요시간" },
    { value: "공공기관 주무관", label: "교육대상" },
    { value: "민원상담봇", label: "실습 결과물" },
  ],
};

export type ChatbotProfile = {
  name: string;
  intro: string;
  suggestedQuestions: string[];
};

export const chatbotProfile: ChatbotProfile = {
  name: "OO구청 민원안내봇",
  intro:
    "자주 묻는 민원 절차와 구비서류, 처리기한을 안내하는 1차 상담 챗봇입니다. 담당자가 반복적으로 답하던 질문을 챗봇이 먼저 응대합니다.",
  suggestedQuestions: [
    "주민등록등본은 어떻게 발급받나요?",
    "여권 재발급에 필요한 서류가 뭔가요?",
    "민원 처리는 보통 며칠 걸리나요?",
  ],
};

export const chatbotBehaviorPrompt = `당신은 OO구청의 민원안내 챗봇입니다. 아래 원칙에 따라 답변하세요.

1. 정보출처 원칙: 반드시 첨부된 지식문서(민원 처리 안내 매뉴얼, 구비서류 체크리스트, 부서별 연락처)를 근거로 답변하고, 문서에 없는 내용은 추측하지 말고 "정확한 확인을 위해 담당부서로 문의해 주세요"라고 안내하세요.
2. 어조: 정중하고 친절한 존댓말을 사용하고, 민원인이 이해하기 쉬운 짧은 문장으로 답변하세요.
3. 답변 구조: (1) 핵심 답변 먼저 제시 → (2) 관련 근거·절차 설명 → (3) 추가로 필요한 안내(구비서류, 담당부서 연락처 등) 순서로 구성하세요.
4. 되묻기 지침: 민원 종류가 불분명하면 "어떤 민원을 도와드릴까요? (예: 등본 발급, 여권 재발급 등)"처럼 먼저 되물어 확인하세요.
5. 에스컬레이션: 이의신청, 행정심판, 개인 소득·재산 확인이 필요한 민감한 상담은 답변을 시도하지 말고 담당부서 연락처로 안내하세요.
6. 개인정보 보호: 주민등록번호, 계좌번호 등 민감정보는 대화창에 입력하지 않도록 안내하고, 챗봇이 이를 저장·재노출하지 않도록 하세요.`;

export const chatbotKnowledge: Attachment[] = [
  {
    label: "민원 처리 안내 매뉴얼",
    filename: "민원처리_안내매뉴얼_예시.pdf",
    href: "/materials/studio-minwon-annae-maenual-yesi.pdf",
    size: "약 77KB",
    type: "pdf",
  },
  {
    label: "구비서류 체크리스트",
    filename: "구비서류_체크리스트_예시.pdf",
    href: "/materials/studio-guebiseoryu-cheklist-yesi.pdf",
    size: "약 68KB",
    type: "pdf",
  },
  {
    label: "부서별 연락처 안내",
    filename: "부서별_연락처_안내_예시.pdf",
    href: "/materials/studio-bujeobyeol-yeonrakcheo-yesi.pdf",
    size: "약 68KB",
    type: "pdf",
  },
];

export const chatbotShareNotes = [
  "편집자 권한: 같은 부서 동료에게 부여해 프롬프트·지식문서를 함께 관리합니다.",
  "뷰어 권한: 다른 부서 참고용으로 공유할 때 사용하며, 내용 수정은 불가능합니다.",
  "완성된 챗봇은 부서 인트라넷 또는 민원실 안내 화면에 웹사이트 임베드로 배포할 수 있습니다.",
];

export type WorkflowNode = {
  icon: string;
  label: string;
  sub: string;
};

export const workflowNodes: WorkflowNode[] = [
  { icon: "▶️", label: "Start", sub: "민원 문의 접수" },
  { icon: "🛡️", label: "Guardrail", sub: "개인정보 마스킹" },
  { icon: "🔀", label: "Classify", sub: "민원 유형 분류" },
  { icon: "🏘️", label: "Agent A", sub: "생활민원팀" },
  { icon: "💳", label: "Agent B", sub: "복지민원팀" },
  { icon: "⏹️", label: "End", sub: "답변 및 종료" },
];

export const guardrailPrompt = `개인정보(주민등록번호, 전화번호, 계좌번호) 자동 마스킹을 켜고, 금칙어(욕설·비속어) 차단을 켜세요.
위반 시 안내 문구: "개인정보는 안전하게 보호됩니다. 민감정보는 자동으로 마스킹 처리됩니다."`;

export const classifyPrompt = `민원 문의 내용을 다음 3가지 카테고리 중 하나로 분류하세요.
- 생활불편: 가로등·도로·소음·쓰레기 등 시설·환경 신고
- 복지·보조금: 기초생활보장, 기초연금, 장애수당 등 복지급여 문의
- 기타: 위 두 카테고리에 명확히 속하지 않거나 개인 소득·재산 확인이 필요한 민감 문의

분류가 애매한 경우 반드시 '기타'로 분류해 담당자 상담으로 연결하세요.`;

export type WorkflowAgent = {
  key: string;
  name: string;
  desc: string;
  prompt: string;
  attachment: Attachment;
};

export const workflowAgents: WorkflowAgent[] = [
  {
    key: "agent-a",
    name: "Agent A · 생활민원팀",
    desc: "가로등, 도로, 소음, 쓰레기 등 생활불편 신고를 처리합니다.",
    prompt:
      "당신은 OO구청 생활민원팀 상담 담당입니다. 첨부된 「생활불편 신고 처리지침」을 근거로 신고 유형과 처리기한을 안내하고, 안전 관련 긴급 사안은 즉시 담당부서 연락처를 함께 제공하세요.",
    attachment: {
      label: "생활불편 신고 처리지침",
      filename: "생활불편_신고_처리지침_예시.pdf",
      href: "/materials/studio-agent-a-saenghwal-bulpyeon-yesi.pdf",
      size: "약 72KB",
      type: "pdf",
    },
  },
  {
    key: "agent-b",
    name: "Agent B · 복지민원팀",
    desc: "기초생활보장, 기초연금 등 복지급여 상담을 처리합니다.",
    prompt:
      "당신은 OO구청 복지민원팀 상담 담당입니다. 첨부된 「복지급여 상담 안내」를 근거로 일반적인 자격 기준만 안내하고, 개인별 소득·재산 확인이 필요한 질문은 반드시 복지정책과 유선 상담으로 연결하세요.",
    attachment: {
      label: "복지급여 상담 안내",
      filename: "복지급여_상담안내_예시.pdf",
      href: "/materials/studio-agent-b-bokji-geubyeo-yesi.pdf",
      size: "약 72KB",
      type: "pdf",
    },
  },
];

export const workflowValidationRules = [
  "Classify 노드에 분류 카테고리가 2개 이하로만 설정된 경우 (기타/애매한 경우 분류가 없으면 저장 불가)",
  "Guardrail 노드의 개인정보 마스킹 옵션이 꺼져 있는 경우",
  "Agent A 또는 Agent B에 지식문서가 하나도 연결되지 않은 경우",
];

export type TestScenario = {
  question: string;
  expectedCategory: string;
  expectedNode: string;
};

export const workflowTestScenarios: TestScenario[] = [
  {
    question: "집 앞 가로등이 이틀째 고장나 있어요",
    expectedCategory: "생활불편",
    expectedNode: "Agent A · 생활민원팀",
  },
  {
    question: "기초연금은 누가 받을 수 있나요?",
    expectedCategory: "복지·보조금",
    expectedNode: "Agent B · 복지민원팀",
  },
  {
    question: "제 주민등록번호는 000000-0000000인데 등본 발급 확인해주세요",
    expectedCategory: "생활불편 (단, Guardrail이 주민등록번호를 먼저 마스킹 처리해야 함)",
    expectedNode: "Agent A · 생활민원팀",
  },
];

export const workflowWorksheet: Attachment = {
  label: "워크플로우 노드 설정 워크시트 (빈 양식)",
  filename: "워크플로우_노드_설정_워크시트_예시.pdf",
  href: "/materials/studio-workflow-worksheet-yesi.pdf",
  size: "약 69KB",
  type: "pdf",
};

export const studioCautions = [
  { icon: "🔒", text: "개인정보 마스킹 필수: 주민등록번호·연락처·계좌번호는 반드시 Guardrail에서 마스킹 처리합니다." },
  { icon: "📄", text: "문서 최신화: 법령·지침이 바뀌면 지식문서를 즉시 갱신해야 챗봇 답변도 최신 상태를 유지합니다." },
  { icon: "🎯", text: "분류 정확도 개선: Classify 오분류 사례를 주기적으로 검토하고 카테고리 설명을 보완합니다." },
  { icon: "⚖️", text: "근거 우선 안내: 임의로 해석하지 말고, 불확실하면 담당부서 연결을 우선합니다." },
  { icon: "🧪", text: "배포 전 테스트: 실제 민원 질문으로 최소 10건 이상 시나리오를 검증한 뒤 배포합니다." },
  { icon: "🔁", text: "운영 중 피드백 반영: 주무관이 겪은 오류·불만 사례를 정기적으로 수집해 개선합니다." },
];
