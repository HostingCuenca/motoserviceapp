import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Coverage = () => {
  return (
      <section id="coverage" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Área de Cobertura</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos servicio de delivery en toda la ciudad de Latacunga y sus alrededores. ¡Consulta nuestra cobertura!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
              <Card className="h-full shadow-lg border-none">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Zonas Principales</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Centro de Latacunga</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>La Matriz</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>San Buenaventura</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Belisario Quevedo</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>San Felipe</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Eloy Alfaro</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Ignacio Flores</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span>Zonas periféricas (consultar cobertura exacta)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Contacta con nosotros para confirmar la cobertura en tu ubicación específica.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full shadow-lg border-none">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Clock className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Tiempos Estimados</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Centro de la ciudad: 15-25 min</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span>Zonas residenciales: 20-30 min</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <span>Zonas periféricas: 30-45 min</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span>Horario: 7:00 - 22:00 (Lun-Dom)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                      <span>Servicio nocturno: 22:00 - 7:00</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span>Emergencias: 24/7</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Los tiempos son aproximados y pueden variar según el tráfico y la demanda.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-primary to-secondary text-white">
              <h3 className="text-2xl font-bold mb-2">Mapa de Cobertura</h3>
              <p>Consulta el mapa para ver nuestra área de operación en Latacunga.</p>
            </div>

            {/* Mapa de Google Maps */}
            <div className="relative h-96 w-full">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15966.089842145394!2d-78.61715421842043!3d-0.9283487304167684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d68b5a3d3d09a7%3A0x1b6e5b4d8c8c8c8c!2sLatacunga%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1699999999999!5m2!1ses!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de cobertura Latacunga"
              ></iframe>
            </div>

            <div className="p-4 text-center bg-gray-50">
              <p className="text-sm text-gray-600 mb-2">
                ¿No estás seguro si llegamos a tu zona?
              </p>
<a
              href="https://wa.me/593995717424"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
              Consultar Cobertura por WhatsApp
            </a>
        </div>
      </motion.div>
</div>
</section>
);
};

export default Coverage;