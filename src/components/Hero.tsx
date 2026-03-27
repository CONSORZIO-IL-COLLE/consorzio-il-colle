import { useEffect, useRef } from "react";
import bgDesktop from "@/assets/bg-desktop.png";
import bgMobile from "@/assets/bg-mobile.png";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.style.opacity = "1";
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background: desktop and mobile */}
      {/* Desktop background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-top mt-[-60px]"
        style={{ backgroundImage: `url(${bgDesktop})` }}
      />
      {/* Mobile background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgMobile})` }}
      />

      {/* Spacer pushes text to bottom */}
      <div className="flex-1" />

      {/* Text — bottom center */}
      <div className="container mx-auto relative z-10 pb-20">
        <div
          ref={ref}
          className="max-w-[680px] mx-auto text-center opacity-0 transition-all duration-1000 ease-out"
          style={{ transitionDelay: "200ms" }}
        >
          <h1
            className="text-white font-bold text-balance leading-[1.15]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Il tuo <span className="text-white">partner</span> per edilizia, restauro
            e manutenzioni
          </h1>
          <p className="mt-6 text-text-light text-lg leading-relaxed max-w-[540px] mx-auto">
            Dal 2009 uniamo competenze artigiane e innovazione per offrire lavori{" "}
            <strong className="text-white font-semibold">affidabili, rapidi e a regola d'arte.</strong>
          </p>
          <a
            href="#servizi"
            className="inline-block mt-8 bg-primary text-primary-foreground font-semibold text-base px-7 py-4 rounded-md hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            I NOSTRI SERVIZI
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
