import { Inter } from "next/font/google";
import Header from "src/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function AppLayout({ children }) {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-grow bg-[#f7f7f7]">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
