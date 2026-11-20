import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
const d = Fraunces({ subsets: ["latin"], style: ["normal", "italic"], variable: "--f-display" });
const s = Inter({ subsets: ["latin"], variable: "--f-sans" });
const title = "Muhammed Jazil — Video Editor & Visual Storyteller";
export const metadata: Metadata = {
  title,
  description: "Independent video editor: social media reels, AI video production, motion graphics and logo animation.",
  openGraph: { title, description: "Cinematic edits, AI visuals and motion graphics.", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${d.variable} ${s.variable}`}><body className="font-sans">{children}</body></html>;
}
