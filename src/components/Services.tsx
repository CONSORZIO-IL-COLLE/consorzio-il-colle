import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import cardIcon from "../assets/card-icon.png";
import cardIcon2 from "../assets/card-icon-2.png";
import cardIcon3 from "../assets/card-icon-3.png";

/* ── Inline SVG icons ── */
const ConstructionIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect x="8" y="28" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="3" fill="none" />
    <rect x="36" y="16" width="20" height="40" rx="2" stroke="currentColor" strokeWidth="3" fill="none" />
    <rect x="12" y="34" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="18" y="34" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="12" y="44" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="40" y="22" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="47" y="22" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="40" y="30" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="47" y="30" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
    <rect x="40" y="38" width="5" height="5" rx="1" fill="currentColor" opacity="0.4" />
    <line x1="0" y1="56" x2="64" y2="56" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const PaintRollerIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
    <rect x="8" y="10" width="36" height="16" rx="3" stroke="currentColor" strokeWidth="3" />
    <rect x="12" y="14" width="28" height="8" rx="1" fill="currentColor" opacity="0.25" />
    <line x1="44" y1="18" x2="52" y2="18" stroke="currentColor" strokeWidth="3" />
    <line x1="52" y1="18" x2="52" y2="32" stroke="currentColor" strokeWidth="3" />
    <line x1="32" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="3" />
    <line x1="32" y1="32" x2="32" y2="56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <path d="M18 8h28v20c0 8-6 14-14 14s-14-6-14-14V8z" stroke="currentColor" strokeWidth="3" />
    <path d="M18 14H10a4 4 0 0 0-4 4v2a8 8 0 0 0 8 8h4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M46 14h8a4 4 0 0 1 4 4v2a8 8 0 0 1-8 8h-4" stroke="currentColor" strokeWidth="2.5" />
    <line x1="32" y1="42" x2="32" y2="50" stroke="currentColor" strokeWidth="3" />
    <rect x="22" y="50" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

const TeamIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <circle cx="32" cy="16" r="8" stroke="currentColor" strokeWidth="3" />
    <path d="M16 52c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="currentColor" strokeWidth="3" />
    <circle cx="12" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
    <path d="M0 48c0-6.6 5.4-12 12-12" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="52" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
    <path d="M64 48c0-6.6-5.4-12-12-12" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <path d="M44 8a16 16 0 0 0-15 21.5L10.5 48a5 5 0 0 0 0 7l0 0a5 5 0 0 0 7 0L36 36.5A16 16 0 1 0 44 8z" stroke="currentColor" strokeWidth="3" />
    <circle cx="14" cy="51.5" r="2" fill="currentColor" />
  </svg>
);

const cards = [
  {
    Icon: null, // Will use image
    title: "Costruzioni e ristrutturazioni",
    text: "Nuove costruzioni, ristrutturazioni complete, ampliamenti e interventi strutturali chiavi in mano.",
    image: cardIcon,
  },
  {
    Icon: null, // Will use image
    title: "Restauro e finiture",
    text: "Tinteggiature, cappotti termici, cartongesso, restauri conservativi e finiture di pregio.",
    image: cardIcon2,
  },
];

const stats = [
  { Icon: TrophyIcon, value: "+20", label: "anni di esperienza" },
  { Icon: TeamIcon, value: "15+", label: "imprese specializzate" },
  { Icon: WrenchIcon, value: "∞", label: "Team completo per ogni lavorazione" },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servizi" ref={sectionRef} className="relative pt-20 md:pt-24 pb-0">
      <div className="container mx-auto relative z-10 pb-32 md:pb-40">
        <p
          className={`text-center text-white/90 text-xl md:text-2xl font-bold mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Per privati · imprese · enti pubblici · condomini
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 with icon above */}
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 -top-24 -translate-x-1/2 z-10">
              <img src={cardIcon} alt="Card Icon" className="w-56 h-56 object-contain" />
            </div>
            <div
              className={`bg-card rounded-xl p-8 pt-32 min-h-[360px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 w-full ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `120ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{cards[0].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{cards[0].text}</p>
            </div>
          </div>
          {/* Card 2 with icon above */}
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 -top-16 -translate-x-1/2 z-10">
              <img src={cardIcon2} alt="Card Icon" className="w-40 h-40 object-contain" />
            </div>
            <div
              className={`bg-card rounded-xl p-8 pt-32 min-h-[360px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500 w-full ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `240ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">{cards[1].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{cards[1].text}</p>
            </div>
          </div>
          {/* Stats card with third icon above */}
          <div className="relative flex flex-col items-center">
            <div className="absolute left-1/2 -top-8 -translate-x-1/2 z-10">
              <img src={cardIcon3} alt="Card Icon" className="w-32 h-32 object-contain" />
            </div>
            <div
              className={`bg-card rounded-xl p-8 pt-32 min-h-[360px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-accent/20 hover:-translate-y-1.5 transition-all duration-500 w-full ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `360ms` }}
            >
              <div className="flex flex-col gap-6 w-full">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <stat.Icon />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>{" "}
                      <span className="text-muted-foreground">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
