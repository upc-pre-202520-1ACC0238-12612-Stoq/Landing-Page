import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram }
  ];

  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="StockWise Logo"
              className="w-18 h-12 object-contain" 
            />
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="p-3 bg-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-lg text-gray-500 hover:text-white transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          <div className="text-gray-500 text-center">
            © {currentYear} StockWise. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}