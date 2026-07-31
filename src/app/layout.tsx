import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://factchat-public-admin-training.vercel.app";
const TITLE = "FactChat 실무교육 | 공공기관 행정주무관을 위한 60분 실습과정";
const DESCRIPTION =
  "공공기관 행정주무관을 위한 FactChat 60분 실습 중심 교육과정. 강의 0분, 실습 60분. 여섯 가지 실무 시나리오를 프롬프트 복사 한 번으로 직접 실행해 봅니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "FactChat 실무교육",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FactChat으로 익히는 행정 실무 자동화 — 강의 0분, 실습 60분",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
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
