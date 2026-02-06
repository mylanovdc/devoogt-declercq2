import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, StaggerItem } from "@/components/animations";
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Contact
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Neem contact op voor een vrijblijvende offerte of meer informatie.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <FadeInView>
                <h2 className="font-display text-3xl text-primary uppercase tracking-wider mb-8">
                  Direct Contact
                </h2>
              </FadeInView>

              <StaggerContainer className="space-y-6 mb-12" staggerDelay={0.1}>
                <StaggerItem>
                  <motion.a
                    href="tel:0476926625"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm hover:border-primary transition-colors group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-sm">Telefoon</span>
                      <span className="text-lg text-card-foreground font-semibold">
                        0476 / 92 66 25
                      </span>
                    </div>
                  </motion.a>
                </StaggerItem>

                <StaggerItem>
                  <motion.a
                    href="mailto:info@devoogt-declercq.be"
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm hover:border-primary transition-colors group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-sm">E-mail</span>
                      <span className="text-lg text-card-foreground font-semibold">
                        info@devoogt-declercq.be
                      </span>
                    </div>
                  </motion.a>
                </StaggerItem>

                {/* Google Maps Integratie */}
                <FadeInView delay={0.3}>
                  <div className="bg-card border border-border rounded-sm h-80 overflow-hidden relative group">
                    {/* Overlay voor een industriële look wanneer niet in gebruik */}
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.234516812845!2d3.147146577134444!3d51.02094254605934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c348f9a2e6e1e7%3A0x6a0f160606f7b3a!2sMortelputstraat%2023%2C%208810%20Lichtervelde!5e0!3m2!1snl!2sbe!4v1705869400000!5m2!1snl!2sbe"
                      width="100%"
                      height="100%"
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Locatie Devoogt-Declercq"
                      className="relative z-0"
                    />

                    {/* Adres Badge */}
                    <div className="absolute bottom-4 left-4 z-20 bg-background/90 backdrop-blur-sm p-3 border border-primary/20 rounded-sm shadow-xl">
                      <p className="text-sm font-semibold text-card-foreground">
                        Mortelputstraat 23, Lichtervelde
                      </p>
                    </div>
                  </div>
                </FadeInView>

                <StaggerItem>
                  <motion.div
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="block text-muted-foreground text-sm">Bereikbaarheid</span>
                      <span className="text-lg text-card-foreground font-semibold">
                        Ma - Vr: 7:00 - 19:00
                      </span>
                    </div>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Contact Form */}
            <FadeInView direction="right" delay={0.2}>
              <h2 className="font-display text-3xl text-primary uppercase tracking-wider mb-8">
                Offerteformulier
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground">
                      Naam *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Uw naam"
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground">
                      Telefoonnummer *
                    </Label>
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
                  <Label htmlFor="email" className="text-card-foreground">
                    E-mail *
                  </Label>
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
                  <Label htmlFor="address" className="text-card-foreground">
                    Uw Adres
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Straat en huisnummer, postcode, gemeente"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workAddress" className="text-card-foreground">
                    Adres van de werkzaamheden
                  </Label>
                  <Input
                    id="workAddress"
                    name="workAddress"
                    placeholder="Indien verschillend van uw adres"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-card-foreground">
                    Gewenste uitvoerdatum
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Beschrijving van uw project *
                  </Label>
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
                    <motion.div
                      className="bg-card border border-dashed border-border rounded-sm p-6 text-center hover:border-primary transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      {fileName ?
                        <p className="text-card-foreground">{fileName}</p>
                      : <p className="text-muted-foreground">
                          Klik om een foto te uploaden voor een snelle inschatting
                        </p>
                      }
                    </motion.div>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ?
                      "Verzenden..."
                    : <>
                        <Send className="h-5 w-5" />
                        Verstuur Aanvraag
                      </>
                    }
                  </Button>
                </motion.div>
              </form>
            </FadeInView>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
