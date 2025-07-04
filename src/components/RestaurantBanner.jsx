import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, ArrowRight } from "lucide-react";

const RestaurantBanner = () => {
   const whatsappLink = "https://wa.me/593995717424?text=Hola%2C%20estoy%20interesado%20en%20registrar%20mi%20restaurante%20en%20MotoService.";

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <UtensilsCrossed className="h-12 w-12 text-secondary mx-auto md:mx-0 mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">¿Eres un Restaurante?</h2>
            <p className="text-gray-600 text-lg max-w-lg">
              Amplía tu alcance y aumenta tus ventas uniéndote a nuestra red de delivery. Llega a más clientes en Latacunga.
            </p>
          </div>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white flex-shrink-0">
             <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Únete Ahora <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RestaurantBanner;