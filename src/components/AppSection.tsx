import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Smartphone, Zap, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function AppSection() {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: language === "es" ? "Control de inventario seguro" : "Secure inventory control"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: language === "es" ? "Reportes en tiempo real" : "Real-time reports"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: language === "es" ? "Gestión inteligente automatizada" : "Automated smart management"
    }
  ];

  return (
    <section className="py-20 bg-[#302325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {language === "es" ? "Prueba nuestra App" : "Try our App"}
              </h2>
              <p className="text-xl text-white leading-relaxed">
                {language === "es"
                  ? "La aplicación perfecta para gestionar tu inventario de manera inteligente y eficiente. Disponible para iOS y Android."
                  : "The perfect app to manage your inventory intelligently and efficiently. Available for iOS and Android."}
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#EE7F27] rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <span className="text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="text-white mb-8">
              <p className="text-lg">
                {language === "es"
                  ? "Únete a miles de usuarios que ya confían en StockWise para su gestión de inventario."
                  : "Join thousands of users who already trust StockWise for their inventory management."}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-black hover:bg-[#8C162A] text-white border border-gray-700 flex items-center justify-center space-x-3 px-8 py-6"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">
                    {language === "es" ? "Descargar en" : "Download on"}
                  </div>
                  <div className="text-lg font-medium">
                    {language === "es" ? "App Store" : "App Store"}
                  </div>
                </div>
              </Button>
              
              <Button 
                size="lg"
                className="bg-[#EE7F27] hover:bg-[#8C162A] text-white flex items-center justify-center space-x-3 px-8 py-6"
              >
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">
                    {language === "es" ? "Obtener en" : "Get it on"}
                  </div>
                  <div className="text-lg font-medium">
                    {language === "es" ? "Google Play" : "Google Play"}
                  </div>
                </div>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc1OTQzMDM4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt={
                  language === "es"
                    ? "Gestión de inventario móvil"
                    : "Mobile inventory management"
                }
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-[#EE7F27]/20 rounded-2xl transform -rotate-3"></div>
            <div className="absolute top-4 right-4 w-72 h-72 bg-[#EE7F27] rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}