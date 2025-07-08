import React from "react";
import { motion } from "framer-motion";
import { Trash2, Mail, Settings, AlertTriangle, Clock, Shield, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccountDeletionPage = () => {
    const companyName = "Moto Delivery Latacunga";
    const appName = "Moto Delivery App";
    const contactEmail = "info@motoservice.app";
    const contactPhone = "+593 99 571 7424";

    const deletionMethods = [
        {
            id: "app-method",
            title: "Desde la Aplicación",
            icon: <Settings className="h-6 w-6" />,
            description: "La forma más rápida y directa",
            steps: [
                "Abre la aplicación Moto Delivery",
                "Ve a tu perfil",
                "Selecciona 'Configuración' o 'Ajustes'",
                "Busca la opción 'Modificar Perfil'",
                "Encuentra el botón 'Eliminar Cuenta'",
                "Confirma tu decisión siguiendo las instrucciones"
            ],
            timeframe: "Inmediato",
            recommended: true
        },
        {
            id: "email-method",
            title: "Por Correo Electrónico",
            icon: <Mail className="h-6 w-6" />,
            description: "Solicitud formal por email",
            steps: [
                `Envía un correo a ${contactEmail}`,
                "Asunto: 'Eliminación de Cuenta'",
                "Incluye tu información de usuario:",
                "• Nombre completo registrado",
                "• Número de teléfono asociado",
                "• Correo electrónico de la cuenta",
                "• Motivo de eliminación (opcional)",
                "Espera confirmación (24-48 horas)"
            ],
            timeframe: "24-48 horas",
            recommended: false
        }
    ];

    const importantInfo = [
        {
            icon: <AlertTriangle className="h-5 w-5 text-orange-500" />,
            title: "Acción Irreversible",
            description: "Una vez eliminada tu cuenta, no podrás recuperar tu historial de pedidos, datos personales ni información asociada."
        },
        {
            icon: <Clock className="h-5 w-5 text-blue-500" />,
            title: "Período de Gracia",
            description: "Tienes 30 días para reactivar tu cuenta después de la eliminación. Después de este período, la eliminación será permanente."
        },
        {
            icon: <Shield className="h-5 w-5 text-green-500" />,
            title: "Datos Personales",
            description: "Cumplimos con las leyes de protección de datos. Tu información personal será eliminada de nuestros sistemas activos."
        },
        {
            icon: <FileText className="h-5 w-5 text-purple-500" />,
            title: "Registros Legales",
            description: "Algunos datos pueden conservarse por motivos legales, contables o de seguridad según la ley ecuatoriana."
        }
    ];

    const dataRetention = [
        { item: "Información personal", retention: "Eliminada inmediatamente", icon: "🗑️" },
        { item: "Historial de pedidos", retention: "Eliminado después de 30 días", icon: "📦" },
        { item: "Datos de pago", retention: "Eliminados inmediatamente", icon: "💳" },
        { item: "Conversaciones de soporte", retention: "Eliminadas después de 90 días", icon: "💬" },
        { item: "Datos de facturación", retention: "Conservados 7 años (ley fiscal)", icon: "🧾" },
        { item: "Logs de seguridad", retention: "Conservados 1 año (seguridad)", icon: "🔒" }
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
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Eliminación de Cuenta</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Te ayudamos a eliminar tu cuenta de {appName} de forma segura y permanente.
                            Revisa toda la información antes de proceder.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Métodos de Eliminación */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        ¿Cómo eliminar tu cuenta?
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {deletionMethods.map((method, index) => (
                            <Card key={method.id} className={`relative ${method.recommended ? 'ring-2 ring-primary' : ''}`}>
                                {method.recommended && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Recomendado
                                        </span>
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        {method.icon}
                                        <span className="ml-3">{method.title}</span>
                                    </CardTitle>
                                    <p className="text-gray-600">{method.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-500">Tiempo de procesamiento:</span>
                                            <span className="font-medium text-primary">{method.timeframe}</span>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2">Pasos a seguir:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                {method.steps.map((step, stepIndex) => (
                                                    <li key={stepIndex}>{step}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Información Importante */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Card className="border-orange-200 bg-orange-50">
                        <CardHeader>
                            <CardTitle className="flex items-center text-orange-800">
                                <AlertTriangle className="h-6 w-6 mr-2" />
                                Información Importante
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {importantInfo.map((info, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-3 mt-1">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                                            <p className="text-sm text-gray-700">{info.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Retención de Datos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Shield className="h-6 w-6 mr-2" />
                                ¿Qué sucede con mis datos?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2 font-semibold">Tipo de Dato</th>
                                        <th className="text-left py-2 font-semibold">Período de Retención</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {dataRetention.map((row, index) => (
                                        <tr key={index} className="border-b border-gray-100">
                                            <td className="py-3 flex items-center">
                                                <span className="mr-2">{row.icon}</span>
                                                {row.item}
                                            </td>
                                            <td className="py-3 text-gray-600">{row.retention}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Alternativas a la Eliminación */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Card className="border-blue-200 bg-blue-50">
                        <CardHeader>
                            <CardTitle className="text-blue-800">¿Estás seguro de eliminar tu cuenta?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-blue-700 mb-4">
                                Antes de eliminar tu cuenta, considera estas alternativas:
                            </p>
                            <ul className="space-y-2 text-blue-700">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Pausar notificaciones:</strong> Desactiva las notificaciones sin eliminar tu cuenta</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Cambiar configuración de privacidad:</strong> Ajusta quién puede ver tu información</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Contactar soporte:</strong> Resolvemos cualquier problema que tengas</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span><strong>Cuenta inactiva:</strong> Simplemente deja de usar la aplicación</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Contacto y Soporte */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center justify-center">
                                <Phone className="h-6 w-6 mr-2" />
                                ¿Necesitas Ayuda?
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4">
                                Si tienes dudas sobre la eliminación de tu cuenta o necesitas asistencia, contáctanos:
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center justify-center">
                                    <Mail className="h-4 w-4 mr-2 text-primary" />
                                    <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                                        {contactEmail}
                                    </a>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Phone className="h-4 w-4 mr-2 text-primary" />
                                    <a href={`tel:${contactPhone}`} className="text-primary hover:underline">
                                        {contactPhone}
                                    </a>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default AccountDeletionPage;