import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ssigner | Unity Client Programmer",
  description:
    "Unity 클라이언트 프로그래머 포트폴리오. REVIVE, Pixel Defense 프로젝트와 게임 시스템 개발 기록을 정리한 사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}