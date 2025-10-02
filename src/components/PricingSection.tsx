import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function PricingSection() {
  const { language } = useLanguage();

  const plans = [
    {
      name: language === "es" ? "Plan Gratuito" : "Free Plan",
      price: "0",
      period: language === "es" ? "/mes" : "/month",
      description: language === "es" ? "Perfecto para comenzar" : "Perfect to start",
      features: language === "es"
        ? [
            "Hasta 50 productos",
            "1 usuario",
            "Reportes básicos",
            "Soporte por email",
            "Actualizaciones gratuitas"
          ]
        : [
            "Up to 50 products",
            "1 user",
            "Basic reports",
            "Email support",
            "Free updates"
          ],
      buttonText: language === "es" ? "Comenzar Gratis" : "Start Free",
      popular: false
    },
    {
      name: language === "es" ? "Plan Emprendedor" : "Entrepreneur Plan",
      price: "30",
      period: language === "es" ? "/mes" : "/month",
      description: language === "es" ? "Para pequeñas empresas" : "For small businesses",
      features: language === "es"
        ? [
            "Hasta 500 productos",
            "5 usuarios",
            "Reportes avanzados",
            "Soporte prioritario",
            "Integraciones básicas",
            "Backup automático"
          ]
        : [
            "Up to 500 products",
            "5 users",
            "Advanced reports",
            "Priority support",
            "Basic integrations",
            "Automatic backup"
          ],
      buttonText: language === "es" ? "Comenzar Prueba" : "Start Trial",
      popular: true
    },
    {
      name: language === "es" ? "Plan Empresarial" : "Business Plan",
      price: "70",
      period: language === "es" ? "/mes" : "/month",
      description: language === "es" ? "Para empresas en crecimiento" : "For growing companies",
      features: language === "es"
        ? [
            "Productos ilimitados",
            "Usuarios ilimitados",
            "Reportes personalizados",
            "Soporte 24/7",
            "Todas las integraciones",
            "API completa",
            "Gestor de cuentas dedicado"
          ]
        : [
            "Unlimited products",
            "Unlimited users",
            "Custom reports",
            "24/7 support",
            "All integrations",
            "Full API",
            "Dedicated account manager"
          ],
      buttonText: language === "es" ? "Contactar Ventas" : "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#302325] mb-4">
            {language === "es"
              ? "Planes que se adaptan a tu negocio"
              : "Plans that fit your business"}
          </h2>
          <p className="text-xl text-[#302325] max-w-3xl mx-auto">
            {language === "es"
              ? "Encuentra el plan perfecto para tus necesidades. Comienza gratis y escala según crezcas."
              : "Find the perfect plan for your needs. Start free and scale as you grow."}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-[#EE7F27] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#EE7F27] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {language === "es" ? "Más Popular" : "Most Popular"}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#302325] mb-2">{plan.name}</h3>
                <p className="text-[#302325] mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-[#302325]">${plan.price}</span>
                  <span className="text-xl text-[#302325] ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-[#302325]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 ${
                  plan.popular 
                    ? 'bg-[#EE7F27] hover:bg-[#8C162A] text-white' 
                    : 'bg-[#302325] hover:bg-[#8C162A] text-white'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-[#302325]">
            {language === "es"
              ? "¿Necesitas algo personalizado?"
              : "Need something custom?"}
            <a href="#contact" className="text-[#EE7F27] hover:text-[#8C162A] font-medium ml-1">
              {language === "es"
                ? "Contáctanos para planes empresariales"
                : "Contact us for enterprise plans"}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}