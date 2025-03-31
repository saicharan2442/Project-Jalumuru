import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      {/* ✅ Use HashRouter instead of BrowserRouter */}
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donors" element={<DonorsPage />} />
          <Route path="/temples" element={<TemplesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/trust-licence" element={<TrustLicencePage />} />
          <Route path="/developer" element={<DeveloperPage />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
