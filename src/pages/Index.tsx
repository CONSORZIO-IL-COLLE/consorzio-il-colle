import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <>
    <Header />
    <Hero />
    <div className="relative overflow-hidden">
      {/* Shared background for Services + Footer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/src/assets/hero-bg.jpg)` }}
      />
      <div className="absolute inset-0 bg-black/85" />
      <Services />
      <ContactSection />
      <Footer />
    </div>
  </>
);

export default Index;
