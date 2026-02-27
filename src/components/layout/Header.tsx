import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logodevoogt-declercq.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { 
    label: "Services", 
    submenu: [
      { href: "/containerverhuur", label: "Containerverhuur" },
      { href: "/grondwerken", label: "Grond- en Afbraakwerken" },
    ]
  },
  { href: "/realisaties", label: "Realisaties" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1">
            <img 
              src={logo} 
              alt="Containerdienst Devoogt-Declercq B.V." 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.submenu ? (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 font-display text-sm uppercase tracking-wider transition-colors hover:text-primary text-card-foreground">
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 pt-4 transition-all duration-200 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    <div className="bg-card border border-border shadow-xl py-2 min-w-[220px] rounded-sm">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className={`block px-6 py-3 font-display text-sm uppercase tracking-wider hover:bg-primary/10 hover:text-primary transition-colors ${
                            location.pathname === sub.href ? "text-primary" : "text-card-foreground"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-display text-sm uppercase tracking-wider transition-colors hover:text-primary ${
                    location.pathname === link.href ? "text-primary" : "text-card-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:0476926625" className="flex items-center gap-2 text-card-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-semibold text-sm">0476 / 92 66 25</span>
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
        <div className="lg:hidden bg-background border-t border-border overflow-y-auto max-h-[calc(100vh-80px)]">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.label} className="flex flex-col">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between font-display text-lg uppercase tracking-wider py-3 text-card-foreground"
                  >
                    {link.label} <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="flex flex-col pl-4 border-l-2 border-primary/20 mb-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="font-display text-base uppercase tracking-wider py-3 text-muted-foreground hover:text-primary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-display text-lg uppercase tracking-wider py-3 transition-colors ${
                    location.pathname === link.href ? "text-primary" : "text-card-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-6 mt-4 border-t border-border">
              <a href="tel:0476926625" className="flex items-center gap-3 text-card-foreground mb-6">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
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