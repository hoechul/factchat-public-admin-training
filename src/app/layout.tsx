import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FactChat 실무교육 | 공공기관 행정주무관을 위한 60분 실습과정",
  description:
    "공공기관 행정주무관을 위한 FactChat 60분 실습 중심 교육과정. 강의 0분, 실습 60분. 여섯 가지 실무 시나리오를 프롬프트 복사 한 번으로 직접 실행해 봅니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
