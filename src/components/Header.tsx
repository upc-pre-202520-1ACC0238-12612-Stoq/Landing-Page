import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

export function Header() {
  const { language, setLanguage } = useLanguage();

  // Alternar idioma
  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es");

  return (
    <header className="bg-[#FFF6ED] backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="StockWise Logo"
              className="w-15 h-12 object-contain" 
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-[#302325] hover:text-[#EE7F27] transition-colors">
              {language === "es" ? "Inicio" : "Home"}
            </a>
            <a href="#features" className="text-[#302325] hover:text-[#EE7F27] transition-colors">
              {language === "es" ? "Características" : "Features"}
            </a>
            <a href="#pricing" className="text-[#302325] hover:text-[#EE7F27] transition-colors">
              {language === "es" ? "Precios" : "Pricing"}
            </a>
            <a href="#about" className="text-[#302325] hover:text-[#EE7F27] transition-colors">
              {language === "es" ? "Testimonios" : "Testimonials"}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              {language === "es" ? "Iniciar Sesión" : "Sign In"}
            </Button>
            <Button className="bg-[#EE7F27] hover:bg-[#8C162A] text-white">
              {language === "es" ? "Prueba Gratis" : "Free Trial"}
            </Button>
            <button
              onClick={toggleLanguage}
              className="flex items-center ml-2 bg-transparent text-[#302325] hover:text-[#EE7F27] transition focus:outline-none"
              aria-label="Cambiar idioma"
            >
              <Globe className="w-5 h-5 mr-1 text-[#EE7F27]" />
              <span className="font-semibold">{language === "es" ? "ES" : "EN"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}