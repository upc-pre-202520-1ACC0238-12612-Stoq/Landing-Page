import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const team = [
    {
      name: "John Doe",
      role: "CEO & Fundador",
      description: "John tiene más de 15 años de experiencia en tecnología y liderazgo empresarial. Ha fundado múltiples startups exitosas en el sector logístico.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Miller",
      role: "CTO",
      description: "Sarah lidera nuestro equipo técnico con más de 12 años desarrollando soluciones de software empresarial. Es experta en arquitectura de sistemas escalables.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c2b4?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestro equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo de profesionales apasionados que han encontrado el éxito con StockWise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full mx-auto w-32 h-32 group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-lg text-orange-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzU5NDMwMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Equipo StockWise"
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-900/30 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Construyendo el futuro del inventario
                </h3>
                <p className="text-xl max-w-2xl">
                  Nuestra misión es simplificar la gestión de inventario para empresas de todos los tamaños
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}