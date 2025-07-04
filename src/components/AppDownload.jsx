import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Descarga Nuestra App</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Realiza tus pedidos de forma más fácil y rápida con nuestra aplicación móvil. ¡Disponible próximamente!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 border-white hover:border-gray-100"
            disabled // Remove this disabled prop when the app is ready
          >
            <Download className="mr-2 h-5 w-5" /> Google Play Store (Próximamente)
          </Button>
          {/* Add Apple App Store button here when ready */}
          {/*
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 border-white hover:border-gray-100 ml-4"
            disabled // Remove this disabled prop when the app is ready
          >
            <Download className="mr-2 h-5 w-5" /> Apple App Store (Próximamente)
          </Button>
          */}
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownload;