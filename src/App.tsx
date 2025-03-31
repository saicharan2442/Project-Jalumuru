
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DonorsPage from "./pages/DonorsPage";
import TemplesPage from "./pages/TemplesPage";
import EventsPage from "./pages/EventsPage";
import EbooksPage from "./pages/EbooksPage";
import TrustLicencePage from "./pages/TrustLicencePage";
import DeveloperPage from "./pages/DeveloperPage";
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
          <Route path="/donors" element={<DonorsPage />} />
          <Route path="/temples" element={<TemplesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/trust-licence" element={<TrustLicencePage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
