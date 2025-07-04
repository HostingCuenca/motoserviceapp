import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Shield, FileText, Code } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleLinkClick = (href) => {
    const isHomePage = location.pathname === "/";

    if (href.startsWith("#")) {
      if (isHomePage) {
        // Si estamos en home, hacer scroll directo
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Si estamos en otra página, navegar a home con el anchor
        window.location.href = `/${href}`;
      }
    } else if (href.startsWith("/")) {
      // Para enlaces de página, usar Link de React Router
      window.location.href = href;
    }
  };

  return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Información de la empresa */}
            <div>
              <div className="flex items-center mb-4">
                <img
                    src="/src/assets/footerlogo.png"
                    alt="MotoService Latacunga"
                    className="h-[69px] w-[298px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                />
              </div>
              <p className="text-sm mb-4">
                Tu servicio de delivery rápido y confiable en Latacunga. Conectamos la ciudad con entregas seguras y eficientes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>Latacunga, Ecuador</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <span>+593 99 571 7424</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <span>info@motoservicelatacunga.com</span>
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                      to="/"
                      className="hover:text-primary transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <button
                      onClick={() => handleLinkClick("#services")}
                      className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => handleLinkClick("#how-it-works")}
                      className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    Cómo Funciona
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => handleLinkClick("#coverage")}
                      className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    Cobertura
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => handleLinkClick("#partners")}
                      className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    Únete Como Socio
                  </button>
                </li>
                <li>
                  <button
                      onClick={() => handleLinkClick("#contact")}
                      className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Información legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                      to="/privacidad"
                      className="hover:text-primary transition-colors flex items-center"
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                      to="/terminos"
                      className="hover:text-primary transition-colors flex items-center"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>

              <div className="mt-6">
                <h5 className="text-sm font-semibold text-white mb-2">Certificaciones</h5>
                <div className="flex flex-col space-y-1 text-xs">
                  <span>✓ GDPR Compliant</span>
                  <span>✓ Facebook Policy Approved</span>
                  <span>✓ Google Play Policy Compliant</span>
                </div>
              </div>
            </div>

            {/* Redes sociales y contacto */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Síguenos</h4>
              <div className="flex space-x-4 mb-6">
                <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                    aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                    aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors p-2 bg-gray-700 rounded-full hover:bg-gray-600"
                    aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <h5 className="text-sm font-semibold text-white mb-2">Horarios de Atención</h5>
                <div className="text-xs space-y-1">
                  <div>Lunes - Viernes: 8:00 AM - 10:00 PM</div>
                  <div>Sábados: 8:00 AM - 11:00 PM</div>
                  <div>Domingos: 9:00 AM - 9:00 PM</div>
                  {/*<div className="text-primary">Emergencias: 24/7</div>*/}
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisora */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-center md:text-left mb-4 md:mb-0">
                <p>&copy; {currentYear} MotoService Latacunga. Todos los derechos reservados.</p>
              </div>

              {/* Crédito de desarrollo en la esquina derecha */}
              <div className="flex items-center text-sm">
                <Code className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-gray-400">
                Software desarrollado por{" "}
                  <a
                      href="https://torisoftt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                  >
                  Torisoftt
                </a>
              </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;