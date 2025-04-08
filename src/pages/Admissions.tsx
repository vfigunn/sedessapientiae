
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, CheckCircle2, FileCheck, Calendar, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
            <h2 className="section-title mb-12">Pasos para tu Admisión</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <CardTitle>Solicitud de Información</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Completa el formulario de solicitud de información o contacta directamente con nuestra 
                    oficina de admisiones para obtener detalles sobre la carrera de tu interés.
                  </p>
                  <a 
                    href="#contacto" 
                    className="text-institutional hover:text-institutional-dark transition-colors duration-200 font-medium"
                  >
                    Contactar admisiones →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <CardTitle>Entrevista Personal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Programa una entrevista con nuestro equipo de admisiones para conocer más sobre tu perfil, 
                    intereses y expectativas. Te orientaremos sobre la carrera que mejor se adapte a tus objetivos.
                  </p>
                  <a 
                    href="#calendario" 
                    className="text-institutional hover:text-institutional-dark transition-colors duration-200 font-medium"
                  >
                    Ver calendario de entrevistas →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <CardTitle>Inscripción Formal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Una vez aceptado, completa la documentación requerida y realiza el pago de la matrícula 
                    para asegurar tu lugar en la carrera seleccionada.
                  </p>
                  <a 
                    href="#requisitos" 
                    className="text-institutional hover:text-institutional-dark transition-colors duration-200 font-medium"
                  >
                    Ver requisitos de inscripción →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requisitos" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">Requisitos de Admisión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
                    <span className="text-gray-700">Certificado de salud psicofísica expedido por hospital público</span>
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

              <div>
                <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Calendario de Admisión</h3>
                <div id="calendario" className="bg-white p-6 rounded-lg shadow-sm mb-8">
                  <h4 className="font-medium text-institutional mb-4">Período Principal</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Noviembre - Enero:</strong> Inscripción temprana</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Febrero:</strong> Inscripción regular</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Marzo:</strong> Inicio de clases</span>
                    </li>
                  </ul>

                  <h4 className="font-medium text-institutional mt-6 mb-4">Período Complementario</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Junio - Julio:</strong> Inscripción para el segundo semestre</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Agosto:</strong> Inicio de clases segundo semestre</span>
                    </li>
                  </ul>
                </div>

                {/* FAQ */}
                <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Preguntas Frecuentes</h3>
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
                      También existe un período complementario en junio-julio para algunas carreras específicas.
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
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-12">
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
                        admisiones@sedessapientiae.edu.ar
                      </a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Teléfono:</span>
                      <a href="tel:+541149812190" className="hover:underline">(011) 4981-2190</a>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Horarios:</span>
                      <span>Lunes a Viernes de 9:00 a 18:00</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <HelpCircle className="h-32 w-32 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
