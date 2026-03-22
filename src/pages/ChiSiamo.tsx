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
          Il “CONSORZIO IL COLLE – DIPINTORI E RESTAURATORI DEL NORD – EST” sorge nell’anno 2009, riunendo un gruppo di aziende artigiane giovani e dinamiche che operano nel settore delle tinteggiature edili, isolamenti termoacustici, manutenzioni e ristrutturazioni edilizie in genere con forti basi derivanti dalla tradizione e proiettati verso l’innovazione. Con un’esperienza più che ventennale ed attrezzature complete e funzionali svolge lavori per imprese edili, privati, enti pubblici e amministrazioni di condomini, al fine di offrire un servizio affidabile e personalizzato.
        </p>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Le imprese artigiane all’interno del Consorziosi sono aggregate ed hanno unito le loro forze con lo scopo di formare una partnership nata per realizzare nuove strutture edilizie, ristrutturazioni di fabbricati di pregio e di alto contenuto storico e restauri conservativi sempre al passo con le ultime innovazioni tecniche e tecnologiche. Il gruppo vanta al proprio interno collaboratori di fiducia per garantire le direttive imposte e dare al cliente l’opera finita a regola d’arte, ed assicurare tempi e costi certi per l’esecuzione dei lavori.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-4">Elenco opere</h2>
        <ul className="list-disc list-inside text-neutral-800 mb-8 space-y-2">
          <li>manutenzione, ristrutturazione e restauro conservativo di edifici</li>
          <li>pitture edili, civili e industriali</li>
          <li>coibentazioni esterne a cappotto</li>
          <li>sistemazione e rifacimento di manti di copertura</li>
          <li>opere in cartongesso</li>
        </ul>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Interventi edili di piccola e media dimensione quali nuove costruzioni con finitura chiavi in mano, demolizioni, ristrutturazioni, assistenze varie, scavi, sottoservizi, opere stradali ed opere  esterne complementari in genere.
        </p>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Interventi di edilizia residenziale, industriale, commerciale e pubblica.
        </p>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Impianti idraulici ed elettrici, civili ed industriali.
        </p>
        <p className="text-lg md:text-xl text-neutral-800 mb-8 text-center">
          Manutenzione del verde: sfalcio erba, potature e piantumazioni, realizzazione giardini e rimboschimento.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-4">Nel nostro staff nonchè soci e collaboratori:</h2>
        <ul className="list-disc list-inside text-neutral-800 space-y-2 mb-8">
          <li>N.2 tecnici di cantiere fissi nonché altri collaboratori esterni</li>
          <li>N.15 imprese lavorazioni pittoriche e cartongessi</li>
          <li>N.5 imprese edili</li>
          <li>N.2 imprese specializzate nella bonifica / riqualificazione coperture civili ed industriali</li>
          <li>N.1 impresa specializzata in allestimento e noleggio ponteggi fissi e mobili</li>
          <li>N.2 lattonieri</li>
          <li>N.3 impiantisti idraulici</li>
          <li>N.2 impiantisti elettricisti</li>
          <li>N.1 serramentista</li>
          <li>N.2 piastrellisti</li>
          <li>N.1 massettista</li>
          <li>N.1 vivaista</li>
          <li>Tanti altri collaboratori di nostra fiducia al fornire un servizio completo.</li>
        </ul>
        <h2 className="text-2xl md:text-3xl font-bold text-accent mt-12 mb-4">CONTATTI</h2>
        <div className="text-neutral-800 text-center space-y-2">
          <div>Santa Giustina In Colle 35010 PD</div>
          <div>Via S. Francesco n.24/a</div>
          <div>Cell: 373 8881057</div>
          <div>Tel e Fax: 049 930 07 76</div>
          <div>ilcolle.tecnico@gmail.com</div>
          <div>ilcolle.giacomazzi@gmail.com</div>
        </div>
      </section>
      {/* ContactSection removed as requested */}
    </main>
    <Footer />
  </>
);

export default ChiSiamo;
