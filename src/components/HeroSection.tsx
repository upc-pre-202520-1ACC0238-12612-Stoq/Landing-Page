import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative bg-[#FFE0B5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-[#302325] leading-tight">
                {language === "es" ? (
                  <>
                    Controla tu
                    <span className="block text-[#EE7F27]">inventario</span>
                    inteligentemente
                  </>
                ) : (
                  <>
                    Control your
                    <span className="block text-[#EE7F27]">inventory</span>
                    smartly
                  </>
                )}
              </h1>
              <p className="text-xl text-[#302325] leading-relaxed">
                {language === "es"
                  ? "Automatiza análisis, optimiza tus procesos y toma decisiones inteligentes con StockWise. La plataforma de gestión de inventario que tu negocio necesita."
                  : "Automate analytics, optimize your processes, and make smart decisions with StockWise. The inventory management platform your business needs."}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#EE7F27] hover:bg-[#8C162A] text-white text-lg px-8 py-6"
              >
                {language === "es" ? "Comenzar Gratis" : "Start Free"}
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnZlbnRvcnklMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU5NDMwMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === "es" ? "Dashboard de inventario inteligente" : "Smart inventory dashboard"}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-[#EE7F27]/20 rounded-2xl transform rotate-3"></div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#EE7F27] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-4 w-64 h-64 bg-[#D9D593] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}