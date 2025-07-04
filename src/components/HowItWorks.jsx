import React from "react";
import { motion } from "framer-motion";
import { Smartphone, MapPin, Bike, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="h-12 w-12 text-white" />,
    title: "Solicita tu servicio",
    description: "Llámanos o escríbenos por WhatsApp para solicitar tu servicio de delivery.",
    color: "bg-primary"
  },
  {
    icon: <MapPin className="h-12 w-12 text-white" />,
    title: "Indica la ubicación",
    description: "Proporciona las direcciones de recogida y entrega para tu pedido.",
    color: "bg-secondary"
  },
  {
    icon: <Bike className="h-12 w-12 text-white" />,
    title: "Asignamos un motorizado",
    description: "Nuestro motorizado más cercano será asignado a tu pedido.",
    color: "bg-primary"
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-white" />,
    title: "Entrega completada",
    description: "Recibe tu pedido en la puerta de tu casa u oficina de forma rápida y segura.",
    color: "bg-secondary"
  }
];

const HowItWorks = () => {
  const phoneNumber = "+593995717424";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Cómo Funciona?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solicitar nuestro servicio de moto delivery es muy sencillo. Sigue estos pasos y recibe tu pedido en minutos.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-12 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="my-6 md:my-0 flex items-center justify-center">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg pulse-animation`}>
                    {step.icon}
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary to-secondary p-1 rounded-xl">
            <div className="bg-white px-8 py-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">¿Listo para hacer tu pedido?</h3>
              <p className="text-gray-600 mb-4">Llámanos o escríbenos por WhatsApp</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={`tel:${phoneNumber}`} className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  <Smartphone className="mr-2 h-5 w-5" /> {phoneNumber.slice(4)}
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;