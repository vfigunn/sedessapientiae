
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, GraduationCap, Calendar, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Alumni = () => {
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
                  <BreadcrumbLink className="text-institutional">Graduados</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="section-title mb-8">Red de Graduados</h1>
            <p className="text-gray-700 max-w-3xl mb-12">
              Los graduados del Instituto Superior Sedes Sapientiae forman parte de una comunidad 
              que mantiene vivo el espíritu y los valores de nuestra institución. Nuestra red de alumni 
              facilita la continuidad del vínculo con el instituto, ofreciendo oportunidades de desarrollo 
              profesional, formación continua y networking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <CardTitle>Beneficios Académicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Descuentos en cursos de posgrado</li>
                    <li>Acceso a la biblioteca especializada</li>
                    <li>Participación en seminarios exclusivos</li>
                    <li>Programas de actualización profesional</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle>Red Profesional</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Directorio de graduados</li>
                    <li>Bolsa de trabajo exclusiva</li>
                    <li>Mentorías profesionales</li>
                    <li>Encuentros de networking</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <CardTitle>Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Encuentro anual de graduados</li>
                    <li>Conferencias con referentes del sector</li>
                    <li>Eventos sociales y culturales</li>
                    <li>Voluntariados y proyectos comunitarios</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-lora font-semibold text-institutional-dark mb-6">Testimonios de Graduados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <blockquote className="border-l-4 border-institutional pl-4 italic text-gray-700">
                  "Mi formación en Sedes Sapientiae me brindó no solo conocimientos académicos sólidos, 
                  sino también valores y herramientas que han sido fundamentales en mi desarrollo profesional. 
                  La red de graduados me ha permitido mantenerme conectado y seguir creciendo junto a colegas 
                  excepcionales."
                  <footer className="mt-2 font-semibold not-italic">— María Fernández, Profesora de Filosofía, Graduada 2018</footer>
                </blockquote>
                <blockquote className="border-l-4 border-institutional pl-4 italic text-gray-700">
                  "Ser parte de la comunidad de graduados del instituto ha significado continuar un camino de 
                  formación permanente y establecer contactos profesionales valiosos. Los eventos y seminarios 
                  exclusivos me mantienen actualizado en mi campo de especialización."
                  <footer className="mt-2 font-semibold not-italic">— Carlos Rodríguez, Licenciado en Teología, Graduado 2015</footer>
                </blockquote>
              </div>
            </div>

            <div className="bg-institutional text-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-lora font-semibold mb-4">¿Eres graduado? ¡Únete a nuestra red!</h2>
                  <p className="mb-6">
                    Si eres graduado del Instituto Superior Sedes Sapientiae y aún no formas parte de nuestra 
                    red de alumni, te invitamos a registrarte para acceder a todos los beneficios y mantenerte 
                    conectado con nuestra comunidad educativa.
                  </p>
                  <a 
                    href="mailto:graduados@sedessapientiae.edu.ar" 
                    className="inline-flex items-center bg-white text-institutional py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Contactar a Red de Graduados
                  </a>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="/assets/images/placeholder.svg" 
                    alt="Graduados del Instituto" 
                    className="rounded-lg h-64 w-full object-cover"
                  />
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

export default Alumni;
