// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Package, Clock, MapPin } from "lucide-react";
//
// const Hero = () => {
//   const whatsappLink = "https://wa.me/593995717424";
//
//   return (
//     <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
//           >
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Servicio de <span className="text-primary">Moto</span> Delivery en{" "}
//               <span className="text-secondary">Latacunga</span>
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Entregamos tus pedidos, documentos y paquetes de forma rápida y segura.
//               Servicio profesional con cobertura en toda la ciudad de Latacunga y sus alrededores.
//             </p>
//
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                <Button asChild className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8">
//                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                   Hacer un pedido <ArrowRight className="ml-2 h-5 w-5" />
//                  </a>
//                </Button>
//                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg py-6 px-8">
//                  <a href="#coverage">
//                     Ver cobertura <MapPin className="ml-2 h-5 w-5" />
//                  </a>
//                </Button>
//             </div>
//
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
//               <div className="flex items-center">
//                 <div className="bg-primary/10 p-2 rounded-full mr-3">
//                   <Package className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="text-sm font-medium">Entregas seguras</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="bg-primary/10 p-2 rounded-full mr-3">
//                   <Clock className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="text-sm font-medium">Servicio Rápido</span>
//               </div>
//               <div className="flex items-center">
//                 <div className="bg-primary/10 p-2 rounded-full mr-3">
//                   <MapPin className="h-5 w-5 text-primary" />
//                 </div>
//                 <span className="text-sm font-medium">Toda la ciudad</span>
//               </div>
//             </div>
//           </motion.div>
//
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="md:w-1/2 relative"
//           >
//             <div className="relative rounded-xl overflow-hidden shadow-2xl">
//               <img  className="w-full h-auto rounded-xl" alt="Motociclista de delivery en Latacunga" src="https://images.unsplash.com/photo-1605053116841-baf4a2c7531c" />
//
//               <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-multiply rounded-xl"></div>
//
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8, duration: 0.5 }}
//                 className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg"
//               >
//                 <div className="flex items-center">
//                   <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
//                     <Clock className="h-5 w-5" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm font-medium text-gray-600">Tiempo promedio de entrega</p>
//                     <p className="text-lg font-bold text-gray-900">25-40 minutos</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//
//             <motion.div
//               className="absolute -top-6 -right-6 bg-secondary text-white p-4 rounded-lg shadow-lg floating-animation"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 1, duration: 0.5 }}
//             >
//               <p className="text-sm font-bold">¡Rápido y Confiable!</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Clock, MapPin, Star, Shield, Zap } from "lucide-react";

const Hero = () => {
  const whatsappLink = "https://wa.me/593995717424";

  return (
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>

        {/* Geometric shapes for visual interest */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
            >
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6"
              >
                <Zap className="h-4 w-4 mr-2" />
                Servicio disponible 24/7
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Servicio de <span className="text-primary">Moto</span> Delivery en{" "}
                <span className="text-secondary">Latacunga</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Entregamos tus pedidos, documentos y paquetes de forma rápida y segura.
                Servicio profesional con cobertura en toda la ciudad de Latacunga y sus alrededores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Hacer un pedido <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg py-6 px-8 rounded-xl transition-all duration-300">
                  <a href="#coverage">
                    Ver cobertura <MapPin className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Entregas seguras</p>
                    <p className="text-sm text-gray-600">100% garantizado</p>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">25-40 min</p>
                    <p className="text-sm text-gray-600">Tiempo promedio</p>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5.0 estrellas</p>
                    <p className="text-sm text-gray-600">Calificación promedio</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right column - Image with creative layout */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 lg:order-2 relative"
            >
              {/* Main image container */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>

                {/* Main image */}
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                      className="w-full h-96 object-cover rounded-2xl"
                      alt="Motociclista de delivery en Latacunga"
                      src="https://images.unsplash.com/photo-1605053116841-baf4a2c7531c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                      <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600">Estado</p>
                      <p className="text-sm font-bold text-gray-900">En línea</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center mr-3">
                      <Package className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-600">Entregas hoy</p>
                      <p className="text-sm font-bold text-gray-900">47+</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-secondary text-white p-3 rounded-xl shadow-lg"
                >
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="text-sm font-bold">¡Súper rápido!</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-500 mb-2">Desliza para explorar</p>
            <div className="h-8 w-5 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="h-2 w-1 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </motion.div>
      </section>
  );
};

export default Hero;