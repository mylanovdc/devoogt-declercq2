import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Bericht verzonden!",
      description: "Wij nemen zo snel mogelijk contact met u op.",
    });

    setIsSubmitting(false);
    setFileName(null);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="industrial-divider mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary uppercase tracking-wider mb-4">
              Contact
            </h1>
            <p className="text-xl text-muted-foreground">
              Neem contact op voor een vrijblijvende offerte of meer informatie.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl text-primary uppercase tracking-wider mb-8">
                Direct Contact
              </h2>

              <div className="space-y-6 mb-12">
                <a
                  href="tel:0476926625"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="block text-muted-foreground text-sm">Telefoon</span>
                    <span className="text-lg text-card-foreground font-semibold">0476 / 92 66 25</span>
                  </div>
                </a>

                <a
                  href="mailto:info@devoogt-declercq.be"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="block text-muted-foreground text-sm">E-mail</span>
                    <span className="text-lg text-card-foreground font-semibold">info@devoogt-declercq.be</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-muted-foreground text-sm">Adres</span>
                    <span className="text-lg text-card-foreground font-semibold">
                      Mortelputstraat 23<br />
                      8810 Lichtervelde
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-muted-foreground text-sm">Bereikbaarheid</span>
                    <span className="text-lg text-card-foreground font-semibold">Ma - Vr: 7:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card border border-border rounded-sm h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Mortelputstraat 23, 8810 Lichtervelde
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl text-primary uppercase tracking-wider mb-8">
                Offerteformulier
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Uw naam"
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground">Telefoonnummer *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Uw telefoonnummer"
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="uw.email@voorbeeld.be"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-card-foreground">Uw Adres</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Straat en huisnummer, postcode, gemeente"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workAddress" className="text-card-foreground">Adres van de werkzaamheden</Label>
                  <Input
                    id="workAddress"
                    name="workAddress"
                    placeholder="Indien verschillend van uw adres"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-card-foreground">Gewenste uitvoerdatum</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">Beschrijving van uw project *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Beschrijf uw project of vraag hier..."
                    rows={5}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-card-foreground">Foto uploaden (optioneel)</Label>
                  <div className="relative">
                    <input
                      type="file"
                      id="photo"
                      name="photo"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="bg-card border border-dashed border-border rounded-sm p-6 text-center hover:border-primary transition-colors">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      {fileName ? (
                        <p className="text-card-foreground">{fileName}</p>
                      ) : (
                        <p className="text-muted-foreground">
                          Klik om een foto te uploaden voor een snelle inschatting
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Verzenden..."
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Verstuur Aanvraag
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;