
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Historia from "./pages/Historia";
import Venues from "./pages/Venues";
import Alumni from "./pages/Alumni";
import Admissions from "./pages/Admissions";
import InstitutionalDays from "./pages/InstitutionalDays";
import PublicAccountant from "./pages/PublicAccountant";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/sedes" element={<Venues />} />
          <Route path="/graduados" element={<Alumni />} />
          <Route path="/admisiones" element={<Admissions />} />
          <Route path="/jornadas" element={<InstitutionalDays />} />
          <Route path="/carreras" element={<Careers />} />
          <Route path="/carreras/contador-publico" element={<PublicAccountant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
