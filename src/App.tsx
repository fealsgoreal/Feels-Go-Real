import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Index from "./pages/Index";
import ZonePage from "./pages/ZonePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const queryClient = new QueryClient();

function ModalRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  // detect if this navigation came from a background page
  const state = location.state as { backgroundLocation?: Location };
  const backgroundLocation = state?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Index />} />
        <Route path="/zone/:zoneId" element={<ZonePage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Modal About Page */}
      {backgroundLocation && location.pathname === "/about" && (
        <Dialog open onOpenChange={() => navigate(-1)}>
          <DialogContent className="max-w-3xl p-0 overflow-y-auto max-h-[90vh] backdrop-blur-md bg-background/80 border border-border/50 relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground z-10"
              onClick={() => navigate(-1)}
            >
              <X className="w-5 h-5" />
            </Button>
            <About />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ModalRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
