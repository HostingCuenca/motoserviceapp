import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, FileText, Phone, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
    const lastUpdated = "03 de julio de 2025";
    const companyName = "Moto Delivery Latacunga";
    const appName = "Moto Delivery App";
    const websiteUrl = "https://motodeliverylatacunga.com";
    const contactEmail = "privacidad@motodeliverylatacunga.com";
    const contactPhone = "+593 99 571 7424";

    const sections = [
        {
            id: "informacion-recopilamos",
            title: "1. Información que Recopilamos",
            icon: <FileText className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <h4 className="font-semibold text-lg">1.1 Información Personal</h4>
                    <p>Recopilamos la siguiente información personal cuando usted utiliza nuestros servicios:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Información de contacto:</strong> Nombre completo, número de teléfono, dirección de correo electrónico</li>
                        <li><strong>Información de ubicación:</strong> Dirección de entrega, dirección de recogida, ubicación GPS cuando usa la aplicación</li>
                        <li><strong>Información de pago:</strong> Detalles de tarjetas de crédito/débito, información de facturación</li>
                        <li><strong>Información de la cuenta:</strong> Nombre de usuario, contraseña, preferencias de entrega</li>
                        <li><strong>Información de identificación:</strong> Número de cédula de identidad (cuando sea requerido por ley)</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">1.2 Información Técnica</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Datos del dispositivo:</strong> Tipo de dispositivo, sistema operativo, identificadores únicos</li>
                        <li><strong>Datos de uso:</strong> Páginas visitadas, tiempo de uso, interacciones con la aplicación</li>
                        <li><strong>Datos de conexión:</strong> Dirección IP, tipo de navegador, proveedor de servicios de internet</li>
                        <li><strong>Cookies y tecnologías similares:</strong> Identificadores de sesión, preferencias de usuario</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">1.3 Información de Terceros</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Redes sociales:</strong> Información de perfil cuando inicia sesión con Facebook o Google</li>
                        <li><strong>Servicios de mapas:</strong> Datos de ubicación de Google Maps</li>
                        <li><strong>Servicios de pago:</strong> Información de transacciones de procesadores de pago</li>
                    </ul>
                </div>
            )
        },
        {
            id: "como-usamos-informacion",
            title: "2. Cómo Usamos su Información",
            icon: <Eye className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Utilizamos su información personal para los siguientes propósitos:</p>

                    <h4 className="font-semibold text-lg">2.1 Prestación de Servicios</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Procesar y gestionar sus pedidos de entrega</li>
                        <li>Coordinar la recogida y entrega de paquetes</li>
                        <li>Comunicarnos con usted sobre el estado de sus entregas</li>
                        <li>Proporcionar soporte al cliente</li>
                        <li>Procesar pagos y generar facturas</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">2.2 Mejora de Servicios</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Analizar patrones de uso para mejorar nuestra aplicación</li>
                        <li>Optimizar rutas de entrega</li>
                        <li>Personalizar su experiencia de usuario</li>
                        <li>Desarrollar nuevas funcionalidades</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">2.3 Comunicación y Marketing</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Enviar notificaciones sobre sus entregas</li>
                        <li>Informar sobre nuevos servicios y promociones (solo con su consentimiento)</li>
                        <li>Solicitar feedback sobre nuestros servicios</li>
                        <li>Responder a sus consultas y comentarios</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">2.4 Cumplimiento Legal</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cumplir con obligaciones legales y regulatorias</li>
                        <li>Prevenir fraudes y actividades ilegales</li>
                        <li>Proteger nuestros derechos y propiedades</li>
                        <li>Cooperar con autoridades competentes cuando sea requerido</li>
                    </ul>
                </div>
            )
        },
        {
            id: "compartir-informacion",
            title: "3. Compartir Información",
            icon: <Users className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:</p>

                    <h4 className="font-semibold text-lg">3.1 Proveedores de Servicios</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Procesadores de pago:</strong> Para procesar transacciones de forma segura</li>
                        <li><strong>Servicios de mapas:</strong> Google Maps para funcionalidades de ubicación</li>
                        <li><strong>Servicios de mensajería:</strong> Para enviar notificaciones SMS y push</li>
                        <li><strong>Servicios de hosting:</strong> Para alojar y mantener nuestra aplicación</li>
                        <li><strong>Servicios de análisis:</strong> Para mejorar nuestros servicios</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">3.2 Requisitos Legales</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cuando sea requerido por ley o por autoridades competentes</li>
                        <li>Para proteger nuestros derechos, propiedad o seguridad</li>
                        <li>Para prevenir fraudes o actividades ilegales</li>
                        <li>En caso de fusión, adquisición o venta de activos</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">3.3 Con su Consentimiento</h4>
                    <p>Compartiremos información adicional solo con su consentimiento explícito para propósitos específicos que le comunicaremos claramente.</p>
                </div>
            )
        },
        {
            id: "seguridad-datos",
            title: "4. Seguridad de los Datos",
            icon: <Lock className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información personal:</p>

                    <h4 className="font-semibold text-lg">4.1 Medidas Técnicas</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cifrado SSL/TLS para todas las transmisiones de datos</li>
                        <li>Cifrado de datos sensibles en nuestras bases de datos</li>
                        <li>Firewalls y sistemas de detección de intrusiones</li>
                        <li>Actualizaciones regulares de seguridad</li>
                        <li>Autenticación de dos factores para cuentas administrativas</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">4.2 Medidas Administrativas</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Acceso limitado a información personal solo a empleados autorizados</li>
                        <li>Capacitación regular en privacidad y seguridad</li>
                        <li>Políticas estrictas de manejo de datos</li>
                        <li>Monitoreo regular de acceso a datos</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">4.3 Retención de Datos</h4>
                    <p>Conservamos su información personal durante el tiempo necesario para:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Proporcionar nuestros servicios</li>
                        <li>Cumplir con obligaciones legales</li>
                        <li>Resolver disputas</li>
                        <li>Hacer cumplir nuestros acuerdos</li>
                    </ul>
                    <p className="mt-2">Los datos se eliminan de forma segura cuando ya no son necesarios, generalmente después de 7 años desde la última actividad de la cuenta.</p>
                </div>
            )
        },
        {
            id: "sus-derechos",
            title: "5. Sus Derechos",
            icon: <Shield className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Usted tiene los siguientes derechos respecto a su información personal:</p>

                    <h4 className="font-semibold text-lg">5.1 Derecho de Acceso</h4>
                    <p>Puede solicitar una copia de toda la información personal que tenemos sobre usted.</p>

                    <h4 className="font-semibold text-lg mt-6">5.2 Derecho de Rectificación</h4>
                    <p>Puede solicitar que corrijamos información inexacta o incompleta.</p>

                    <h4 className="font-semibold text-lg mt-6">5.3 Derecho de Eliminación</h4>
                    <p>Puede solicitar que eliminemos su información personal, sujeto a ciertas excepciones legales.</p>

                    <h4 className="font-semibold text-lg mt-6">5.4 Derecho de Portabilidad</h4>
                    <p>Puede solicitar que transfiramos su información a otro proveedor de servicios.</p>

                    <h4 className="font-semibold text-lg mt-6">5.5 Derecho de Oposición</h4>
                    <p>Puede oponerse al procesamiento de su información para ciertos propósitos, incluyendo marketing directo.</p>

                    <h4 className="font-semibold text-lg mt-6">5.6 Derecho de Limitación</h4>
                    <p>Puede solicitar que limitemos el procesamiento de su información en ciertas circunstancias.</p>

                    <h4 className="font-semibold text-lg mt-6">5.7 Cómo Ejercer sus Derechos</h4>
                    <p>Para ejercer cualquiera de estos derechos, contáctenos a través de:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Email: {contactEmail}</li>
                        <li>Teléfono: {contactPhone}</li>
                        <li>A través de la configuración de la aplicación</li>
                    </ul>
                    <p className="mt-2">Responderemos a su solicitud dentro de 30 días.</p>
                </div>
            )
        },
        {
            id: "cookies",
            title: "6. Cookies y Tecnologías Similares",
            icon: <Eye className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Utilizamos cookies y tecnologías similares para mejorar su experiencia:</p>

                    <h4 className="font-semibold text-lg">6.1 Tipos de Cookies</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico de la aplicación</li>
                        <li><strong>Cookies de rendimiento:</strong> Nos ayudan a entender cómo usa la aplicación</li>
                        <li><strong>Cookies de funcionalidad:</strong> Recuerdan sus preferencias y configuraciones</li>
                        <li><strong>Cookies de marketing:</strong> Utilizadas para mostrar anuncios relevantes (solo con su consentimiento)</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">6.2 Gestión de Cookies</h4>
                    <p>Puede gestionar las cookies a través de:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Configuración de su navegador</li>
                        <li>Configuración de la aplicación</li>
                        <li>Nuestro banner de consentimiento de cookies</li>
                    </ul>
                    <p className="mt-2">Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad de la aplicación.</p>
                </div>
            )
        },
        {
            id: "menores",
            title: "7. Protección de Menores",
            icon: <Shield className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Nos comprometemos a proteger la privacidad de los menores de edad:</p>

                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Nuestros servicios están dirigidos a personas mayores de 18 años</li>
                        <li>No recopilamos conscientemente información personal de menores de 13 años</li>
                        <li>Los usuarios entre 13 y 18 años deben tener consentimiento parental</li>
                        <li>Si descubrimos que hemos recopilado información de un menor sin consentimiento, la eliminaremos inmediatamente</li>
                        <li>Los padres pueden contactarnos para revisar, modificar o eliminar la información de sus hijos</li>
                    </ul>

                    <p className="mt-4">Si usted es padre o tutor y cree que su hijo nos ha proporcionado información personal, por favor contáctenos inmediatamente.</p>
                </div>
            )
        },
        {
            id: "transferencias-internacionales",
            title: "8. Transferencias Internacionales",
            icon: <Users className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Su información puede ser transferida y procesada en países fuera de Ecuador:</p>

                    <h4 className="font-semibold text-lg">8.1 Destinos de Transferencia</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Estados Unidos (para servicios de Google y Facebook)</li>
                        <li>Países de la Unión Europea (para servicios de hosting)</li>
                        <li>Otros países donde operan nuestros proveedores de servicios</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">8.2 Salvaguardas</h4>
                    <p>Implementamos las siguientes salvaguardas para proteger su información:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cláusulas contractuales estándar aprobadas por autoridades de protección de datos</li>
                        <li>Certificaciones de adequación de protección de datos</li>
                        <li>Acuerdos de procesamiento de datos con todos los proveedores</li>
                        <li>Evaluaciones regulares de los niveles de protección</li>
                    </ul>
                </div>
            )
        },
        {
            id: "cambios-politica",
            title: "9. Cambios a esta Política",
            icon: <FileText className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras prácticas o en la legislación aplicable.</p>

                    <h4 className="font-semibold text-lg">9.1 Notificación de Cambios</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Le notificaremos sobre cambios materiales por email</li>
                        <li>Publicaremos un aviso destacado en nuestra aplicación</li>
                        <li>Actualizaremos la fecha de "última actualización" en la parte superior</li>
                        <li>Para cambios menores, la notificación se realizará a través de la aplicación</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">9.2 Su Consentimiento</h4>
                    <p>Al continuar usando nuestros servicios después de que los cambios entren en vigor, usted acepta la política actualizada. Si no está de acuerdo con los cambios, puede dejar de usar nuestros servicios y solicitar la eliminación de su cuenta.</p>
                </div>
            )
        },
        {
            id: "contacto",
            title: "10. Contacto",
            icon: <Phone className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Si tiene preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad, puede contactarnos:</p>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Información de Contacto</h4>
                        <div className="space-y-2">
                            <p><strong>Empresa:</strong> {companyName}</p>
                            <p><strong>Email de Privacidad:</strong> {contactEmail}</p>
                            <p><strong>Teléfono:</strong> {contactPhone}</p>
                            <p><strong>WhatsApp:</strong> {contactPhone}</p>
                            <p><strong>Dirección:</strong> Latacunga, Ecuador</p>
                            <p><strong>Horario de Atención:</strong> Lunes a Domingo, 24/7</p>
                        </div>
                    </div>

                    <h4 className="font-semibold text-lg mt-6">10.1 Autoridad de Protección de Datos</h4>
                    <p>Si no está satisfecho con nuestra respuesta, puede presentar una queja ante la Superintendencia de Protección de Datos del Ecuador o la autoridad competente en materia de protección de datos.</p>

                    <h4 className="font-semibold text-lg mt-6">10.2 Tiempo de Respuesta</h4>
                    <p>Nos comprometemos a responder a sus consultas dentro de:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Consultas generales: 48 horas</li>
                        <li>Solicitudes de ejercicio de derechos: 30 días</li>
                        <li>Emergencias de seguridad: 24 horas</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm pt-20">
                <div className="container mx-auto px-4 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            En {companyName}, nos comprometemos a proteger y respetar su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal.
                        </p>
                        <div className="mt-6 inline-flex items-center px-4 py-2 bg-blue-50 rounded-lg">
                            <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                            <span className="text-blue-800 font-medium">Última actualización: {lastUpdated}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <FileText className="h-5 w-5 mr-2" />
                                Índice de Contenidos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {sections.map((section, index) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        {section.icon}
                                        <span className="ml-2 text-sm">{section.title}</span>
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            id={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center text-xl">
                                        {section.icon}
                                        <span className="ml-2">{section.title}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="prose max-w-none">
                                        {section.content}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-12 text-center p-6 bg-white rounded-lg shadow-sm"
                >
                    <p className="text-gray-600 mb-4">
                        Esta Política de Privacidad es parte integral de nuestros Términos y Condiciones de Servicio.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#contacto"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            Contáctanos
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                            href="/terminos"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            Términos y Condiciones
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;