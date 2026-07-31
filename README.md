# FactChat 실무교육 랜딩페이지

공공기관 행정주무관을 위한 FactChat 60분 실습 중심 교육과정 랜딩페이지입니다.
디자인은 [factchat.kr/ko](https://www.factchat.kr/ko)의 색상 · 폰트(Pretendard)를 참고했고,
사용자 매뉴얼 내용은 [FactChat 공식 문서](https://docs.mindlogic.ai/docs/mindlogic-prod/factchat/getting-started/introduction)를
바탕으로 작성했습니다.

- `/` — 기초 실무 활용 60분 교육 (민원 답변 · 회의록 · 통계 · 조례 검토 · PPT 등 6개 실습 모듈)
- `/studio` — 챗봇 · 워크플로우 심화 실습 60분 (실습① 챗봇 만들기 30분 + 실습② 워크플로우 챗봇 만들기 30분).
  구성은 [daedong-mobility-ai-training.vercel.app/studio](https://daedong-mobility-ai-training.vercel.app/studio)를
  참고해 공공기관 민원 상담봇 시나리오로 재구성했습니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

> 이 저장소 경로에 한글(비 ASCII) 문자가 포함되어 있으면 Next.js 16의 기본 번들러인 Turbopack이
> 크래시하는 알려진 버그가 있어, `dev`/`build` 스크립트에 `--webpack` 옵션을 고정해 두었습니다.
> 경로를 영문 전용으로 옮길 경우 `package.json`의 `--webpack` 플래그는 제거해도 됩니다.

## 배포

```bash
npm run build
npm run start
```

Vercel에 배포하려면 `vercel deploy` (또는 `vercel --prod`)를 사용하세요.

## 실습자료(PDF/이미지) 재생성

실습 모듈별 다운로드 자료는 `public/materials/`에 있으며, 모두 교육용 가상 예시입니다(실제
기관 · 인물 · 통계 아님). 공통 PDF 빌더는 `tools/pdf_kit.py`에 있고, 각 페이지의 자료는 별도
스크립트에서 생성합니다. 각 파일은 공공기관 첨부 용량 제한을 고려해 1MB 이하로 유지되도록
설계되어 있습니다.

```bash
python tools/generate_materials.py          # "/" 기초 실습 6개 모듈 자료
python tools/generate_studio_materials.py   # "/studio" 챗봇·워크플로우 실습 자료
```

Python 3 + `reportlab`, `Pillow` 패키지가 필요하며, 한글 렌더링을 위해 Windows의 맑은 고딕
(`C:\Windows\Fonts\malgun.ttf`, `malgunbd.ttf`)을 사용합니다. 다른 OS에서 실행하려면
`tools/pdf_kit.py` 상단의 `FONT_REG` / `FONT_BOLD` 경로를 해당 환경의 한글 TTF 폰트로 바꿔주세요.

## 프로젝트 구조

- `src/data/curriculum.ts` — "/" 60분 교안 데이터(6개 모듈: 목표 · 시나리오 · 프롬프트 · 첨부자료 · 진행순서 · 진행자 Tip)
- `src/data/studio.ts` — "/studio" 챗봇·워크플로우 실습 데이터(프로필 · 동작 프롬프트 · 지식 자료 · 워크플로우 노드 · 테스트 시나리오)
- `src/components/PromptBlock.tsx` — 실습용 프롬프트 복사 메뉴바(클립보드 복사) 컴포넌트, 두 페이지에서 공유
- `src/components/ModuleCard.tsx` — "/" 모듈 카드(다운로드 + 프롬프트 + 진행순서)
- `src/components/ManualSection.tsx` — FactChat 사용자 매뉴얼 요약
- `src/components/ChatbotTabs.tsx` — "/studio" 실습① 프로필/동작/지식/공유 탭
- `src/components/WorkflowDiagram.tsx`, `AgentCard.tsx`, `TestScenarioTable.tsx` — "/studio" 실습② 워크플로우 구성요소
- `public/materials/` — 실습용 예시 PDF/이미지 (각 1MB 이하)
- `tools/pdf_kit.py` — 공통 PDF 스타일·빌더 유틸리티
- `tools/generate_materials.py`, `tools/generate_studio_materials.py` — 실습자료 생성 스크립트
