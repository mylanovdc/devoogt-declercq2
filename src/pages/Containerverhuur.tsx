import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import zeefInstallatie from "@/assets/machines/zeef.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import {
  Package,
  CheckCircle2,
  Truck,
  ArrowRight,
  Phone,
  AlertTriangle,
  MapPin,
  Clock,
  FileText,
  Construction,
  Recycle,
  TreePine,
} from "lucide-react";
import containerImage from "@/assets/container-yellow.jpg";

const containerSizes = [
  { size: "11m³", description: "Ideaal voor kleine renovaties en tuinprojecten" },
  { size: "15m³", description: "Perfect voor middelgrote klussen en opruimwerken" },
  { size: "20m³", description: "Geschikt voor grotere bouw- en afbraakprojecten" },
  { size: "28m³", description: "Voor grote volumes en industriële projecten" },
];

// Uitgebreide lijst gegroepeerd voor betere leesbaarheid
const wasteCategories = [
  {
    category: "Bouw & Sloop",
    icon: <Construction className="h-5 w-5 text-primary" />,
    items: [
      { name: "Steenpuin" },
      { name: "Puin en grond", note: "Met en zonder stenen" },
      { name: "Aarde met graszoden", note: "Zonder stenen" },
      { name: "Niet gewapend beton" },
      { name: "Gewapend beton" },
      { name: "Kleigrond" },
      { name: "Ytong & Gyproc" },
      { name: "Asfalt", note: "Met en zonder koolteer" },
    ],
  },
  {
    category: "Specifiek Afval",
    icon: <Recycle className="h-5 w-5 text-primary" />,
    items: [
      { name: "Asbest", note: "Gecertificeerde afvoer" },
      { name: "Vlak glas" },
      { name: "Ramen & deuren met glas" },
      { name: "Papier & Karton" },
      { name: "Hard plastiek" },
      { name: "Autobanden", note: "Zonder velgen" },
    ],
  },
  {
    category: "Mix & Tuin",
    icon: <TreePine className="h-5 w-5 text-primary" />,
    items: [
      { name: "Gemengd Restafval", note: "Brandbaar (plastiek, hout...)" },
      { name: "Gemengd Restafval", note: "Niet-brandbaar (matrassen...)" },
      { name: "Stortafval" },
      { name: "Tuinafval", note: "Inclusief boomwortels" },
      { name: "Houtafval", note: "Zonder glas" },
    ],
  },
];

const ContainerverhuurPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 hero-gradient min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={containerImage}
            alt="Container verhuur"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="industrial-divider mb-6 w-16 md:w-24"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-6xl text-primary uppercase tracking-wider mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Containerverhuur
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Containers van 11m³ tot 28m³ voor al uw afvalstromen. Snelle levering en ophaling in
              de regio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  <Package className="h-5 w-5" />
                  Container Aanvragen
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Container Sizes */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Beschikbare Volumes
            </h2>
            <div className="industrial-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Kies de juiste container voor uw project. Niet zeker welk volume u nodig heeft? Neem
              contact op voor advies.
            </p>
          </FadeInView>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {containerSizes.map((container) => (
              <StaggerItem key={container.size}>
                <motion.div
                  className="group bg-card border border-border p-6 md:p-8 text-center h-full hover:border-primary transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div className="mb-6">
                    <h3 className="font-display text-4xl md:text-5xl text-primary tracking-tighter uppercase group-hover:scale-110 transition-transform duration-300">
                      {container.size}
                    </h3>
                  </div>
                  <div className="industrial-divider mx-auto mb-6 w-12 group-hover:w-full transition-all duration-500" />
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium uppercase tracking-wide">
                    {container.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Can Go In - Volledige Lijst Verwerkt */}
      <section className="py-16 md:py-20 industrial-section">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Wat mag er in de container?
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {wasteCategories.map((cat, idx) => (
              <FadeInView
                key={idx}
                delay={idx * 0.1}
                className="bg-card/50 border border-border p-6 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                  {cat.icon}
                  <h3 className="font-display text-lg text-primary uppercase tracking-tight">
                    {cat.category}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-card-foreground text-sm font-bold uppercase block leading-tight">
                          {item.name}
                        </span>
                        {item.note && (
                          <span className="text-[10px] text-muted-foreground italic">
                            {item.note}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="mt-12 max-w-3xl mx-auto" delay={0.3}>
            <div className="bg-card border border-primary/30 rounded-sm p-4 md:p-6 flex items-start gap-4">
              <AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-base md:text-lg text-primary uppercase tracking-wider mb-2">
                  Belangrijke informatie
                </h4>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  Sommige afvalstromen zoals asbest of asfalt met koolteer vereisen specifieke
                  procedures. Neem bij twijfel of voor grote projecten altijd contact met ons op
                  voor de meest recente richtlijnen.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Eigen Installaties & Recuperatiemateriaal */}
      <section className="py-16 md:py-20 bg-secondary/20 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16">
            <FadeInView direction="left">
              <div className="industrial-divider mb-6 w-16" />
              <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-6">
                Eigen Breek- & Zeefinstallatie
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Wij beschikken over een eigen{" "}
                <strong className="text-card-foreground font-bold">breekinstallatie</strong> en{" "}
                <strong className="text-card-foreground font-bold">zeefinstallatie</strong>.
                Hierdoor hebben wij diverse recuperatiematerialen en opvoermateriaal direct ter
                beschikking voor uw project. Recuperatiemateriaal kan worden afgehaald of geleverd.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm md:text-base">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-card-foreground font-semibold">
                    Constante voorraad van gekeurde materialen
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-card-foreground font-semibold">
                    Alles in eigen beheer voor scherpe prijzen
                  </span>
                </li>
              </ul>
            </FadeInView>

            {/* Grote afbeelding in kleur met zoom-effect */}
            <FadeInView
              direction="right"
              delay={0.2}
              className="relative group overflow-hidden border border-border bg-card aspect-video lg:aspect-square xl:aspect-video"
            >
              <img
                src={zeefInstallatie}
                alt="Eigen zeefinstallatie Devoogt-Declercq"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40" />
              <span className="absolute bottom-6 left-6 font-display text-primary uppercase text-xs md:text-sm tracking-[0.2em] z-10 bg-background/40 backdrop-blur-sm px-3 py-1">
                Breek- en zeefinstallatie in actie
              </span>
            </FadeInView>
          </div>

          <FadeInView className="bg-card/50 border border-border p-6 md:p-10 rounded-sm">
            <h3 className="font-display text-xl md:text-2xl text-primary uppercase mb-8 border-b border-primary/20 pb-4 tracking-widest">
              Beschikbaar Recuperatiemateriaal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-card-foreground font-bold uppercase tracking-tight mb-1 text-sm md:text-base">
                    Gebroken Mengpuin 0/56
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug uppercase">
                    Met CE keuringsattest Certipro
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-card-foreground font-bold uppercase tracking-tight mb-1 text-sm md:text-base">
                    Puin Zeefzand 0/20
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug">
                    Hoogwaardig zand voor diverse toepassingen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-card-foreground font-bold uppercase tracking-tight mb-1 text-sm md:text-base">
                    Zeefgrond
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug">
                    Gezuiverde grond, ideaal voor ophogingen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-sm">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-card-foreground font-bold uppercase tracking-tight mb-1 text-sm md:text-base">
                    Teelaarde
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug">
                    Kwalitatieve grond voor tuin en landschap.
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <FadeInView direction="left" className="h-full">
              <div className="group relative h-full bg-card/50 border border-border p-6 md:p-10 hover:border-primary transition-all duration-500 overflow-hidden flex flex-col">
                <span className="absolute -right-4 -bottom-8 text-7xl md:text-[12rem] font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  01
                </span>
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,255,0,0.3)]">
                      <MapPin className="h-6 w-6 md:h-8 md:w-8 text-background" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-primary uppercase">
                      Zelf Aanvoeren
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-card-foreground font-semibold mb-6">
                    Beschikt u over eigen transport? Breng uw afvalstoffen direct naar ons terrein.
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 text-primary font-display text-[10px] md:text-xs uppercase tracking-widest mb-8">
                    <Clock className="h-4 w-4" /> Enkel na telefonische afspraak
                  </div>
                </div>
                <Button variant="hero" size="xl" className="w-full relative z-10 mt-auto" asChild>
                  <a href="tel:0476926625">
                    <Phone className="h-5 w-5 mr-2" /> Bel voor afspraak
                  </a>
                </Button>
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2} className="h-full">
              <div className="group relative h-full bg-card/50 border border-border p-6 md:p-10 hover:border-primary transition-all duration-500 overflow-hidden flex flex-col">
                <span className="absolute -right-4 -bottom-8 text-7xl md:text-[12rem] font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  02
                </span>
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,255,0,0.3)]">
                      <Truck className="h-6 w-6 md:h-8 md:w-8 text-background" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-primary uppercase">
                      Afhalen of Leveren
                    </h3>
                  </div>
                  <p className="text-lg md:text-xl text-card-foreground font-semibold mb-6 leading-tight">
                    Flexibele logistiek voor al uw recuperatie- en opvoermateriaal.
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10">
                    <div className="p-3 md:p-6 border border-border bg-background/50 text-center">
                      <span className="block font-display text-base md:text-2xl text-primary uppercase">
                        Afhalen
                      </span>
                    </div>
                    <div className="p-3 md:p-6 border border-border bg-background/50 text-center">
                      <span className="block font-display text-base md:text-2xl text-primary uppercase">
                        Leveren
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="hero" size="xl" className="w-full relative z-10 mt-auto" asChild>
                  <a href="tel:0476926625">
                    <Package className="h-5 w-5 mr-2" /> Bestel Materiaal
                  </a>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-card border-t border-border text-center">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Container Nodig?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-8">
              Vraag vandaag nog een offerte aan. Wij zorgen voor snelle levering en ophaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Vraag Offerte <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                <a href="tel:0476926625">
                  <Phone className="h-5 w-5 mr-2" /> 0476 / 92 66 25
                </a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default ContainerverhuurPage;
