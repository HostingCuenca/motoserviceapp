import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Bike, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Partners = () => {
    const whatsappLinkClients = "https://wa.me/593995717424?text=Hola%2C%20quisiera%20saber%20más%20sobre%20sus%20servicios%20para%20clientes.";
    const whatsappLinkRiders = "https://wa.me/593995717424?text=Hola%2C%20estoy%20interesado%20en%20trabajar%20como%20motorizado%20con%20MotoService.";

  return (
    <section id="partners" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Únete a Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ya seas un cliente buscando el mejor delivery o un motorizado buscando oportunidades, ¡tenemos algo para ti!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clientes Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="service-card h-full border-none shadow-lg hover:shadow-xl flex flex-col">
              <CardHeader>
                <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Para Clientes</CardTitle>
                <CardDescription className="text-base">
                  Disfruta de entregas rápidas, seguras y confiables para todas tus necesidades. Pide comida, paquetes, documentos y más.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Servicio rápido y eficiente.</li>
                  <li>Amplia cobertura en Latacunga.</li>
                  <li>Seguimiento de tus pedidos (próximamente en app).</li>
                  <li>Atención personalizada.</li>
                </ul>
              </CardContent>
              <CardContent className="mt-auto">
                <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                   <a href={whatsappLinkClients} target="_blank" rel="noopener noreferrer">
                    Solicita un Servicio <ArrowRight className="ml-2 h-4 w-4" />
                   </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Motorizados Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="service-card h-full border-none shadow-lg hover:shadow-xl flex flex-col">
              <CardHeader>
                <div className="mb-4 bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Bike className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Para Motorizados</CardTitle>
                <CardDescription className="text-base">
                  ¿Tienes moto y buscas una oportunidad para generar ingresos? Únete a nuestro equipo de motorizados.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Horarios flexibles.</li>
                  <li>Buenas tarifas por entrega.</li>
                  <li>Trabaja en tu propia ciudad.</li>
                  <li>Forma parte de un equipo en crecimiento.</li>
                </ul>
              </CardContent>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                  <a href={whatsappLinkRiders} target="_blank" rel="noopener noreferrer">
                    Quiero ser Motorizado <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partners;