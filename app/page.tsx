import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/features/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}