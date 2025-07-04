import React from "react";
import { motion } from "framer-motion";
import { Package, FileText, ShoppingBag, Gift, Truck, Coffee } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "Entrega de Paquetes",
    description: "Envía y recibe paquetes de forma rápida y segura dentro de la ciudad.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Entrega de Documentos",
    description: "Servicio urgente para documentos importantes que necesitan llegar a tiempo.",
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-primary" />,
    title: "Compras Personales",
    description: "Te compramos lo que necesites y lo llevamos hasta la puerta de tu casa.",
  },
  {
    icon: <Gift className="h-10 w-10 text-primary" />,
    title: "Entrega de Regalos",
    description: "Sorprende a tus seres queridos con entregas especiales en fechas importantes.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Mudanzas Pequeñas",
    description: "Transporte de objetos pequeños y medianos dentro de la ciudad.",
  },
  {
    icon: <Coffee className="h-10 w-10 text-primary" />,
    title: "Delivery de Comida",
    description: "Recogemos y entregamos pedidos de tus restaurantes favoritos.",
  }
];

const Services = () => {
  const whatsappLink = "https://wa.me/593995717424";

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de entrega para satisfacer todas tus necesidades en Latacunga y sus alrededores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="service-card h-full border-none shadow-lg hover:shadow-xl flex flex-col">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base flex-grow">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {/* Price removed */}
                </CardContent>
                <CardFooter className="mt-auto">
                   <Button asChild className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                     <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                       Solicitar Servicio
                     </a>
                   </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;