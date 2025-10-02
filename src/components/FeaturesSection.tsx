import { BarChart3, RefreshCw, Zap } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

export function FeaturesSection() {
    const { language } = useLanguage();

  const features = [
    {
      icon: <RefreshCw className="w-8 h-8 text-[#EE7F27]" />,
      title: {
        es: "Gestión en tiempo real",
        en: "Real-time management"
      },
      description: {
        es: "Controla tu inventario en tiempo real y mantén un mejor seguimiento de tu stock.",
        en: "Control your inventory in real time and keep better track of your stock."
      }
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#EE7F27]" />,
      title: {
        es: "Reportes inteligentes",
        en: "Smart reports"
      },
      description: {
        es: "Visualiza los datos que son importantes para tu negocio con reportes automatizados.",
        en: "View the data that matters to your business with automated reports."
      }
    },
    {
      icon: <Zap className="w-8 h-8 text-[#EE7F27]" />,
      title: {
        es: "Integración con sistemas",
        en: "System integration"
      },
      description: {
        es: "Conéctate fácilmente con tus herramientas actuales y sistemas existentes.",
        en: "Easily connect with your current tools and existing systems."
      }
    }
  ];

  const sectionTitle = {
    es: "Potencia tu negocio con StockWise",
    en: "Boost your business with StockWise"
  };

  const sectionSubtitle = {
    es: "Descubre cómo nuestras características avanzadas pueden transformar la gestión de tu inventario",
    en: "Discover how our advanced features can transform your inventory management"
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#302325] mb-4">
            {sectionTitle[language]}
          </h2>
          <p className="text-xl text-[#302325] max-w-3xl mx-auto">
            {sectionSubtitle[language]}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-[#FFE0B5] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#D9D593] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#302325] mb-4">
                {feature.title[language]}
              </h3>
              <p className="text-[#302325] leading-relaxed">
                {feature.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}