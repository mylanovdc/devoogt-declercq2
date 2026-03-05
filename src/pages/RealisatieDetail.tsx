import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Tag,
  HardHat,
  X,
  ChevronLeft,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projectData: Record<string, any> = {
  "aanleg-speelplaats": {
    title: "Aanleg Speelplaats",
    description:
      "Uitgraven van oud speelgazon en nivelleren van de ondergrond ter voorbereiding van nieuwe aanleg bij basisschool De Valke in Lichtervelde.",
    location: "Lichtervelde",
    year: "2026",
    type: "Grondwerken",
    service: "Bouwrijp maken",
    images: [
      "/realisaties/aanleg-speelplaats/foto1.jpg",
      "/realisaties/aanleg-speelplaats/foto2.jpg",
      "/realisaties/aanleg-speelplaats/foto3.jpg",
      "/realisaties/aanleg-speelplaats/foto4.jpg",
      "/realisaties/aanleg-speelplaats/foto5.jpg",
      "/realisaties/aanleg-speelplaats/foto6.jpg",
      "/realisaties/aanleg-speelplaats/foto7.jpg",
    ],
  },
  "afbraak-bouw-hangaar": {
    title: "Afbraak Bouw Hangaar",
    description:
      "Afbraak en opkuis van woning, opvoeren van grond en bouwrijp maken van terrein te Torhout.",
    location: "Torhout",
    year: "2026",
    type: "Afbraakwerken",
    service: "Sloopwerken",
    images: [
      "/realisaties/afbraak-bouw-hangaar/foto1.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto2.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto3.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto4.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto5.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto6.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto7.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto8.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto9.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto10.jpg",
      "/realisaties/afbraak-bouw-hangaar/foto11.jpg",
    ],
  },
  "afbraak-tussenbouw-en-bijgebouwen": {
    title: "Afbraak Bijgebouwen",
    description:
      "Afbraak van tussen- en bijgebouwen, uitgraven voor septische put en uitbraak van de vloer binnen in de woning voor renovatieproject te Lichtervelde",
    location: "Lichtervelde",
    year: "2026",
    type: "Afbraakwerken",
    service: "Sloopwerken",
    images: [
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto1.jpg",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto2.jpg",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto3.jpg",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto4.jpg",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto5.jpg",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto6.jpg",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto7.jpg",
    ],
  },
  "afbraak-woningen": {
    title: "Afbraak Woningen",
    description:
      "Afbraak van bestaande woningen voor bouw van nieuwe tandartspraktijk in lichtervelde.",
    location: "Lichtervelde",
    year: "2026",
    service: "Sloopwerken",
    images: [
      "/realisaties/afbraak-woningen/foto1.jpg",
      "/realisaties/afbraak-woningen/foto2.jpg",
      "/realisaties/afbraak-woningen/foto3.jpg",
      "/realisaties/afbraak-woningen/foto4.jpg",
      "/realisaties/afbraak-woningen/foto5.jpg",
    ],
  },
  "keerwanden-plaatsen": {
    title: "Plaatsen van Keerwanden",
    description:
      "Plaatsen van keerwanden en opvoeren van grond in tuin bij nieuwbouwproject in Kortemark.",
    location: "Kortemark",
    year: "2026",
    type: "Grondwerken",
    service: "Terreininrichting",
    images: [
      "/realisaties/keerwanden-plaatsen/foto1.jpg",
      "/realisaties/keerwanden-plaatsen/foto2.jpg",
      "/realisaties/keerwanden-plaatsen/foto3.jpg",
      "/realisaties/keerwanden-plaatsen/foto4.jpg",
      "/realisaties/keerwanden-plaatsen/foto5.jpg",
      "/realisaties/keerwanden-plaatsen/foto6.jpg",
      "/realisaties/keerwanden-plaatsen/foto7.jpg",
      "/realisaties/keerwanden-plaatsen/foto8.jpg",
      "/realisaties/keerwanden-plaatsen/foto9.jpg",
      "/realisaties/keerwanden-plaatsen/foto10.jpg",
      "/realisaties/keerwanden-plaatsen/foto11.jpg",
    ],
  },
  "plaatsen-zwembad": {
    title: "Uitgraven & Plaatsen Zwembad",
    description:
      "Uitgraven, verharden, plaatsen zwembad en afwerken met stabilsé voor een klant in Zedelgem.",
    location: "Zedelgem",
    year: "2026",
    type: "Grondwerken",
    service: "Uitgravingen",
    images: [
      "/realisaties/plaatsen-zwembad/foto1.jpg",
      "/realisaties/plaatsen-zwembad/foto2.jpg",
      "/realisaties/plaatsen-zwembad/foto3.jpg",
      "/realisaties/plaatsen-zwembad/foto4.jpg",
      "/realisaties/plaatsen-zwembad/foto5.jpg",
      "/realisaties/plaatsen-zwembad/foto6.jpg",
    ],
  },
  "uitbreken-oprit-en-terras-plaatsen-riolering": {
    title: "Oprit, Terras & Riolering",
    description:
      "Uitbraak van oprit en terras, gevolgd door de plaatsing van nieuwe riolering volgens de normen te lichtervelde.",
    location: "Lichtervelde",
    year: "2026",
    type: "Grondwerken",
    service: "Riolering & Verharding",
    images: [
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto1.jpg",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto2.jpg",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto3.jpg",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto4.jpg",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto5.jpg",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto6.jpg",
    ],
  },
  "totaalinrichting-bedrijfsterrein": {
    title: "Totaalinrichting bedrijfsterrein",
    description:
      "Verwijderen van bomen en struiken, het plaatsen van keerwanden en borduren, de aanleg van riolering en electriciteitsvoorziening voor laadpalen, ophogen van grond, asfalteringswerken en het opvoeren en afwerken van bestaande vijver in Lichtervelde.",
    location: "Lichtervelde",
    year: "2026",
    type: "Grondwerken",
    service: "Groenverzet",
    images: [
      "/realisaties/totaalinrichting-bedrijfsterrein/foto1.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto2.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto3.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto4.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto5.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto6.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto7.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto8.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto9.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto10.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto11.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto12.jpg",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto13.jpg",
    ],
  },
  "voorbereiding-tuin": {
    title: "Voorbereiding Tuin",
    description:
      "Opkuis en nivellering van tuinen met aanleg van heuveltjes in opdracht van OptimaT bij psychiatrisch centrum Beernem.",
    location: "Beernem",
    year: "2026",
    type: "Grondwerken",
    service: "Nivelleren",
    images: [
      "/realisaties/voorbereiding-tuin/foto1.jpg",
      "/realisaties/voorbereiding-tuin/foto2.jpg",
      "/realisaties/voorbereiding-tuin/foto3.jpg",
      "/realisaties/voorbereiding-tuin/foto4.jpg",
      "/realisaties/voorbereiding-tuin/foto5.jpg",
    ],
  },
};

