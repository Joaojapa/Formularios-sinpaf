import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { FileText, Home as HomeIcon } from "lucide-react";
import Home from "./pages/Home";
import FormAP from "./pages/FormAP";
import FormAS from "./pages/FormAS";
import FormAV from "./pages/FormAV";
import FormAR from "./pages/FormAR";
import NotFound from "./pages/NotFound";
import sinpafLogo from "./imagem sinpaf/sinpaff.png";


const queryClient = new QueryClient();

function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Início", icon: HomeIcon },
    { path: "/ap", label: "AP", icon: FileText },
    { path: "/as", label: "AS", icon: FileText },
    { path: "/av", label: "AV", icon: FileText },
    { path: "/ar", label: "AR", icon: FileText },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link
  to="/"
  className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity"
>
  <img
    src={sinpafLogo}
    alt="SINPAF Logo"
    className="h-8 w-auto"
  />
  SINPAF
</Link>

          
          
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-primary-foreground text-primary"
                      : "hover:bg-primary-foreground/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ap" element={<FormAP />} />
          <Route path="/as" element={<FormAS />} />
          <Route path="/av" element={<FormAV />} />
          <Route path="/ar" element={<FormAR />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
