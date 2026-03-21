import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const CtaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contatti" ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div
        className={`container mx-auto relative z-10 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-text-light text-lg md:text-xl mb-4">
          Hai bisogno di un <strong className="text-white">sopralluogo</strong> o un{" "}
          <strong className="text-white">preventivo veloce</strong>?
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Contattaci ora</h2>
        <a
          href="tel:+393738881057"
          className="inline-flex items-center gap-3 text-white text-2xl md:text-3xl font-bold hover:text-accent transition-colors duration-200"
        >
          <Phone className="w-7 h-7" />
          373 8881057
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
