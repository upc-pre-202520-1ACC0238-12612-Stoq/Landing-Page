import { Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function TestimonialsSection() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: language === "es" ? "María González" : "Maria Gonzalez",
      company: language === "es" ? "Trabajadora" : "Worker",
      content:
        language === "es"
          ? "StockWise ha revolucionado nuestra gestión de inventario. Los reportes en tiempo real nos han ayudado a reducir costos en un 30%."
          : "StockWise has revolutionized our inventory management. Real-time reports have helped us reduce costs by 30%.",
      rating: 5,
      avatar: "/maria.png",
    },
    {
      name: language === "es" ? "Carlos Rodríguez" : "Carlos Rodriguez",
      company: language === "es" ? "Trabajador" : "Worker",
      content:
        language === "es"
          ? "La integración con nuestros sistemas existentes fue perfecta. Ahora tenemos visibilidad completa de nuestro inventario."
          : "The integration with our existing systems was perfect. Now we have complete visibility of our inventory.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: language === "es" ? "Ana López" : "Ana Lopez",
      company: language === "es" ? "Trabajadora" : "Worker",
      content:
        language === "es"
          ? "Desde que implementamos StockWise, nuestros problemas de stock se redujeron drásticamente. Es una herramienta indispensable."
          : "Since implementing StockWise, our stock issues have drastically decreased. It's an indispensable tool.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FFE0B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#302325] mb-4">
            {language === "es"
              ? "Lo que dicen nuestros clientes"
              : "What our clients say"}
          </h2>
          <p className="text-xl text-[#302325] max-w-3xl mx-auto">
            {language === "es"
              ? "Miles de empresas confían en StockWise para gestionar su inventario de manera eficiente"
              : "Thousands of companies trust StockWise to efficiently manage their inventory"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#D9D593] fill-current" />
                ))}
              </div>

              <p className="text-[#302325] leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-[#302325]">{testimonial.name}</div>
                  <div className="text-[#EE7F27] text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}