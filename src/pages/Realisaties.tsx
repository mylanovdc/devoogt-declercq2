import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInView } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

// DATA MET SLUGS VOOR DE URL
const projects = [
  {
    id: 1,
    slug: "uitgraven-zwembad", // Deze moet matchen met de key in RealisatieDetail.tsx
    title: "Uitgraven Zwembad",
    category: "grondwerken",
    location: "Lichtervelde",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    slug: "plaatsen-containers",
    title: "Plaatsen van 28m³ Containers",
    category: "containers",
    location: "Roeselare",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    slug: "afbraak-loods",
    title: "Afbraak Oude Loods",
    category: "grondwerken",
    location: "Torhout",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    slug: "nivelleren-terrein",
    title: "Nivelleren Bedrijfsterrein",
    category: "grondwerken",
    location: "Ardooie",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    slug: "asbestcontainer-levering",
    title: "Levering Asbestcontainer",
    category: "containers",
    location: "Kortemark",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    slug: "grondverzet-nieuwbouw",
    title: "Grondverzet Nieuwbouw",
    category: "grondwerken",
    location: "Hooglede",
    image: "/placeholder.svg",
  },
];

const categories = [
  { id: "all", label: "Alles" },
  { id: "grondwerken", label: "Grond- & Afbraak" },
  { id: "containers", label: "Containers" },
];

const Realisaties = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              Onze Realisaties
            </motion.h1>
            <motion.p className="text-xl text-muted-foreground">
              Een greep uit onze recente projecten in grondwerken, afbraak en containerverhuur.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-8 py-3 font-display text-sm uppercase tracking-widest transition-all duration-300 border-2 ${
                  filter === cat.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50 text-muted-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* LINK NAAR DETAILPAGINA */}
                  <Link to={`/realisaties/${project.slug}`} className="group block relative bg-card border border-border overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
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

                    {/* Industrial Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
                      <div className="absolute top-0 right-0 w-full h-[1px] bg-primary/30" />
                      <div className="absolute top-0 right-0 h-full w-[1px] bg-primary/30" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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

export default Realisaties;