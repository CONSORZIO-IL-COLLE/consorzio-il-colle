import { Mail, Phone, MessageCircle } from "lucide-react";


const Footer = () => (
  <footer className="bg-[hsl(0,0%,7%)] text-white/70 pt-8 pb-12 relative z-10">
    <div className="container mx-auto">

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left */}
        <div className="space-y-2 text-sm">
          <p>Via S. Francescon 24/a</p>
          <p>Santa Giustina in Colle (PD)</p>
          <p className="mt-4">C.F. / P.IVA: 04427520235</p>
        </div>

        {/* Right */}
        <div className="space-y-2 text-sm md:text-right">
          <a href="mailto:commerciale@ilcolle.com" className="flex md:justify-end items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /> commerciale@ilcolle.com
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Il Colle Consorzio. Tutti i diritti riservati.<br />
        <span className="text-white/60">Sviluppato da <a href="https://europeanmanagement.eu/chi-siamo#:~:text=Sviluppato%20da%20Sintija%20Birgele" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Sintija Birgele</a></span>
      </div>
    </div>

    {/* Floating phone button only */}
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+393738881057"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Chiama"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="sr-only">Chiama 373 8881057</span>
      </a>
    </div>
  </footer>
);

export default Footer;
