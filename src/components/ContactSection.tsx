import { Phone } from "lucide-react";

const ContactSection = () => (
  <section className="container mx-auto text-center py-16 relative z-10">
    <p className="text-text-light text-lg md:text-xl mb-4">
      Hai bisogno di un <strong className="text-white">sopralluogo</strong> o un <strong className="text-white">preventivo veloce</strong>?
    </p>
    <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">Contattaci ora</h2>
    <a
      href="tel:+393738881057"
      className="inline-flex items-center gap-3 text-white text-2xl md:text-3xl font-bold hover:text-accent transition-colors duration-200"
    >
      <Phone className="w-7 h-7" /> 373 8881057
    </a>
  </section>
);

export default ContactSection;