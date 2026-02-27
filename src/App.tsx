import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Containerverhuur from "./pages/Containerverhuur";
import Grondwerken from "./pages/Grondwerken";
import Realisaties from "./pages/Realisaties";
import RealisatieDetail from "./pages/RealisatieDetail"; // <-- 1. Vergeet de import niet
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/containerverhuur" element={<Containerverhuur />} />
          <Route path="/grondwerken" element={<Grondwerken />} />
          <Route path="/realisaties" element={<Realisaties />} />
          
          {/* 2. Zet de detailpagina BOVEN de NotFound route */}
          <Route path="/realisaties/:id" element={<RealisatieDetail />} />
          
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 3. De wildcard (*) MOET altijd als laatste staan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;