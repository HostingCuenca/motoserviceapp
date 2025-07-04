import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const whatsappLink = "https://wa.me/593995717424";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Cobertura", href: "#coverage" },
    { name: "Únete", href: "#partners" },
    { name: "Contacto", href: "#contact" },
  ];

  const handleNavClick = (href) => {
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
    }
    setIsOpen(false);
  };

  return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
            >
              <Link to="/" className="flex items-center">
                <img
                    src="/src/assets/logo.png"
                    alt="MotoService Latacunga"
                    className="h-[69px] w-[298px] object-contain"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      e.target.style.display = 'none';
                    }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                  <motion.button
                      key={index}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-gray-700 hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {item.name}
                  </motion.button>
              ))}

              <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-4 w-4" /> Pedir Ahora
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pb-4"
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                      <button
                          key={index}
                          onClick={() => handleNavClick(item.href)}
                          className="text-gray-700 hover:text-primary font-medium transition-colors py-2 text-left bg-transparent border-none cursor-pointer"
                      >
                        {item.name}
                      </button>
                  ))}

                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" /> Pedir Ahora
                    </a>
                  </Button>
                </div>
              </motion.div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;