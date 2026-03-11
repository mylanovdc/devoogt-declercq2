import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations";

const projects = [
  {
    id: 8,
    slug: "totaalinrichting-bedrijfsterrein",
    title: "Totaalinrichting bedrijfsterrein",
    location: "Lichtervelde",
    image: "/realisaties/totaalinrichting-bedrijfsterrein/foto12.webp",
  },
  {
    id: 5,
    slug: "keerwanden-plaatsen",
    title: "Plaatsen van Keerwanden",
    location: "Kortemark",
    image: "/realisaties/keerwanden-plaatsen/foto10.webp",
  },
  {
    id: 3,
    slug: "afbraak-tussenbouw-en-bijgebouwen",
    title: "Afbraak Bijgebouwen",
    location: "Lichtervelde",
    image: "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto1.webp",
  },
  {
    id: 1,
    slug: "aanleg-speelplaats",
    title: "Aanleg Speelplaats",
    location: "Lichtervelde",
    image: "/realisaties/aanleg-speelplaats/foto7.webp",
  },
  {
    id: 2,
    slug: "afbraak-bouw-hangaar",
    title: "Afbraak Bouw Hangaar",
    location: "Torhout",
    image: "/realisaties/afbraak-bouw-hangaar/foto9.webp",
  },
  {
    id: 4,
    slug: "afbraak-woningen",
    title: "Afbraak Woningen",
    location: "Lichtervelde",
    image: "/realisaties/afbraak-woningen/foto1.webp",
  },
  {
    id: 6,
    slug: "plaatsen-zwembad",
    title: "Uitgraven & Plaatsen Zwembad",
    location: "Zedelgem",
    image: "/realisaties/plaatsen-zwembad/foto6.webp",
  },
  {
    id: 7,
    slug: "uitbreken-oprit-en-terras-plaatsen-riolering",
    title: "Oprit, Terras & Riolering",
    location: "Lichtervelde",
    image:
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto4.webp",
  },
  {
    id: 9,
    slug: "voorbereiding-tuin",
    title: "Voorbereiding Tuin",
    location: "Beernem",
    image: "/realisaties/voorbereiding-tuin/foto1.webp",
  },
];

const Realisaties = () => {
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
            <motion.h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-wider mb-4">
              Onze Realisaties
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground">
              Een overzicht van onze expertise in grondwerken en afbraak.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section met Stagger Effect */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/realisaties/${project.slug}`}
                    className="group block relative bg-card border border-border overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6 flex flex-col h-full">
                      <h3 className="font-display text-xl text-card-foreground uppercase group-hover:text-primary transition-colors mb-auto">
                        {project.title}
                      </h3>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center text-sm font-bold uppercase tracking-wider text-primary transition-all group-hover:gap-3">
                          Bekijk project <ArrowRight className="ml-2 h-4 w-4" />
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 border-b border-primary/20 pb-1">
                          {project.location}
                        </span>
                      </div>
                    </div>

                    {/* Industrial Accent Decor */}
                    <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                      <div className="absolute top-0 right-0 w-full h-[1px] bg-primary/30" />
                      <div className="absolute top-0 right-0 h-full w-[1px] bg-primary/30" />
                    </div>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <FadeInView className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-primary uppercase tracking-wider mb-6">
              Interesse in een samenwerking?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Vraag een offerte <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="tel:0476926625">
                  <Phone className="mr-2 h-5 w-5" /> 0476 / 92 66 25
                </a>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>
    </Layout>
  );
};

export default Realisaties;
