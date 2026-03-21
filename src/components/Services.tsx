import { useEffect, useRef, useState } from "react";
import { Building2, PaintBucket, Award, Users, Wrench } from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "Costruzioni e ristrutturazioni",
    text: "Nuove costruzioni, ristrutturazioni complete, ampliamenti e interventi strutturali chiavi in mano.",
  },
  {
    icon: PaintBucket,
    title: "Restauro e finiture",
    text: "Tinteggiature, cappotti termici, cartongesso, restauri conservativi e finiture di pregio.",
  },
];

const stats = [
  { icon: Award, value: "+20", label: "anni di esperienza" },
  { icon: Users, value: "15+", label: "imprese specializzate" },
  { icon: Wrench, value: "∞", label: "Team completo per ogni lavorazione" },
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
    <section id="servizi" ref={sectionRef} className="py-20 md:py-24 bg-background">
      <div className="container mx-auto">
        <p
          className={`text-center text-foreground/70 text-lg md:text-xl font-medium mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Per privati · imprese · enti pubblici · condomini
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-card rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          ))}

          {/* Stats card */}
          <div
            className={`bg-card rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-accent/20 hover:-translate-y-1.5 transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "360ms" }}
          >
            <div className="flex flex-col gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-accent" />
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
    </section>
  );
};

export default Services;
