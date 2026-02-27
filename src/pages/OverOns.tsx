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
    image: "/placeholder.svg"
  },
  {
    year: "2000",
    title: "Uitbreiding",
    description: "Uitbreiding met containerverhuur in de Industrielaan. De eerste stap naar een breder dienstenaanbod.",
    image: "/placeholder.svg"
  },
  {
    year: "2001",
    title: "Nieuwe Generatie",
    description: "William treedt in dienst. Toevoeging van grond- en afbraakwerken aan het dienstenpakket.",
    image: "/placeholder.svg"
  },
  {
    year: "2010",
    title: "Nieuwe Locatie",
    description: "Verhuizing naar de huidige locatie in de Mortelputstraat voor meer ruimte en groeimogelijkheden.",
    image: "/placeholder.svg"
  },
  {
    year: "2017",
    title: "Focus",
    description: "Overname ruimdienst door derden. Jean-Marie gaat in welverdiend pensioen.",
    image: "/placeholder.svg"
  },
  {
    year: "2026",
    title: "De Toekomst",
    description: "Officiële overdracht aan de nieuwe generatie: William en Stefanie Devoogt. Klaar voor de toekomst.",
    image: "/placeholder.svg"
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
            >
              Over Ons
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground">
              Al meer dan 40 jaar een familiebedrijf met passie voor kwaliteit en service.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl text-primary uppercase tracking-wider mb-4">
              Onze Geschiedenis
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <div className="max-w-6xl mx-auto relative">
            {/* Centrale verticale lijn */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />

            <div className="space-y-32">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-center gap-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Jaartal Badge (Midden) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20">
                    <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center shadow-lg">
                      <span className="font-display text-xl text-primary-foreground font-black">
                        {event.year}
                      </span>
                    </div>
                  </div>

                  {/* Content Kaart */}
                  <div className="w-full md:w-1/2 pl-20 md:pl-0 flex flex-col">
                    <div className="group bg-card border border-border p-8 hover:border-primary transition-all duration-300 relative">
                      <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
                      <h3 className="font-display text-2xl text-primary uppercase tracking-tighter mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Foto Kaart (Andere kant) */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <div className="relative group overflow-hidden border border-border aspect-video shadow-2xl">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 industrial-section bg-secondary/10">
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
                <div className="bg-card border border-border p-8 text-center hover:border-primary transition-colors">
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">Kwaliteit</h3>
                  <p className="text-muted-foreground">Wij leveren enkel werk waar we trots op zijn. Geen halve maatregelen.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-card border border-border p-8 text-center hover:border-primary transition-colors">
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">Familiebedrijf</h3>
                  <p className="text-muted-foreground">Persoonlijke aanpak en korte lijnen. U spreekt met de eigenaars.</p>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-card border border-border p-8 text-center hover:border-primary transition-colors">
                  <h3 className="font-display text-xl text-primary uppercase tracking-wider mb-3">Vakmanschap</h3>
                  <p className="text-muted-foreground">Jarenlange ervaring en expertise. Wij kennen ons vak door en door.</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">Laten we kennismaken</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:0476926625"><Phone className="mr-2 h-5 w-5" /> 0476 / 92 66 25</a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default OverOnsPage;