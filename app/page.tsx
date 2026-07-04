import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Software from "@/components/Software";
import MoreServices from "@/components/MoreServices";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#020b18] text-white">
      <Header />
      <Hero />
      <Software />
      <WhyChoose />
      <Services />
      <MoreServices />
      <Process />
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}