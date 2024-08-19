import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const monto = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-monto'
})

export default function Home() {
  return (
    <main className={`${monto.variable} font-monto mx-auto w-full min-h-screen overflow-hidden`}>
      <Navbar />
      <Hero />
    </main>
  );
}
