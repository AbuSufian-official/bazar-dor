
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./components/navber";
import CatagoryManu from "./components/categoryManu";
import Marquee from "./components/marquee";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "বাজার দর - নিত্যপণ্যের বাজার দর ও দামের তালিকা",
  description: "দৈনিক কাঁচাবাজার, চাল, ডাল, তেল, সবজি, মাছ ও মাংসের সর্বশেষ বাজার দর ও তুলনা।",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#F0F5F0]`}
    >
      <body className="min-h-full flex flex-col">
        <Navber/>
          <CatagoryManu/>
          <Marquee/>
        
          {children}
        
        <Footer/>
      </body>
    </html>
  );
}
