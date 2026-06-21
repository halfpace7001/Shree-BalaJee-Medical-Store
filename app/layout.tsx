import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shri Bala Ji Medical Store – Gorakhpur",
  description:
    "Trusted pharmacy in Gorakhpur. Prescription medicines, OTC medicines, Ayurvedic products & home delivery support. Call 098071 60890.",
  keywords: [
    "medical store gorakhpur",
    "pharmacy gorakhpur",
    "shri bala ji medical",
    "medicine delivery gorakhpur",
    "padri bazar pharmacy",
  ],
  openGraph: {
    title: "Shri Bala Ji Medical Store – Gorakhpur",
    description: "Trusted pharmacy in Gorakhpur. Medicines, health products & home delivery.",
    type: "website",
  },
};

// Prevents flash of wrong theme before React hydrates
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var p = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var t = s || p;
    if (t === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  } catch(e){}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Runs synchronously before paint — no theme flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
