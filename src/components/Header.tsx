import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo-ilcolle.png";
import { Link } from "react-router-dom";

const baseUrl = "https://consorzio-il-colle.github.io";

const Header = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const navItems = [
    { label: "Chi siamo", href: "/consorzio-il-colle/chi-siamo" },
    { label: "Servizi", href: isLanding ? "#servizi" : `${baseUrl}/consorzio-il-colle#servizi` },
    { label: "Realizzazioni", href: isLanding ? "#servizi" : `${baseUrl}/consorzio-il-colle#servizi` },
    { label: "Contatti", href: isLanding ? "#contatti" : `${baseUrl}/consorzio-il-colle#contatti` },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Show header logo once scrolled past the hero viewport (only on landing)
      if (isLanding) {
        setShowLogo(window.scrollY > window.innerHeight * 0.3);
      } else {
        setShowLogo(true); // Always show logo on non-landing pages (e.g., Chi Siamo)
      }
    };
    window.addEventListener("scroll", onScroll);
    // On mount, for non-landing, show logo immediately
    if (!isLanding) setShowLogo(true);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      style={{ height: 80 }}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo — always visible on mobile for non-landing pages, fades in on landing */}
        <Link
          to="/"
          className={`flex-shrink-0 transition-all duration-500 ${
            showLogo ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
          }`}
        >
          <img src={logo} alt="Il Colle Consorzio" className="h-[84px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                to={item.href}
                className={`${scrolled ? "text-white/90 hover:text-white" : "text-neutral-900 hover:text-neutral-700"} text-[15px] font-medium transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={`${scrolled ? "text-white/90 hover:text-white" : "text-neutral-900 hover:text-neutral-700"} text-[15px] font-medium transition-colors duration-200`}
              >
                {item.label}
              </a>
            )
          )}
          <a
            href={isLanding ? "#contatti" : `${baseUrl}#contatti`}
            className="bg-accent text-accent-foreground font-semibold text-sm px-5 py-3 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            RICHIEDI PREVENTIVO
          </a>
        </nav>

        {/* Mobile hamburger — always visible on mobile for non-landing pages, as before */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 transition-transform duration-200 ${scrolled ? "bg-white" : "bg-neutral-900"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 transition-opacity duration-200 ${scrolled ? "bg-white" : "bg-neutral-900"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 transition-transform duration-200 ${scrolled ? "bg-white" : "bg-neutral-900"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-white/10">
          <nav className="container mx-auto py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/90 hover:text-white text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={isLanding ? "#contatti" : `${baseUrl}#contatti`}
              onClick={() => setMobileOpen(false)}
              className="bg-accent text-accent-foreground font-semibold text-sm px-5 py-3 rounded-lg text-center w-fit hover:brightness-110 transition-all"
            >
              RICHIEDI PREVENTIVO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
