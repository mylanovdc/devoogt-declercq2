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
    heroImage: "/realisaties/aanleg-speelplaats/foto7.webp",
    images: [
      "/realisaties/aanleg-speelplaats/foto1.webp",
      "/realisaties/aanleg-speelplaats/foto2.webp",
      "/realisaties/aanleg-speelplaats/foto3.webp",
      "/realisaties/aanleg-speelplaats/foto4.webp",
      "/realisaties/aanleg-speelplaats/foto5.webp",
      "/realisaties/aanleg-speelplaats/foto6.webp",
      "/realisaties/aanleg-speelplaats/foto7.webp",
    ],
  },
  "afbraak-bouw-hangaar": {
    title: "Afbraak Bouw Hangaar",
    description:
      "Afbraak en opkuis van woning, opvoeren van grond en bouwrijp maken van terrein te Torhout.",
    location: "Torhout",
    heroImage: "/realisaties/afbraak-bouw-hangaar/foto9.webp",
    images: [
      "/realisaties/afbraak-bouw-hangaar/foto1.webp",
      "/realisaties/afbraak-bouw-hangaar/foto2.webp",
      "/realisaties/afbraak-bouw-hangaar/foto3.webp",
      "/realisaties/afbraak-bouw-hangaar/foto4.webp",
      "/realisaties/afbraak-bouw-hangaar/foto5.webp",
      "/realisaties/afbraak-bouw-hangaar/foto6.webp",
      "/realisaties/afbraak-bouw-hangaar/foto7.webp",
      "/realisaties/afbraak-bouw-hangaar/foto8.webp",
      "/realisaties/afbraak-bouw-hangaar/foto9.webp",
      "/realisaties/afbraak-bouw-hangaar/foto10.webp",
      "/realisaties/afbraak-bouw-hangaar/foto11.webp",
    ],
  },
  "afbraak-tussenbouw-en-bijgebouwen": {
    title: "Afbraak Bijgebouwen",
    description:
      "Afbraak van tussen- en bijgebouwen, uitgraven voor septische put en uitbraak van de vloer binnen in de woning voor renovatieproject te Lichtervelde",
    location: "Lichtervelde",
    heroImage: "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto1.webp",
    images: [
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto1.webp",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto2.webp",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto3.webp",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto4.webp",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto5.webp",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto6.webp",
      "/realisaties/afbraak-tussenbouw-en-bijgebouwen/foto7.webp",
    ],
  },
  "afbraak-woningen": {
    title: "Afbraak Woningen",
    description:
      "Afbraak van bestaande woningen voor bouw van nieuwe tandartspraktijk in lichtervelde.",
    location: "Lichtervelde",
    heroImage: "/realisaties/afbraak-woningen/foto1.webp",
    images: [
      "/realisaties/afbraak-woningen/foto1.webp",
      "/realisaties/afbraak-woningen/foto2.webp",
      "/realisaties/afbraak-woningen/foto3.webp",
      "/realisaties/afbraak-woningen/foto4.webp",
      "/realisaties/afbraak-woningen/foto5.webp",
    ],
  },
  "keerwanden-plaatsen": {
    title: "Plaatsen van Keerwanden",
    description:
      "Plaatsen van keerwanden en opvoeren van grond in tuin bij nieuwbouwproject in Kortemark.",
    location: "Kortemark",
    heroImage: "/realisaties/keerwanden-plaatsen/foto10.webp",
    images: [
      "/realisaties/keerwanden-plaatsen/foto1.webp",
      "/realisaties/keerwanden-plaatsen/foto2.webp",
      "/realisaties/keerwanden-plaatsen/foto3.webp",
      "/realisaties/keerwanden-plaatsen/foto4.webp",
      "/realisaties/keerwanden-plaatsen/foto5.webp",
      "/realisaties/keerwanden-plaatsen/foto6.webp",
      "/realisaties/keerwanden-plaatsen/foto7.webp",
      "/realisaties/keerwanden-plaatsen/foto8.webp",
      "/realisaties/keerwanden-plaatsen/foto9.webp",
      "/realisaties/keerwanden-plaatsen/foto10.webp",
      "/realisaties/keerwanden-plaatsen/foto11.webp",
    ],
  },
  "plaatsen-zwembad": {
    title: "Uitgraven & Plaatsen Zwembad",
    description:
      "Uitgraven, verharden, plaatsen zwembad en afwerken met stabilsé voor een klant in Zedelgem.",
    location: "Zedelgem",
    heroImage: "/realisaties/plaatsen-zwembad/foto6.webp",
    images: [
      "/realisaties/plaatsen-zwembad/foto1.webp",
      "/realisaties/plaatsen-zwembad/foto2.webp",
      "/realisaties/plaatsen-zwembad/foto3.webp",
      "/realisaties/plaatsen-zwembad/foto4.webp",
      "/realisaties/plaatsen-zwembad/foto5.webp",
      "/realisaties/plaatsen-zwembad/foto6.webp",
    ],
  },
  "uitbreken-oprit-en-terras-plaatsen-riolering": {
    title: "Oprit, Terras & Riolering",
    description:
      "Uitbraak van oprit en terras, gevolgd door de plaatsing van nieuwe riolering volgens de normen te lichtervelde.",
    location: "Lichtervelde",
    heroImage:
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto4.webp",
    images: [
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto1.webp",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto2.webp",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto3.webp",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto4.webp",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto5.webp",
      "/realisaties/uitbreken-oprit-en-terras-plaatsen-riolering/foto6.webp",
    ],
  },
  "totaalinrichting-bedrijfsterrein": {
    title: "Totaalinrichting bedrijfsterrein",
    description:
      "Verwijderen van bomen en struiken, het plaatsen van keerwanden en borduren, de aanleg van riolering en electriciteitsvoorziening voor laadpalen, ophogen van grond, asfalteringswerken en het opvoeren en afwerken van bestaande vijver in Lichtervelde.",
    location: "Lichtervelde",
    heroImage: "/realisaties/totaalinrichting-bedrijfsterrein/foto12.webp",
    images: [
      "/realisaties/totaalinrichting-bedrijfsterrein/foto1.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto2.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto3.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto4.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto5.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto6.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto7.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto8.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto9.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto10.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto11.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto12.webp",
      "/realisaties/totaalinrichting-bedrijfsterrein/foto13.webp",
    ],
  },
  "voorbereiding-tuin": {
    title: "Voorbereiding Tuin",
    description:
      "Opkuis en nivellering van tuinen met aanleg van heuveltjes in opdracht van OptimaT bij psychiatrisch centrum Beernem.",
    location: "Beernem",
    heroImage: "/realisaties/voorbereiding-tuin/foto1.webp",
    images: [
      "/realisaties/voorbereiding-tuin/foto1.webp",
      "/realisaties/voorbereiding-tuin/foto2.webp",
      "/realisaties/voorbereiding-tuin/foto3.webp",
      "/realisaties/voorbereiding-tuin/foto4.webp",
      "/realisaties/voorbereiding-tuin/foto5.webp",
    ],
  },
};

