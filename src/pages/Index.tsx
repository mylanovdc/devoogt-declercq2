import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { Truck, HardHat, Package, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import containerImage from "@/assets/container-yellow.jpg";
import excavatorImage from "@/assets/excavator-large.jpg";

const scrollToServices = () => {
  const servicesSection = document.getElementById("services-section");
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroImage}
            alt="Devoogt-Declercq machinepark in actie"
            className="w-full h-full object-cover opacity-40"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
              Containerdienst & Grondwerken
            </motion.h1>
            <motion.p
              className="font-display text-2xl md:text-3xl lg:text-4xl text-card-foreground uppercase tracking-wide mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Devoogt-Declercq
            </motion.p>
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Uw partner voor afbraakprojecten, grondwerken en containers van 11m³ tot 28m³.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/containerverhuur">
                  <Package className="h-5 w-5" />
                  Container Huren
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  Vraag Offerte
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Now Clickable */}
        <motion.button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll naar diensten"
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.button>
      </section>

      {/* Our Strength Section */}
      <section className="py-20 industrial-section">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Onze Kracht
            </h2>
            <div className="industrial-divider mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-card-foreground leading-relaxed">
              "Met ons eigen machinepark hebben we alles in eigen beheer voor de realisatie van uw projecten, groot of klein."
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Onze Diensten
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {/* Container Service */}
            <StaggerItem>
              <motion.div
                className="container-card group h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-sm">
                  <img
                    src={containerImage}
                    alt="Container verhuur"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Package className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider">
                    Containerverhuur
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Containers van 11m³ tot 28m³ voor al uw afvalstromen. Snel geleverd en opgehaald.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Steenpuin & Aarde
                  </li>
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Asbest (gecertificeerd)
                  </li>
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Restafval & Gyproc
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/containerverhuur">
                    Meer Info
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </StaggerItem>

            {/* Groundwork Service */}
            <StaggerItem>
              <motion.div
                className="container-card group h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-sm">
                  <img
                    src={excavatorImage}
                    alt="Grond- en afbraakwerken"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <HardHat className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider">
                    Grondwerken
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Uitdelven, nivelleren en voorbereiden van uw terrein voor elk project.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Opritten & Terrassen
                  </li>
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Zwembaden & Regenputten
                  </li>
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Nivelleringswerken
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/grondwerken">
                    Meer Info
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </StaggerItem>

            {/* Demolition Service */}
            <StaggerItem>
              <motion.div
                className="container-card group h-full"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 mb-6 overflow-hidden rounded-sm bg-secondary flex items-center justify-center">
                  <Truck className="h-20 w-20 text-primary/30" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider">
                    Afbraakwerken
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Volledige afbraak van woningen en loodsen met gespecialiseerde machines.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Woningen & Loodsen
                  </li>
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Afvoer inbegrepen
                  </li>
                  <li className="flex items-center gap-2 text-card-foreground text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Offerte op maat
                  </li>
                </ul>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/grondwerken">
                    Meer Info
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Klaar om te starten?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Wij komen graag langs om uw project te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <a href="tel:0476926625">
                    <Phone className="h-5 w-5" />
                    0476 / 92 66 25
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">
                    Vraag Offerte
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
