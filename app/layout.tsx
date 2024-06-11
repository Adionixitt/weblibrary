import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "./components/header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Электронная библиотека",
  description: "Электронная библиотека для студентов КИТ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Header/>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
