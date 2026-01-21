import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { Package, CheckCircle2, Truck, ArrowRight, Phone, AlertTriangle } from "lucide-react";
import containerImage from "@/assets/container-yellow.jpg";

const containerSizes = [
  { size: "11m³", description: "Ideaal voor kleine renovaties en tuinprojecten" },
  { size: "15m³", description: "Perfect voor middelgrote klussen en opruimwerken" },
  { size: "20m³", description: "Geschikt voor grotere bouw- en afbraakprojecten" },
  { size: "28m³", description: "Voor grote volumes en industriële projecten" },
];

const wasteTypes = [
  { name: "Steenpuin", allowed: true },
  { name: "Aarde", allowed: true },
  { name: "Asbest", allowed: true, note: "Gecertificeerd" },
  { name: "Gyproc", allowed: true },
  { name: "Restafval", allowed: true },
  { name: "Groenafval", allowed: true },
  { name: "Hout", allowed: true },
  { name: "Metaal", allowed: true },
];

const ContainerverhuurPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={containerImage}
            alt="Container verhuur"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
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
              className="industrial-divider mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Containerverhuur
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Containers van 11m³ tot 28m³ voor al uw afvalstromen. Snelle levering en ophaling in de regio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="hero" size="xl" asChild>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Beschikbare Volumes
            </h2>
            <div className="industrial-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kies de juiste container voor uw project. Niet zeker welk volume u nodig heeft? Neem contact op voor advies.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {containerSizes.map((container) => (
              <StaggerItem key={container.size}>
                <motion.div
                  className="container-card text-center group h-full"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-sm flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Package className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl text-primary uppercase tracking-wider mb-3">
                    {container.size}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {container.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What Can Go In */}
      <section className="py-20 industrial-section">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Wat mag er in de container?
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto" staggerDelay={0.05}>
            {wasteTypes.map((type) => (
              <StaggerItem key={type.name}>
                <div className="bg-card border border-border rounded-sm p-4 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <span className="text-card-foreground">{type.name}</span>
                    {type.note && (
                      <span className="block text-xs text-muted-foreground">{type.note}</span>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView className="mt-12 max-w-2xl mx-auto" delay={0.3}>
            <div className="bg-card border border-primary/30 rounded-sm p-6 flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display text-lg text-primary uppercase tracking-wider mb-2">
                  Let op!
                </h4>
                <p className="text-muted-foreground text-sm">
                  Gemengd afval en gevaarlijke stoffen vereisen speciale behandeling. Neem contact met ons op voor meer informatie over de specifieke richtlijnen voor uw afvaltype.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Overslag Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInView direction="left">
              <div className="industrial-divider mb-6" />
              <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
                Overslag
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mogelijkheid om zelf afvalstoffen aan te voeren op ons terrein na afspraak. Ideaal voor kleinere hoeveelheden of wanneer u zelf over transport beschikt.
              </p>
              <Button variant="outline" asChild>
                <a href="tel:0476926625">
                  <Phone className="h-4 w-4" />
                  Maak een Afspraak
                </a>
              </Button>
            </FadeInView>

            <FadeInView direction="right" delay={0.2}>
              <div className="bg-card border border-border rounded-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Truck className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider">
                    Recuperatiemateriaal
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Wij verkopen ook kwalitatief recuperatiemateriaal:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-card-foreground font-semibold">Gebroken mengpuin 0/56</span>
                      <span className="block text-sm text-muted-foreground">Met keuringsattest CRT/LB001/Q42</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground font-semibold">Zeefzand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-card-foreground font-semibold">Teelaarde</span>
                  </li>
                </ul>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Container Nodig?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vraag vandaag nog een offerte aan. Wij zorgen voor snelle levering en ophaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Vraag Offerte
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="tel:0476926625">
                    <Phone className="h-5 w-5" />
                    0476 / 92 66 25
                  </a>
                </Button>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default ContainerverhuurPage;
