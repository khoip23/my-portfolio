import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import MetadataUpdater from "../components/layout/MetadataUpdater";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khoi Pham | Hồ sơ kỹ sư Backend",
  description:
    "Hồ sơ nghề nghiệp của Khoi Pham - kỹ sư backend tập trung vào kiến trúc hệ thống, độ tin cậy và tích hợp AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <MetadataUpdater />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
