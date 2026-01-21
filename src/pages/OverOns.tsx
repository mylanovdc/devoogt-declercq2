import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { ArrowRight, Phone } from "lucide-react";

const timelineEvents = [
  {
    year: "1981",
    title: "De Start",
    description: "Overname ruimdienst door Jean-Marie en Linda van nonkel Richard. Het begin van een familiebedrijf.",
  },
  {
    year: "2000",
    title: "Uitbreiding",
    description: "Uitbreiding met containerverhuur in de Industrielaan. De eerste stap naar een breder dienstenaanbod.",
  },
  {
    year: "2001",
    title: "Nieuwe Generatie",
    description: "William treedt in dienst. Toevoeging van grond- en afbraakwerken aan het dienstenpakket.",
  },
  {
    year: "2010",
    title: "Nieuwe Locatie",
    description: "Verhuizing naar de huidige locatie in de Mortelputstraat voor meer ruimte en groeimogelijkheden.",
  },
  {
    year: "2017",
    title: "Focus",
    description: "Overname ruimdienst door derden. Jean-Marie gaat in welverdiend pensioen.",
  },
  {
    year: "2026",
    title: "De Toekomst",
    description: "Officiële overdracht aan de nieuwe generatie: William en Stefanie Devoogt. Klaar voor de toekomst.",
  },
];

const OverOnsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="industrial-divider mx-auto mb-6"
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
              Over Ons
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Al meer dan 40 jaar een familiebedrijf met passie voor kwaliteit en service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Onze Geschiedenis
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Year Badge */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-16 h-16 bg-primary rounded-sm flex items-center justify-center -translate-x-1/2 md:-translate-x-1/2 z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="font-display text-lg text-primary-foreground font-bold">
                      {event.year}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <motion.div
                      className="bg-card border border-border rounded-sm p-6 hover:border-primary transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 industrial-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInView className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-4">
                Onze Waarden
              </h2>
              <div className="industrial-divider mx-auto" />
            </FadeInView>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
              <StaggerItem>
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-card border-2 border-primary rounded-sm flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <span className="font-display text-3xl text-primary">K</span>
                  </motion.div>
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                    Kwaliteit
                  </h3>
                  <p className="text-muted-foreground">
                    Wij leveren enkel werk waar we trots op zijn. Geen halve maatregelen.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-card border-2 border-primary rounded-sm flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <span className="font-display text-3xl text-primary">F</span>
                  </motion.div>
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                    Familiebedrijf
                  </h3>
                  <p className="text-muted-foreground">
                    Persoonlijke aanpak en korte lijnen. U spreekt altijd met de mensen die het werk uitvoeren.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-card border-2 border-primary rounded-sm flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <span className="font-display text-3xl text-primary">V</span>
                  </motion.div>
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">
                    Vakmanschap
                  </h3>
                  <p className="text-muted-foreground">
                    Jarenlange ervaring en expertise. Wij kennen ons vak door en door.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <FadeInView className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Laten we kennismaken
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Benieuwd wat wij voor u kunnen betekenen? Neem gerust contact op voor een vrijblijvend gesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Contact Opnemen
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

export default OverOnsPage;
