import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="font-display text-2xl font-bold text-primary tracking-wider">
                DEVOOGT-DECLERCQ
              </span>
              <span className="text-sm text-muted-foreground tracking-widest uppercase">
                Containerdienst & Grondwerken
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Met ons eigen machinepark hebben we alles in eigen beheer voor de realisatie van uw projecten, groot of klein.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>OVAM 3824/1</span>
              <span>Registratie 052810</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-primary uppercase tracking-wider mb-4">
              Navigatie
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-card-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/containerverhuur" className="text-card-foreground hover:text-primary transition-colors">
                Containerverhuur
              </Link>
              <Link to="/grondwerken" className="text-card-foreground hover:text-primary transition-colors">
                Grond- & Afbraakwerken
              </Link>
              <Link to="/over-ons" className="text-card-foreground hover:text-primary transition-colors">
                Over Ons
              </Link>
              <Link to="/contact" className="text-card-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-primary uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a 
                href="tel:0476926625" 
                className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span>0476 / 92 66 25</span>
              </a>
              <a 
                href="mailto:info@devoogt-declercq.be" 
                className="flex items-center gap-3 text-card-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span>info@devoogt-declercq.be</span>
              </a>
              <div className="flex items-start gap-3 text-card-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Mortelputstraat 23<br />8810 Lichtervelde</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Devoogt-Declercq. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
