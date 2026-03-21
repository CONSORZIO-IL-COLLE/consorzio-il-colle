import { MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section className="container mx-auto text-center py-16 relative z-10">
    <p className="text-text-light text-lg md:text-xl mb-4">
      Hai bisogno di un <strong className="text-white">sopralluogo</strong> o un <strong className="text-white">preventivo veloce</strong>?
    </p>
    <a
      href="https://wa.me/393738881057"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 text-white text-lg md:text-xl font-bold bg-[#25D366] px-6 py-3 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
    >
      <MessageCircle className="w-7 h-7 text-white" />WhatsApp
    </a>
  </section>
);

export default ContactSection;