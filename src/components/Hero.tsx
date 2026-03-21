import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-ilcolle.png";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.style.opacity = "1";
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient: transparent top → dark bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      {/* Big logo at top-left */}
      <div className="container mx-auto relative z-10 pt-28">
        <img
          src={logo}
          alt="Il Colle Consorzio"
          className="hidden md:block w-[200px] lg:w-[240px] drop-shadow-2xl"
        />
      </div>

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
            Il tuo <span className="text-accent">partner</span> per edilizia, restauro
            e manutenzioni <span className="text-accent">complete</span>
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
