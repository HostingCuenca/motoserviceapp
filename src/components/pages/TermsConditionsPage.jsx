import React from "react";
import { motion } from "framer-motion";
import { Scale, FileText, Shield, AlertTriangle, DollarSign, Truck, Phone, Calendar, Users, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsConditionsPage = () => {
    const lastUpdated = "03 de julio de 2025";
    const companyName = "Moto Delivery Latacunga";
    const appName = "Moto Delivery App";
    const websiteUrl = "https://motodeliverylatacunga.com";
    const contactEmail = "legal@motodeliverylatacunga.com";
    const contactPhone = "+593 99 571 7424";

    const sections = [
        {
            id: "aceptacion-terminos",
            title: "1. Aceptación de los Términos",
            icon: <Scale className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Al acceder y utilizar la aplicación {appName} y nuestros servicios de delivery, usted acepta estar legalmente vinculado por estos Términos y Condiciones ("Términos"). Si no está de acuerdo con alguno de estos términos, no debe utilizar nuestros servicios.</p>

                    <h4 className="font-semibold text-lg">1.1 Modificaciones</h4>
                    <p>Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la aplicación. Es su responsabilidad revisar periódicamente estos Términos.</p>

                    <h4 className="font-semibold text-lg mt-6">1.2 Capacidad Legal</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Debe ser mayor de 18 años para utilizar nuestros servicios</li>
                        <li>Los menores de 18 años requieren consentimiento parental</li>
                        <li>Debe tener capacidad legal para celebrar contratos</li>
                        <li>Debe proporcionar información veraz y actualizada</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">1.3 Jurisdicción</h4>
                    <p>Estos Términos se rigen por las leyes de la República del Ecuador. Cualquier disputa será resuelta en los tribunales competentes de Latacunga, Ecuador.</p>
                </div>
            )
        },
        {
            id: "descripcion-servicios",
            title: "2. Descripción de los Servicios",
            icon: <Truck className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>{companyName} proporciona servicios de entrega mediante motocicletas en la ciudad de Latacunga y sus alrededores. Nuestros servicios incluyen:</p>

                    <h4 className="font-semibold text-lg">2.1 Servicios Disponibles</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Entrega de paquetes:</strong> Transporte de objetos personales y comerciales</li>
                        <li><strong>Entrega de documentos:</strong> Servicios urgentes para documentación importante</li>
                        <li><strong>Delivery de comida:</strong> Recogida y entrega de pedidos de restaurantes</li>
                        <li><strong>Compras personales:</strong> Servicio de compras y entrega a domicilio</li>
                        <li><strong>Servicios especiales:</strong> Entregas urgentes y servicios personalizados</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">2.2 Área de Cobertura</h4>
                    <p>Nuestros servicios están disponibles en:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Latacunga centro urbano</li>
                        <li>Parroquias urbanas de Latacunga</li>
                        <li>Sectores rurales cercanos (sujeto a disponibilidad)</li>
                        <li>Zonas industriales y comerciales</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">2.3 Horarios de Servicio</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2">
                            <li><strong>Lunes a Viernes:</strong> 7:00 AM - 10:00 PM</li>
                            <li><strong>Sábados:</strong> 8:00 AM - 11:00 PM</li>
                            <li><strong>Domingos:</strong> 9:00 AM - 9:00 PM</li>
                            <li><strong>Servicios de emergencia:</strong> 24/7 (con recargo adicional)</li>
                        </ul>
                    </div>

                    <h4 className="font-semibold text-lg mt-6">2.4 Limitaciones del Servicio</h4>
                    <p>Nuestros servicios están sujetos a las siguientes limitaciones:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Peso máximo: 20 kg por paquete</li>
                        <li>Dimensiones máximas: 60cm x 40cm x 40cm</li>
                        <li>No transportamos materiales peligrosos, ilegales o perecederos</li>
                        <li>Servicios sujetos a condiciones climáticas adversas</li>
                    </ul>
                </div>
            )
        },
        {
            id: "registro-cuenta",
            title: "3. Registro de Cuenta",
            icon: <Users className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Para utilizar nuestros servicios, debe crear una cuenta proporcionando información precisa y actualizada.</p>

                    <h4 className="font-semibold text-lg">3.1 Requisitos de Registro</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Nombre completo y verídico</li>
                        <li>Número de teléfono válido</li>
                        <li>Dirección de correo electrónico activa</li>
                        <li>Dirección física verificable</li>
                        <li>Método de pago válido</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">3.2 Responsabilidades del Usuario</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Mantener la confidencialidad de sus credenciales</li>
                        <li>Actualizar su información cuando sea necesario</li>
                        <li>Notificar inmediatamente cualquier uso no autorizado</li>
                        <li>Usar la cuenta únicamente para propósitos legítimos</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">3.3 Suspensión de Cuenta</h4>
                    <p>Podemos suspender o cerrar su cuenta si:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Viola estos Términos y Condiciones</li>
                        <li>Proporciona información falsa o incompleta</li>
                        <li>Realiza actividades fraudulentas</li>
                        <li>Abusa del servicio o del personal</li>
                        <li>No paga los servicios prestados</li>
                    </ul>
                </div>
            )
        },
        {
            id: "uso-aplicacion",
            title: "4. Uso de la Aplicación",
            icon: <Phone className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Al utilizar nuestra aplicación, usted acepta las siguientes condiciones de uso:</p>

                    <h4 className="font-semibold text-lg">4.1 Uso Permitido</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Utilizar la aplicación únicamente para solicitar servicios de entrega</li>
                        <li>Proporcionar información veraz sobre los envíos</li>
                        <li>Respetar los horarios y políticas de servicio</li>
                        <li>Tratar con respeto a nuestro personal de entrega</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">4.2 Uso Prohibido</h4>
                    <p>Está terminantemente prohibido:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Enviar materiales ilegales, peligrosos o prohibidos</li>
                        <li>Usar la aplicación para actividades fraudulentas</li>
                        <li>Interferir con el funcionamiento de la aplicación</li>
                        <li>Crear múltiples cuentas para evadir restricciones</li>
                        <li>Acosar o amenazar a otros usuarios o empleados</li>
                        <li>Realizar ingeniería inversa de la aplicación</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">4.3 Materiales Prohibidos</h4>
                    <p>No aceptamos envíos de:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Drogas, narcóticos o sustancias controladas</li>
                        <li>Armas, explosivos o materiales peligrosos</li>
                        <li>Dinero en efectivo o cheques</li>
                        <li>Documentos legales que requieran firma certificada</li>
                        <li>Animales vivos</li>
                        <li>Materiales pornográficos o ilegales</li>
                        <li>Productos perecederos sin refrigeración</li>
                    </ul>
                </div>
            )
        },
        {
            id: "tarifas-pagos",
            title: "5. Tarifas y Pagos",
            icon: <DollarSign className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Nuestras tarifas están basadas en la distancia, peso, urgencia y tipo de servicio solicitado.</p>

                    <h4 className="font-semibold text-lg">5.1 Estructura de Tarifas</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Tarifa base:</strong> $2.00 por servicio dentro de la ciudad</li>
                        <li><strong>Tarifa por distancia:</strong> $0.50 por kilómetro adicional</li>
                        <li><strong>Tarifa por peso:</strong> $0.25 por kilogramo adicional (más de 5kg)</li>
                        <li><strong>Servicio urgente:</strong> 50% de recargo adicional</li>
                        <li><strong>Servicio nocturno:</strong> 25% de recargo (10:00 PM - 7:00 AM)</li>
                        <li><strong>Domingos y feriados:</strong> 30% de recargo</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">5.2 Métodos de Pago</h4>
                    <p>Aceptamos los siguientes métodos de pago:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Efectivo (pago contra entrega)</li>
                        <li>Tarjetas de crédito y débito</li>
                        <li>Transferencias bancarias</li>
                        <li>Pagos móviles</li>
                        <li>Billeteras digitales</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">5.3 Política de Facturación</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Se genera factura para todos los servicios</li>
                        <li>Los pagos se procesan al momento de la solicitud</li>
                        <li>Las facturas se envían por correo electrónico</li>
                        <li>Mantenemos registros de todas las transacciones</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">5.4 Reembolsos</h4>
                    <p>Los reembolsos se procesan en los siguientes casos:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cancelación del servicio por nuestra parte</li>
                        <li>Falla del servicio por causas atribuibles a nosotros</li>
                        <li>Sobrecargo por error en la facturación</li>
                        <li>Daños al paquete por negligencia del repartidor</li>
                    </ul>
                </div>
            )
        },
        {
            id: "responsabilidades-limitaciones",
            title: "6. Responsabilidades y Limitaciones",
            icon: <Shield className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Nuestras responsabilidades y limitaciones están claramente definidas para proteger tanto a nuestros usuarios como a nuestra empresa.</p>

                    <h4 className="font-semibold text-lg">6.1 Nuestras Responsabilidades</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Entregar los paquetes en las condiciones recibidas</li>
                        <li>Mantener la confidencialidad de la información</li>
                        <li>Proporcionar seguimiento en tiempo real</li>
                        <li>Notificar sobre cualquier problema durante la entrega</li>
                        <li>Mantener personal capacitado y confiable</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">6.2 Limitaciones de Responsabilidad</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>No somos responsables por el contenido de los paquetes</li>
                        <li>La responsabilidad por daños está limitada al valor declarado del envío</li>
                        <li>No somos responsables por retrasos debido a fuerza mayor</li>
                        <li>No garantizamos tiempos de entrega específicos</li>
                        <li>No somos responsables por pérdidas no reportadas dentro de 24 horas</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">6.3 Responsabilidades del Usuario</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Empaquetar adecuadamente los artículos</li>
                        <li>Declarar correctamente el contenido y valor</li>
                        <li>Estar disponible para recibir o enviar el paquete</li>
                        <li>Proporcionar direcciones exactas y completas</li>
                        <li>Pagar las tarifas acordadas</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">6.4 Seguros</h4>
                    <p>Ofrecemos cobertura de seguro opcional:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Seguro básico incluido hasta $50 USD</li>
                        <li>Seguro extendido disponible por 2% del valor declarado</li>
                        <li>Cobertura contra robo, pérdida y daños</li>
                        <li>Proceso de reclamación en 48 horas</li>
                    </ul>
                </div>
            )
        },
        {
            id: "politica-cancelacion",
            title: "7. Política de Cancelación",
            icon: <AlertTriangle className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Entendemos que las circunstancias pueden cambiar. Nuestra política de cancelación está diseñada para ser justa para todas las partes.</p>

                    <h4 className="font-semibold text-lg">7.1 Cancelación por el Usuario</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Cancelación gratuita:</strong> Hasta 15 minutos después de la solicitud</li>
                        <li><strong>Cancelación con cargo:</strong> 50% de la tarifa si el repartidor ya está en camino</li>
                        <li><strong>Cancelación completa:</strong> 100% de la tarifa si el repartidor ya recogió el paquete</li>
                        <li><strong>Cancelación por emergencia:</strong> Evaluación caso por caso</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">7.2 Cancelación por Nuestra Parte</h4>
                    <p>Podemos cancelar el servicio en los siguientes casos:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Condiciones climáticas adversas</li>
                        <li>Problemas de seguridad en la zona</li>
                        <li>Falta de disponibilidad de repartidores</li>
                        <li>Problemas técnicos en la aplicación</li>
                        <li>Contenido prohibido o peligroso</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">7.3 Reprogramación</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Reprogramación gratuita una vez por pedido</li>
                        <li>Debe realizarse con al menos 30 minutos de anticipación</li>
                        <li>Sujeto a disponibilidad de repartidores</li>
                        <li>Máximo 24 horas de diferencia</li>
                    </ul>
                </div>
            )
        },
        {
            id: "proteccion-datos",
            title: "8. Protección de Datos",
            icon: <Lock className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>La protección de su información personal es fundamental para nosotros. Cumplimos con todas las normativas de protección de datos aplicables.</p>

                    <h4 className="font-semibold text-lg">8.1 Información que Recopilamos</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Datos personales necesarios para el servicio</li>
                        <li>Información de ubicación para entregas</li>
                        <li>Datos de pago y facturación</li>
                        <li>Historial de servicios utilizados</li>
                        <li>Información de dispositivos y uso de la aplicación</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">8.2 Uso de la Información</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Prestación y mejora de servicios</li>
                        <li>Comunicación sobre el estado de entregas</li>
                        <li>Procesamiento de pagos</li>
                        <li>Cumplimiento de obligaciones legales</li>
                        <li>Prevención de fraudes</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">8.3 Sus Derechos</h4>
                    <p>Usted tiene derecho a:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Acceder a su información personal</li>
                        <li>Rectificar datos incorrectos</li>
                        <li>Solicitar la eliminación de sus datos</li>
                        <li>Oponerse al procesamiento</li>
                        <li>Portabilidad de datos</li>
                    </ul>
                </div>
            )
        },
        {
            id: "propiedad-intelectual",
            title: "9. Propiedad Intelectual",
            icon: <FileText className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Todo el contenido de la aplicación, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio y software, es propiedad de {companyName} o sus licenciantes.</p>

                    <h4 className="font-semibold text-lg">9.1 Marcas Registradas</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>"{companyName}" y "{appName}" son marcas registradas</li>
                        <li>Todos los logotipos y diseños son propiedad exclusiva</li>
                        <li>No puede usar nuestras marcas sin autorización escrita</li>
                        <li>Respetamos las marcas registradas de terceros</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">9.2 Derechos de Autor</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Todo el contenido está protegido por derechos de autor</li>
                        <li>No puede copiar, distribuir o modificar nuestro contenido</li>
                        <li>Uso permitido solo para acceder a nuestros servicios</li>
                        <li>Reportamos violaciones de derechos de autor</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">9.3 Licencia de Uso</h4>
                    <p>Le otorgamos una licencia limitada, no exclusiva y revocable para:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Usar la aplicación para solicitar servicios</li>
                        <li>Acceder al contenido necesario para el servicio</li>
                        <li>Descargar materiales temporalmente</li>
                    </ul>
                </div>
            )
        },
        {
            id: "terminacion",
            title: "10. Terminación",
            icon: <AlertTriangle className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Cualquiera de las partes puede terminar esta relación contractual bajo ciertas circunstancias.</p>

                    <h4 className="font-semibold text-lg">10.1 Terminación por el Usuario</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Puede cerrar su cuenta en cualquier momento</li>
                        <li>Debe completar todos los servicios pendientes</li>
                        <li>Debe pagar todas las tarifas pendientes</li>
                        <li>Sus datos se manejan según nuestra política de privacidad</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">10.2 Terminación por Nuestra Parte</h4>
                    <p>Podemos terminar su cuenta si:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Viola estos términos repetidamente</li>
                        <li>Realiza actividades fraudulentas</li>
                        <li>Abusa del personal o sistema</li>
                        <li>No paga por servicios prestados</li>
                        <li>Usa el servicio para actividades ilegales</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">10.3 Efectos de la Terminación</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Pérdida inmediata de acceso a la aplicación</li>
                        <li>Obligación de pagar servicios pendientes</li>
                        <li>Conservación de datos según requerimientos legales</li>
                        <li>Supervivencia de cláusulas aplicables</li>
                    </ul>
                </div>
            )
        },
        {
            id: "resolucion-disputas",
            title: "11. Resolución de Disputas",
            icon: <Scale className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Preferimos resolver las disputas de manera amigable y eficiente. Hemos establecido un proceso claro para manejar cualquier conflicto.</p>

                    <h4 className="font-semibold text-lg">11.1 Proceso de Resolución</h4>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li><strong>Comunicación directa:</strong> Contacte nuestro servicio al cliente</li>
                        <li><strong>Mediación interna:</strong> Revisión por supervisor especializado</li>
                        <li><strong>Arbitraje:</strong> Proceso de arbitraje vinculante si es necesario</li>
                        <li><strong>Jurisdicción:</strong> Tribunales de Latacunga, Ecuador</li>
                    </ol>

                    <h4 className="font-semibold text-lg mt-6">11.2 Tiempo de Respuesta</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Respuesta inicial: 24 horas</li>
                        <li>Investigación: 3-5 días hábiles</li>
                        <li>Resolución: 7-10 días hábiles</li>
                        <li>Apelación: 15 días hábiles</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">11.3 Limitaciones</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Reclamos deben presentarse dentro de 30 días</li>
                        <li>Evidencia fotográfica requerida para daños</li>
                        <li>Compensación máxima limitada al valor del servicio</li>
                        <li>No se aceptan reclamos por daños indirectos</li>
                    </ul>
                </div>
            )
        },
        {
            id: "contacto-legal",
            title: "12. Contacto e Información Legal",
            icon: <Phone className="h-5 w-5" />,
            content: (
                <div className="space-y-4">
                    <p>Para cualquier consulta legal o relacionada con estos términos, puede contactarnos a través de los siguientes medios:</p>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Información de Contacto Legal</h4>
                        <div className="space-y-2">
                            <p><strong>Razón Social:</strong> {companyName}</p>
                            <p><strong>RUC:</strong> 0503456789001</p>
                            <p><strong>Dirección:</strong> Av. Eloy Alfaro y Quito, Latacunga, Ecuador</p>
                            <p><strong>Email Legal:</strong> {contactEmail}</p>
                            <p><strong>Teléfono:</strong> {contactPhone}</p>
                            <p><strong>Horario de Atención Legal:</strong> Lunes a Viernes, 9:00 AM - 5:00 PM</p>
                        </div>
                    </div>

                    <h4 className="font-semibold text-lg mt-6">12.1 Comunicaciones Oficiales</h4>
                    <p>Las comunicaciones oficiales se realizarán mediante:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Correo electrónico certificado</li>
                        <li>Notificaciones en la aplicación</li>
                        <li>Correo postal cuando sea requerido</li>
                        <li>Publicaciones en nuestro sitio web</li>
                    </ul>

                    <h4 className="font-semibold text-lg mt-6">12.2 Representación Legal</h4>
                    <p>Para asuntos legales complejos, contamos con representación legal especializada en:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Derecho comercial y contractual</li>
                        <li>Protección de datos personales</li>
                        <li>Derecho del consumidor</li>
                        <li>Regulaciones de transporte</li>
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Estos términos y condiciones rigen el uso de nuestros servicios de delivery. Al utilizar {appName}, usted acepta cumplir con estos términos.
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
                        Al utilizar nuestros servicios, usted acepta estos Términos y Condiciones y nuestra Política de Privacidad.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#contacto-legal"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            Contacto Legal
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                            href="/privacidad"
                            className="text-primary hover:text-primary/80 font-medium"
                        >
                            Política de Privacidad
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsConditionsPage;