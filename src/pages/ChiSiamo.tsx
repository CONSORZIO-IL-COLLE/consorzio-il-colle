import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ChiSiamo = () => (
  <>
    <Header />
    <main className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      <section className="container mx-auto pt-32 pb-16 px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-8 text-center">Chi Siamo</h1>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Il «CONSORZIO IL COLLE – DIPINTORI E RESTAURATORI DEL NORD-EST» sorge nell'anno 2009, riunendo un gruppo di aziende artigiane giovani e dinamiche che operano nel settore delle tinteggiature edili, isolamenti termoacustici, manutenzioni e ristrutturazioni edilizie in genere con forti basi derivanti dalla tradizione e proiettati verso l'innovazione.
        </p>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Con un'esperienza più che ventennale ed attrezzature complete e funzionali svolge lavori per imprese edili, privati, enti pubblici e amministrazioni di condomini, al fine di offrire un servizio affidabile e personalizzato.
        </p>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Le imprese artigiane all'interno del Consorzio si sono aggregate per realizzare nuove strutture edilizie, ristrutturazioni di fabbricati di pregio e di alto contenuto storico e restauri conservativi sempre al passo con le ultime innovazioni tecniche e tecnologiche.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-4">Elenco Opere</h2>
        <ul className="list-disc list-inside text-neutral-800 mb-8 space-y-2">
          <li>Manutenzione, ristrutturazione e restauro conservativo di edifici</li>
          <li>Pitture edili, civili e industriali</li>
          <li>Coibentazioni esterne a cappotto</li>
          <li>Sistemazione e rifacimento di manti di copertura</li>
          <li>Opere in cartongesso</li>
          <li>Nuove costruzioni con finitura chiavi in mano</li>
          <li>Demolizioni, ristrutturazioni, assistenze varie, scavi, sottoservizi</li>
          <li>Opere stradali ed opere esterne complementari</li>
          <li>Impianti idraulici ed elettrici, civili ed industriali</li>
          <li>Manutenzione del verde: sfalcio, potature, piantumazioni, giardini</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-4">Il Nostro Staff</h2>
        <ul className="list-disc list-inside text-neutral-800 space-y-2">
          <li>N.2 tecnici di cantiere fissi + collaboratori esterni</li>
          <li>N.15 imprese lavorazioni pittoriche e cartongessi</li>
          <li>N.5 imprese edili</li>
          <li>N.2 imprese specializzate bonifica/riqualificazione coperture</li>
          <li>N.1 impresa allestimento e noleggio ponteggi fissi e mobili</li>
          <li>N.2 lattonieri · N.3 impiantisti idraulici</li>
          <li>N.2 impiantisti elettricisti · N.1 serramentista</li>
          <li>N.2 piastrellisti · N.1 massettista · N.1 vivaista</li>
        </ul>
      </section>
      {/* ContactSection removed as requested */}
    </main>
    <Footer />
  </>
);

export default ChiSiamo;
