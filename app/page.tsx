import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/features/hero";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
      </main>

      <Footer />
    </>
  );
}