const RealisatieDetail = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState<number | null>(null);
  const project = projectData[id as keyof typeof projectData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <Layout>
        <div className="py-40 text-center font-display uppercase tracking-widest text-muted-foreground">
          Project niet gevonden.
        </div>
      </Layout>
    );

  const nextImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImg((prev) =>
      prev !== null && prev < project.images.length - 1 ? prev + 1 : 0,
    );
  };

  const prevImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImg((prev) =>
      prev !== null && prev > 0 ? prev - 1 : project.images.length - 1,
    );
  };

  return (
    <Layout>
      {/* Hero Section - Aangepaste hoogte voor mobiel */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={project.heroImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 pb-8 md:pb-12">
          <Link
            to="/realisaties"
            className="inline-flex items-center text-white/80 hover:text-primary mb-4 md:mb-6 transition-colors text-sm md:text-base group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-1 transition-transform" />
            Terug naar overzicht
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-white uppercase tracking-wider leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Tekst - Komt eerst op mobiel */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <h2 className="font-display text-xl md:text-2xl text-primary uppercase mb-4 md:mb-6">
                Projectomschrijving
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {project.description}
              </p>
              <Button variant="hero" asChild className="w-full sm:w-auto">
                <Link to="/contact">Gelijkaardig project aanvragen</Link>
              </Button>
            </div>

            {/* Sidebar Details - Sticky gedrag alleen op desktop */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-card border border-border p-6 md:p-8 lg:sticky lg:top-24 shadow-xl">
                <h3 className="font-display text-lg md:text-xl uppercase mb-4 md:mb-6 border-b border-border pb-4 tracking-wider text-primary">
                  Project Details
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-3 bg-primary/10 rounded-sm">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-primary/60">
                      Locatie
                    </p>
                    <p className="text-card-foreground font-medium text-base md:text-lg">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Meer kolommen op mobiel (grid-cols-2) */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl text-center uppercase mb-8 md:mb-12 tracking-widest">
            Fotogalerij
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                whileTap={{ scale: 0.98 }}
                className="aspect-square cursor-pointer overflow-hidden border border-border bg-background group"
                onClick={() => setSelectedImg(index)}
              >
                <img
                  src={img}
                  alt={`Project foto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay - Geoptimaliseerd voor Touch */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 md:p-4 touch-none"
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button - Groter op mobiel voor 'fat fingers' */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-[110] text-white/70 hover:text-primary p-2 transition-colors"
            >
              <X className="h-8 w-8 md:h-10 md:w-10" />
            </button>

            {/* Navigation - Verborgen op hele kleine schermen, gebruik swipe (of tik) */}
            <button
              onClick={prevImg}
              className="hidden md:flex absolute left-4 z-[110] text-white/50 hover:text-primary p-4"
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <motion.img
              key={selectedImg}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={project.images[selectedImg]}
              className="max-h-[80vh] md:max-h-[85vh] max-w-full object-contain pointer-events-none"
              alt="Full size view"
            />

            <button
              onClick={nextImg}
              className="hidden md:flex absolute right-4 z-[110] text-white/50 hover:text-primary p-4"
            >
              <ChevronRight className="h-12 w-12" />
            </button>

            {/* Indicatie voor mobiel */}
            <div className="absolute bottom-8 text-white/40 text-sm font-medium md:hidden">
              Tik om te sluiten
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default RealisatieDetail;
