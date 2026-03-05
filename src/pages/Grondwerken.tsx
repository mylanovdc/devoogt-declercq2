import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FadeInView,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";
import {
  Truck,
  HardHat,
  Pickaxe,
  Drill,
  Layers,
  Droplets,
  Waves,
  Trees,
  Fence,
  MoveHorizontal,
  Trash2,
  Construction,
  Scaling,
  Hammer,
  ArrowRight,
  Phone,
} from "lucide-react";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="p-3 bg-primary/10 rounded-sm border-l-4 border-primary shadow-sm group-hover:bg-primary/20 transition-colors">
    {children}
  </div>
);

const services = [
  {
    title: "Uitbreken en delven opritten",
    icon: (
      <IconWrapper>
        <Pickaxe className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Nivelleren terreinen",
    icon: (
      <IconWrapper>
        <MoveHorizontal className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Plaatsen regenwater- en septische putten",
    icon: (
      <IconWrapper>
        <Layers className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Plaatsen zwembaden",
    icon: (
      <IconWrapper>
        <Waves className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Afbraak woningen",
    icon: (
      <IconWrapper>
        <Construction className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Afbraak loodsen",
    icon: (
      <IconWrapper>
        <Drill className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Grondafvoer & aanvoer",
    icon: (
      <IconWrapper>
        <Truck className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Bouwrijp maken van terreinen",
    icon: (
      <IconWrapper>
        <Scaling className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Plaatsen vijvers",
    icon: (
      <IconWrapper>
        <Droplets className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Plaatsen riolering",
    icon: (
      <IconWrapper>
        <Trash2 className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Verwijderen bomen & hagen",
    icon: (
      <IconWrapper>
        <Trees className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Kleine afbraakwerken",
    icon: (
      <IconWrapper>
        <Hammer className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Verwijderen afsluitingen",
    icon: (
      <IconWrapper>
        <Fence className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
  {
    title: "Plaatsen keerwanden",
    icon: (
      <IconWrapper>
        <HardHat className="h-6 w-6 text-primary" />
      </IconWrapper>
    ),
  },
];

const machines = [
  {
    name: "Minigraver 2t",
    description: "Voor krappe ruimtes en tuinwerken",
    image: "machines/2t.jpeg",
  },
  {
    name: "Kraan 5t",
    description: "Veelzijdig voor middelgrote projecten",
    image: "machines/5t.jpeg",
  },
  {
    name: "Kraan 15t",
    description: "Voor grotere grond- en afbraakwerken",
    image: "machines/15t.jpeg",
  },
  {
    name: "Kraan 24t",
    description: "Voor zware afbraak en grootschalige projecten",
    image: "machines/24t.jpeg",
  },
  {
    name: "Vrachtwagen containerverhuur",
    description: "Vrachtwagen voor containerverhuur",
    image: "machines/vrachtwagen-verhuur.jpeg",
  },
  {
    name: "Vrachtwagen met dieplader",
    description: "Vrachtwagen met dieplader voor vervoer van machines",
    image: "machines/vrachtwagen-vervoer.jpeg",
  },
  {
    name: "Vrachtwagen met kipper",
    description: "Gespecialiseerd voor zware afbraakwerken",
    image: "machines/vrachtwagen-kipper.jpeg",
  },
];

const GrondwerkenPage = () => {
  return (
    <Layout>
      {/* Hero Section - Responsive Padding & Height */}
      <section className="relative py-20 md:py-32 hero-gradient min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="machines/24t.jpeg"
            alt="Grondwerken"
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
            {/* Divider met breedte-animatie */}
            <motion.div
              className="industrial-divider mb-6 w-16 md:w-24"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            {/* Titel animatie */}
            <motion.h1
              className="font-display text-3xl sm:text-4xl md:text-6xl text-primary uppercase tracking-wider mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Grond- en Afbraakwerken
            </motion.h1>

            {/* Paragraaf animatie */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Van kleine tuinprojecten tot volledige afbraak van gebouwen. Wij
              hebben de expertise en het machinepark.
            </motion.p>

            {/* Button container animatie */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">Vraag Offerte</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section - Responsive Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl text-primary uppercase tracking-tighter mb-4">
              Onze Diensten
            </h2>
            <div className="industrial-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Professionele uitvoering van al uw grond- en afbraakwerken met
              eigen materieel.
            </p>
          </FadeInView>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            staggerDelay={0.05}
          >
            {services.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="group bg-card border border-border p-6 flex flex-col justify-between h-full hover:border-primary transition-all duration-300 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <span className="absolute -right-2 -bottom-4 text-5xl md:text-6xl font-display text-primary/5 group-hover:text-primary/10 transition-colors">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="font-display text-base md:text-lg text-card-foreground uppercase tracking-wider group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-0 h-1 bg-primary mt-4 group-hover:w-full transition-all duration-500" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Machinepark - Responsive Images & Layout */}
      <section className="py-16 md:py-20 industrial-section">
        <div className="container mx-auto px-4">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-4">
              Ons Machinepark & Uitrusting
            </h2>
            <div className="industrial-divider mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Met ons uitgebreide machinepark en gespecialiseerde hulpstukken
              zijn we uitgerust voor elk project.
            </p>
          </FadeInView>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            staggerDelay={0.1}
          >
            {machines.map((machine) => (
              <StaggerItem key={machine.name}>
                <motion.div
                  className="container-card group h-full p-4 md:p-6 border border-border bg-card/50 hover:bg-card transition-colors"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-40 md:h-48 mb-4 overflow-hidden rounded-sm bg-muted">
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge voor breekhamer/hulpstuk */}
                    {machine.name.includes("Breekhamer") && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] px-2 py-1 uppercase font-bold">
                        Hulpstuk
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-base md:text-lg text-primary uppercase tracking-wider mb-2">
                    {machine.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {machine.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section - Stacked on Mobile */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <FadeInView className="mb-12 md:mb-16">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-4 leading-tight">
              Hoe Werkt Het?
            </h2>
            <div className="industrial-divider mx-auto" />
          </FadeInView>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto"
            staggerDelay={0.15}
          >
            {[
              {
                num: "1",
                title: "Contact",
                text: "Neem contact op via telefoon of het formulier. Beschrijf uw project kort.",
              },
              {
                num: "2",
                title: "Offerte",
                text: "Wij komen langs voor een gratis plaatsbezoek en bezorgen u een offerte op maat.",
              },
              {
                num: "3",
                title: "Uitvoering",
                text: "Na akkoord plannen we de werken in en voeren we deze vakkundig uit.",
              },
            ].map((step) => (
              <StaggerItem key={step.num}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mb-6 bg-primary rounded-sm flex items-center justify-center font-display text-xl md:text-2xl text-primary-foreground">
                    {step.num}
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-primary uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {step.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section - Full Width Buttons on Mobile */}
      <section className="py-16 md:py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Project Bespreken?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Vraag vandaag nog een vrijblijvende offerte aan. Wij komen graag
              langs om de mogelijkheden te bespreken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                className="w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">
                  Vraag Offerte <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="tel:0476926625">
                  <Phone className="h-5 w-5" /> 0476 / 92 66 25
                </a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default GrondwerkenPage;
