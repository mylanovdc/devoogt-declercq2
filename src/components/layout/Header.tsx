import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logodevoogt-declercq.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/containerverhuur", label: "Containerverhuur" },
  { href: "/grondwerken", label: "Grond- & Afbraakwerken" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<Link to="/" className="flex items-center group py-1">
  <img 
    src={logo} // <-- Gebruik hier de variabele 'logo' zonder aanhalingstekens
    alt="Containerdienst Devoogt-Declercq B.V." 
    className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-display text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-card-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:0476926625" className="flex items-center gap-2 text-card-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">0476 / 92 66 25</span>
            </a>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">Offerte</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-card-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-display text-lg uppercase tracking-wider transition-colors hover:text-primary py-2 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-card-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <a href="tel:0476926625" className="flex items-center gap-2 text-card-foreground hover:text-primary transition-colors mb-4">
                <Phone className="h-5 w-5" />
                <span className="font-semibold text-lg">0476 / 92 66 25</span>
              </a>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Vraag Offerte</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
