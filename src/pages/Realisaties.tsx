import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "aanleg-speelplaats",
    title: "Aanleg Speelplaats",
    category: "Grondwerken",
    location: "Lichtervelde",
    image: "/realisaties/aanleg-speelplaats/foto7.jpg",
  },
  {
    id: 2,
    slug: "afbraak-bouw-hangaar",
    title: "Afbraak Bouw Hangaar",
    category: "Afbraak",
    location: "Torhout",
    image: "/realisaties/afbraak-bouw-hangaar/foto9.jpg",
  },
  {
    id: 3,
    slug: "afbraak-tussenbouw-en-bijgebouwen",
    title: "Afbraak Bijgebouwen",
    category: "Afbraak",
    location: "Lichtervelde",
    image: "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto1.jpg",
  },
  {
    id: 4,
    slug: "afbraak-woningen",
    title: "Afbraak Woningen",
    category: "Afbraak",
    location: "Lichtervelde",
    image: "/realisaties/afbraak-woningen/foto1.jpg",
  },
  {
    id: 5,
    slug: "keerwanden-plaatsen",
    title: "Plaatsen van Keerwanden",
    category: "Grondwerken",
    location: "Kortemark",
    image: "/realisaties/keerwanden-plaatsen/foto10.jpg",
  },
  {
    id: 6,
    slug: "plaatsen-zwembad",
    title: "Uitgraven & Plaatsen Zwembad",
    category: "Grondwerken",
    location: "Zedelgem",
    image: "/realisaties/plaatsen-zwembad/foto6.jpg",
  },
  {
    id: 7,
    slug: "uitbreken-oprit-en-terras-plaatsen-riolering",
    title: "Oprit, Terras & Riolering",
    category: "Grondwerken",
    location: "Lichtervelde",
    image:
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto4.jpg",
  },
  {
    id: 8,
    slug: "totaalinrichting-bedrijfsterrein",
    title: "Totaalinrichting bedrijfsterrein",
    category: "Grondwerken",
    location: "Lichtervelde",
    image: "/realisaties/totaalinrichting-bedrijfsterrein/foto12.jpg",
  },
  {
    id: 9,
    slug: "voorbereiding-tuin",
    title: "Voorbereiding Tuin",
    category: "Grondwerken",
    location: "Beernem",
    image: "/realisaties/voorbereiding-tuin/foto1.jpg",
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

      {/* Projects Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
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

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-card-foreground uppercase group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex items-center text-sm font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Bekijk project <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>

                  {/* Industrial Accent Decor */}
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-[1px] bg-primary/30" />
                    <div className="absolute top-0 right-0 h-full w-[1px] bg-primary/30" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