const RealisatieDetail = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const project = projectData[id as keyof typeof projectData];

  // Scroll naar boven bij laden
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <Layout>
        <div className="py-40 text-center">Project niet gevonden.</div>
      </Layout>
    );

  const nextImg = () =>
    setSelectedImg((prev) =>
      prev !== null && prev < project.images.length - 1 ? prev + 1 : 0,
    );
  const prevImg = () =>
    setSelectedImg((prev) =>
      prev !== null && prev > 0 ? prev - 1 : project.images.length - 1,
    );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <img
          src={project.images[0]}
          className="absolute inset-0 w-full h-full object-cover"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link
            to="/realisaties"
            className="inline-flex items-center text-white/80 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Terug naar overzicht
          </Link>
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase tracking-wider">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Tekst */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl text-primary uppercase mb-6">
                Projectomschrijving
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <Button variant="hero" asChild>
                <a
                  href={`mailto:info@devoogt-declercq.be?subject=Vraag over ${project.title}`}
                >
                  <Mail className="mr-2 h-5 w-5" /> Gelijkaardig project
                  aanvragen
                </a>
              </Button>
            </div>

            {/* Sidebar Details */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border p-8 sticky top-24">
                <h3 className="font-display text-xl uppercase mb-6 border-b border-border pb-4">
                  Details
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary" />{" "}
                    <strong>Locatie:</strong> {project.location}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />{" "}
                    <strong>Jaar:</strong> {project.year}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <Tag className="h-5 w-5 text-primary" />{" "}
                    <strong>Categorie:</strong> {project.type}
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <HardHat className="h-5 w-5 text-primary" />{" "}
                    <strong>Dienst:</strong> {project.service}
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
          <h2 className="font-display text-2xl text-primary uppercase mb-10 text-center">
            Foto's van het project
          </h2>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            >
              <X className="h-10 w-10" />
            </button>
            <button
              onClick={prevImg}
              className="absolute left-4 text-white hover:text-primary"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>
            <img
              src={project.images[selectedImg]}
              className="max-h-[85vh] max-w-full object-contain"
              alt="Full size"
            />
            <button
              onClick={nextImg}
              className="absolute right-4 text-white hover:text-primary"
            >
              <ChevronRight className="h-12 w-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default RealisatieDetail;
