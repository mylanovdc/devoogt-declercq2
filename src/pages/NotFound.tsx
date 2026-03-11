import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    // Achtergrond nu 'bg-background' (zwart/donkergrijs in jouw thema)
    <div className="flex min-h-screen items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Subtiel industrieel grid effect op de achtergrond */}
      <div className="absolute inset-0 opacity-10 pointer-events-none industrial-grid" />

      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* De '404' in het felle Devoogt-geel (text-primary) */}
        <h1 className="mb-4 text-8 font-display font-black text-primary uppercase tracking-tighter leading-none">
          404
        </h1>

        <div className="industrial-divider mx-auto mb-6 w-16" />

        <p className="mb-8 text-xl md:text-2xl text-muted-foreground uppercase tracking-widest font-display">
          Oeps! Deze werf is niet gevonden.
        </p>

        {/* Gebruik de bestaande Button component voor consistentie */}
        <Button variant="hero" size="xl" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-5 w-5" /> Terug naar start
          </Link>
        </Button>

        {/* Industrial Accent Decor (zoals op je kaarten) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 pointer-events-none -z-10 rotate-12" />
      </motion.div>
    </div>
  );
};

export default NotFound;
