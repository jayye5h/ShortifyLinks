import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google'
import { Baloo_2 } from 'next/font/google'

const poppins = Poppins({
  weight: '600', // '600' is SemiBold
  subsets: ['latin'], // required
})


const baloo2 = Baloo_2({
  weight: '600',        // SemiBold
  subsets: ['latin'],   // choose the subsets you need
  display: 'swap',      // optional but recommended
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortifyLinks ",
  description: "ShortifyLinks - Your personal Link shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e6f2f2] ${poppins.className}`}
      >
        <Navbar />
        <div className=" h-[90vh]">

          {children}
        </div>
      </body>
    </html>
  );
}
