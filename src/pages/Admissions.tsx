
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle2, FileCheck, Calendar, HelpCircle, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">
                      <Home className="h-4 w-4" />
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-institutional">Admisiones</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-institutional py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-lora font-bold mb-6">Proceso de Admisión</h1>
              <p className="text-lg md:text-xl mb-8">
                Te invitamos a formar parte de nuestra comunidad educativa y comenzar tu formación profesional 
                con los más altos estándares académicos y valores humanos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#proceso-admision" 
                  className="bg-white text-institutional py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  Conoce el proceso
                </a>
                <a 
                  href="#requisitos" 
                  className="bg-institutional-light text-white py-2 px-4 rounded-md hover:bg-institutional-dark transition-colors duration-200"
                >
                  Ver requisitos
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="proceso-admision" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">Inscripción 2025</h2>
            
            <div className="bg-institutional/10 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Información Importante</h3>
              <p className="text-gray-700 mb-6">
                La inscripción para el ciclo lectivo 2025 ya está abierta. Te invitamos a completar el proceso 
                de admisión lo antes posible para asegurar tu lugar en la carrera de tu elección.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-institutional-dark mb-3">Fechas Importantes:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-institutional mr-2 flex-shrink-0" />
                      <span><strong>Noviembre 2024 - Marzo 2025:</strong> Período de inscripción</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 text-institutional mr-2 flex-shrink-0" />
                      <span><strong>Marzo 2025:</strong> Inicio de clases</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-institutional-dark mb-3">Horario de Atención:</h4>
                  <p className="text-gray-700 mb-2">
                    La Secretaría Académica atiende consultas e inscripciones en los siguientes horarios:
                  </p>
                  <ul className="text-gray-700">
                    <li>Lunes a viernes: 17:00 a 21:00</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="carreras" className="mb-12">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="carreras">Oferta Académica</TabsTrigger>
                <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="carreras">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Profesorados</CardTitle>
                      <CardDescription>Duración: 4 años</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Profesor/a de Inglés</li>
                        <li>Profesor/a de Secundaria en Lengua y Literatura</li>
                        <li>Profesor/a de Educación Secundaria en Historia</li>
                        <li>Profesor/a de Educación Secundaria en Economía</li>
                      </ul>
                      <div className="mt-6">
                        <Link 
                          to="/carreras" 
                          className="text-institutional hover:text-institutional-dark transition-colors duration-200 font-medium"
                        >
                          Ver planes de estudio →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Tecnicaturas</CardTitle>
                      <CardDescription>Duración: 3 años</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Tecnicatura Superior en Análisis y Desarrollo de Software</li>
                        <li>Tecnicatura Superior Administración Contable</li>
                      </ul>
                      <div className="mt-6">
                        <Link 
                          to="/carreras" 
                          className="text-institutional hover:text-institutional-dark transition-colors duration-200 font-medium"
                        >
                          Ver planes de estudio →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Carreras de Grado</CardTitle>
                      <CardDescription>Duración: 5 años</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Contador Público Nacional</li>
                      </ul>
                      <div className="mt-6">
                        <Link 
                          to="/carreras" 
                          className="text-institutional hover:text-institutional-dark transition-colors duration-200 font-medium"
                        >
                          Ver planes de estudio →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="requisitos" id="requisitos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Documentación Requerida</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">DNI original y fotocopia</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Título secundario legalizado original y fotocopia</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">4 fotos carnet 4x4</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Certificado de aptitud psicofísica expedido por hospital público</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Partida de nacimiento</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-lora font-semibold text-institutional-dark mt-8 mb-4">Aranceles 2025</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FileCheck className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Matrícula: $35,000</span>
                      </li>
                      <li className="flex items-start">
                        <FileCheck className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Cuota mensual: $25,000 (10 cuotas de marzo a diciembre)</span>
                      </li>
                      <li className="flex items-start">
                        <FileCheck className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Descuentos por pago anual: 15% sobre el valor total de las cuotas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Formularios y Solicitudes</h3>
                    <p className="text-gray-700 mb-4">
                      Para agilizar el proceso de inscripción, puedes descargar los siguientes formularios 
                      y completarlos antes de acercarte a la secretaría:
                    </p>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                          <Download className="h-5 w-5 text-institutional mr-3" />
                          <div>
                            <span className="block font-medium text-gray-800">Formulario de Inscripción</span>
                            <span className="text-gray-600 text-sm">PDF - 135KB</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                          <Download className="h-5 w-5 text-institutional mr-3" />
                          <div>
                            <span className="block font-medium text-gray-800">Solicitud de Entrevista</span>
                            <span className="text-gray-600 text-sm">PDF - 98KB</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                          <Download className="h-5 w-5 text-institutional mr-3" />
                          <div>
                            <span className="block font-medium text-gray-800">Reglamento Institucional</span>
                            <span className="text-gray-600 text-sm">PDF - 320KB</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    
                    <h4 className="font-medium text-institutional-dark mt-6 mb-3">Importante:</h4>
                    <p className="text-gray-700 bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-400">
                      La inscripción se formaliza una vez presentada toda la documentación requerida y abonada la matrícula.
                      Los cupos son limitados y se asignan por orden de inscripción.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* FAQ */}
            <h2 className="section-title mb-8">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">
                    ¿Ofrecen becas o ayudas financieras?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Sí, el instituto cuenta con un programa de becas por mérito académico y necesidad económica. 
                    Puedes solicitar información específica en la oficina de admisiones.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">
                    ¿Es posible inscribirse en cualquier momento del año?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    La inscripción principal se realiza entre noviembre y febrero para el ciclo que comienza en marzo. 
                    También existe un período complementario en junio-julio para algunas carreras específicas,
                    sujeto a disponibilidad de vacantes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">
                    ¿Cómo puedo obtener más información sobre una carrera específica?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Puedes contactar directamente a la oficina de admisiones por teléfono o correo electrónico, 
                    o completar el formulario en nuestra página de contacto especificando la carrera de tu interés.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6">
                    ¿Los títulos tienen validez nacional?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Sí, todos nuestros títulos están reconocidos oficialmente por el Ministerio de Educación 
                    y tienen validez nacional. Las resoluciones ministeriales de aprobación están disponibles 
                    en las descripciones de cada carrera.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6">
                    ¿Qué opciones de horarios ofrecen para las clases?
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    La mayoría de nuestras carreras ofrecen opciones en turno mañana (8:00 a 12:30) 
                    y turno tarde/noche (17:00 a 21:30). Te recomendamos consultar los horarios específicos 
                    de la carrera que te interesa en la secretaría académica.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section
        <section id="contacto" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-institutional text-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-lora font-semibold mb-4">Contacta a Admisiones</h2>
                  <p className="mb-6">
                    Nuestro equipo de admisiones está disponible para resolver todas tus dudas y guiarte 
                    durante el proceso de inscripción.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Email:</span>
                      <a href="mailto:admisiones@sedessapientiae.edu.ar" className="hover:underline">
                        info@sedessapientiae.edu.ar
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Teléfonos:</span>
                      <div>
                        <a href="tel:+541149812190" className="hover:underline">(011) 4981-2190</a><br />
                        <a href="tel:+541149818350" className="hover:underline">(011) 4981-8350</a>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Horarios:</span>
                      <span>Lunes a viernes de 9:00 a 12:30 y 16:30 a 20:30</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <HelpCircle className="h-32 w-32 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
