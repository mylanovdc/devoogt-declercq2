import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
import { Truck, HardHat, Package, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const scrollToServices = () => {
  const servicesSection = document.getElementById("services-section");
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
};

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section - Responsive voor GSM/iPad */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center hero-gradient py-16 md:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="machines/achtergrond.jpeg"
            alt="Devoogt-Declercq machinepark in actie"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="industrial-divider mb-6 w-16 md:w-24"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-wider mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Grond- en afbraakwerken & containerverhuur
            </motion.h1>
            <motion.p
              className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-card-foreground uppercase tracking-wide mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Devoogt-Declercq
            </motion.p>
            <motion.p
              className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
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
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/containerverhuur">
                  Container Huren
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Vraag Offerte
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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

      {/* Services Grid - Responsive Kolommen */}
      <section id="services-section" className="py-16 md:py-24 bg-background">
  <div className="container mx-auto px-4">
    <FadeInView className="text-center mb-12 md:mb-20">
      <h2 className="font-display text-3xl md:text-5xl text-primary uppercase tracking-wider mb-4">
        Onze Diensten
      </h2>
      <div className="industrial-divider mx-auto" />
    </FadeInView>

    <StaggerContainer
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      staggerDelay={0.15}
    >
      {/* Service Kaart Template */}
      {[
        {
          title: "Containerverhuur",
          desc: "Containers van 11m³ tot 28m³ voor al uw afvalstromen. Snel geleverd en opgehaald met eigen transportservice.",
          items: ["Steenpuin & Aarde", "Asbest (gecertificeerd)", "Restafval & Hout"],
          link: "/containerverhuur"
        },
        {
          title: "Grondwerken",
          desc: "Professioneel uitdelven, nivelleren en voorbereiden van uw terrein voor elk bouw- of tuinproject.",
          items: ["Opritten & Terrassen", "Zwembaden & Putten", "Nivelleringswerken"],
          link: "/grondwerken"
        },
        {
          title: "Afbraakwerken",
          desc: "Veilige en efficiënte afbraak van woningen, garages en loodsen met moderne machines en afvoer.",
          items: ["Woningen & Loodsen", "Beton & Funderingen", "Sorteerwerk ter plaatse"],
          link: "/grondwerken"
        }
      ].map((service, index) => (
        <StaggerItem key={index}>
          <motion.div
            className="group h-full p-6 md:p-8 border border-border bg-card flex flex-col"
            whileHover={{ y: -5 }} // Alleen een subtiele lift, geen kleurverandering
          >
            {/* Foto zonder filters */}
            <div className="relative h-56 mb-8 overflow-hidden rounded-sm border border-border">
              <img 
                src="/placeholder.svg" 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h3 className="font-display text-xl md:text-2xl text-primary uppercase mb-4">
              {service.title}
            </h3>
            
            <p className="text-muted-foreground text-base mb-6 flex-grow">
              {service.desc}
            </p>
            
            <ul className="space-y-3 mb-8">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-card-foreground text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>

            <Button variant="heroOutline" className="w-full" asChild>
              <Link to={service.link}>
                Meer Info <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </div>
</section>

      {/* Over Ons Teaser Section met Foto */}
      <section className="py-16 md:py-24 bg-secondary/10 overflow-hidden border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeInView direction="left" className="relative">
              <div className="relative z-10">
                <div className="industrial-divider mb-6 w-16 md:w-24" />
                <h2 className="font-display text-3xl md:text-5xl text-primary uppercase mb-6 leading-tight">
                  Al 45 jaar een <br />{" "}
                  <span className="text-card-foreground">begrip in de regio</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
                  Wat in 1981 begon als een kleine ruimdienst, is onder leiding van de familie
                  Devoogt uitgegroeid tot een volwaardige partner in grond- en afbraakwerken.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                  Vandaag bereiden we ons voor op de toekomst met de overdracht naar de nieuwe
                  generatie: William en Stefanie Devoogt.
                </p>
                <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/over-ons">
                    Ontdek ons verhaal <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <span className="absolute -left-10 -top-20 text-[15rem] font-display font-black text-primary/5 pointer-events-none select-none hidden md:block">
                FAMILY
              </span>
            </FadeInView>

            <FadeInView direction="right" className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-2 md:-inset-4 border-2 border-primary/30 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10" />
              <div className="bg-card border border-border p-2 md:p-3 overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg"
                  alt="Familie Devoogt-Declercq: William en Stefanie"
                  className="w-full h-[300px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-primary p-4 md:p-6 shadow-xl transform translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden md:block">
                  <p className="text-background font-display text-sm md:text-lg uppercase italic leading-tight text-center">
                    "Vakkundigheid en passie voor het vak, van generatie op generatie."
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA Section - Full width buttons op mobile */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-6 leading-tight">
              Klaar om te starten?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte. Wij komen graag
              langs om uw project te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <a href="tel:0476926625">
                  <Phone className="h-5 w-5 mr-2" /> 0476 / 92 66 25
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  Vraag Offerte <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
