import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Tag, HardHat, X, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectData: Record<string, any> = {
  "uitgraven-zwembad": {
    title: "Uitgraven Zwembad",
    description: "Voor een particuliere woning in Lichtervelde hebben we de volledige grondwerken voor een groot buitenzwembad verzorgd. Dit hield in: nauwkeurig uitgraven volgens plan, afvoeren van de overtollige aarde met eigen containers en het nivelleren van de omliggende tuin ter voorbereiding van de aanleg.",
    location: "Lichtervelde",
    year: "2025",
    type: "Grond- & Afbraak",
    service: "Uitgravingen",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "plaatsen-containers": {
    title: "Plaatsen van 28m³ Containers",
    description: "Grootschalige levering van diverse 28m³ containers voor een renovatieproject. Dankzij onze flexibele service konden de containers snel gewisseld worden, waardoor het bouwproces geen vertraging opliep.",
    location: "Roeselare",
    year: "2024",
    type: "Containerverhuur",
    service: "Grote volumes",
    images: ["/placeholder.svg", "/placeholder.svg"]
  },
  "afbraak-loods": {
    title: "Afbraak Oude Loods",
    description: "Totaalafbraak van een vervallen loods inclusief het opbreken van de betonplaat en het sorteren van alle materialen voor recycling.",
    location: "Torhout",
    year: "2024",
    type: "Grond- & Afbraak",
    service: "Afbraakwerken",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  },
  "nivelleren-terrein": {
    title: "Nivelleren Bedrijfsterrein",
    description: "Nivelleringswerken voor de uitbreiding van een parkeerterrein. Gebruik van lasergestuurde machines voor een perfect resultaat.",
    location: "Ardooie",
    year: "2024",
    type: "Grondwerken",
    service: "Nivelleren",
    images: ["/placeholder.svg"]
  },
  "asbestcontainer-levering": {
    title: "Levering Asbestcontainer",
    description: "Veilige levering en ophaling van gecertificeerde asbestcontainers voor een dakrenovatie.",
    location: "Kortemark",
    year: "2025",
    type: "Containerverhuur",
    service: "Asbestverwerking",
    images: ["/placeholder.svg"]
  },
  "grondverzet-nieuwbouw": {
    title: "Grondverzet Nieuwbouw",
    description: "Voorbereidende grondwerken voor een modern nieuwbouwproject, inclusief het graven van de funderingen en de septische putten.",
    location: "Hooglede",
    year: "2025",
    type: "Grondwerken",
    service: "Bouwrijp maken",
    images: ["/placeholder.svg", "/placeholder.svg"]
  }
};

const RealisatieDetail = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const project = projectData[id as keyof typeof projectData];

  // Scroll naar boven bij laden
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <Layout><div className="py-40 text-center">Project niet gevonden.</div></Layout>;

  const nextImg = () => setSelectedImg((prev) => (prev !== null && prev < project.images.length - 1 ? prev + 1 : 0));
  const prevImg = () => setSelectedImg((prev) => (prev !== null && prev > 0 ? prev - 1 : project.images.length - 1));

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img src={project.images[0]} className="absolute inset-0 w-full h-full object-cover" alt={project.title} />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link to="/realisaties" className="inline-flex items-center text-white/80 hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" /> Terug naar overzicht
          </Link>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wider">{project.title}</h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Tekst */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-primary uppercase mb-6">Projectomschrijving</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <Button variant="hero" asChild>
                <a href={`mailto:info@devoogt-declercq.be?subject=Vraag over ${project.title}`}>
                  <Mail className="mr-2 h-5 w-5" /> Gelijkaardig project aanvragen
                </a>
              </Button>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-8 sticky top-24">
                <h3 className="font-display text-xl uppercase mb-6 border-b border-border pb-4">Details</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" /> <strong>Locatie:</strong> {project.location}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" /> <strong>Jaar:</strong> {project.year}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Tag className="h-5 w-5 text-primary" /> <strong>Categorie:</strong> {project.type}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <HardHat className="h-5 w-5 text-primary" /> <strong>Dienst:</strong> {project.service}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl text-primary uppercase mb-10 text-center">Foto's van het project</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.images.map((img, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="aspect-square cursor-pointer overflow-hidden border border-border bg-background"
                onClick={() => setSelectedImg(index)}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button onClick={() => setSelectedImg(null)} className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
              <X className="h-10 w-10" />
            </button>
            <button onClick={prevImg} className="absolute left-4 text-white hover:text-primary">
              <ChevronLeft className="h-12 w-12" />
            </button>
            <img 
              src={project.images[selectedImg]} 
              className="max-h-[85vh] max-w-full object-contain" 
              alt="Full size" 
            />
            <button onClick={nextImg} className="absolute right-4 text-white hover:text-primary">
              <ChevronRight className="h-12 w-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default RealisatieDetail;