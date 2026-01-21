import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { HardHat, Truck, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import excavatorLarge from "@/assets/excavator-large.jpg";
import excavatorSmall from "@/assets/excavator-small.jpg";

const services = [
  "Uitdelven opritten en terrassen",
  "Nivelleren van terreinen",
  "Plaatsen van regenputten",
  "Plaatsen van zwembaden",
  "Afbraak van woningen",
  "Afbraak van loodsen",
  "Grondafvoer en aanvoer",
  "Bouwrijp maken van terreinen",
];

const machines = [
  { name: "Minigraver 2t", description: "Voor krappe ruimtes en tuinwerken", image: excavatorSmall },
  { name: "Kraan 5t", description: "Veelzijdig voor middelgrote projecten", image: excavatorSmall },
  { name: "Kraan 15t", description: "Voor grotere grond- en afbraakwerken", image: excavatorLarge },
  { name: "Kraan 24t", description: "Voor zware afbraak en grootschalige projecten", image: excavatorLarge },
];

const GrondwerkenPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 hero-gradient">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={excavatorLarge}
            alt="Grondwerken"
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
              Grond- & Afbraakwerken
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Van kleine tuinprojecten tot volledige afbraak van gebouwen. Wij hebben de expertise en het machinepark.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <HardHat className="h-5 w-5" />
                  Vraag Offerte
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <div className="bg-card border-l-4 border-primary p-8 rounded-sm mb-12">
                <p className="text-xl md:text-2xl text-card-foreground italic">
                  "Bent u geen handige harry of is uw project te groot? Wij komen graag langs voor een offerte op maat."
                </p>
              </div>
            </FadeInView>

            <FadeInView className="text-center mb-12" delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
                Onze Diensten
              </h2>
              <div className="industrial-divider mx-auto" />
            </FadeInView>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.05}>
              {services.map((service) => (
                <StaggerItem key={service}>
                  <motion.div
                    className="bg-secondary border border-border rounded-sm p-4 flex items-center gap-3 hover:border-primary transition-colors"
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{service}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Machinepark */}
      <section className="py-20 industrial-section">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Ons Machinepark
            </h2>
            <div className="industrial-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Met ons uitgebreide machinepark zijn we uitgerust voor elk project, van kleine tuinwerken tot grote afbraakprojecten.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {machines.map((machine) => (
              <StaggerItem key={machine.name}>
                <motion.div
                  className="container-card group h-full"
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="relative h-48 mb-4 overflow-hidden rounded-sm">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-lg text-primary uppercase tracking-wider mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {machine.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView className="mt-12 text-center" delay={0.3}>
            <motion.div
              className="inline-flex items-center gap-4 bg-card border border-border rounded-sm px-6 py-4"
              whileHover={{ scale: 1.02 }}
            >
              <Truck className="h-8 w-8 text-primary" />
              <div className="text-left">
                <span className="block font-display text-lg text-primary uppercase tracking-wider">
                  + Dumper & Rol
                </span>
                <span className="text-sm text-muted-foreground">
                  Voor transport en verdichting
                </span>
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Hoe Werkt Het?
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            <StaggerItem>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-primary rounded-sm flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <span className="font-display text-2xl text-primary-foreground">1</span>
                </motion.div>
                <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                  Contact
                </h3>
                <p className="text-muted-foreground">
                  Neem contact op via telefoon of het formulier. Beschrijf uw project kort.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-primary rounded-sm flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <span className="font-display text-2xl text-primary-foreground">2</span>
                </motion.div>
                <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                  Offerte
                </h3>
                <p className="text-muted-foreground">
                  Wij komen langs voor een gratis plaatsbezoek en bezorgen u een offerte op maat.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-primary rounded-sm flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <span className="font-display text-2xl text-primary-foreground">3</span>
                </motion.div>
                <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                  Uitvoering
                </h3>
                <p className="text-muted-foreground">
                  Na akkoord plannen we de werken in en voeren we deze vakkundig uit.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Project Bespreken?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vraag vandaag nog een vrijblijvende offerte aan. Wij komen graag langs om de mogelijkheden te bespreken.
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

export default GrondwerkenPage;
