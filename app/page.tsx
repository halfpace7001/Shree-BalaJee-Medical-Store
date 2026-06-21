import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import PrescriptionUpload from "@/components/PrescriptionUpload";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <MapSection />
        <Contact />
        <PrescriptionUpload />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
