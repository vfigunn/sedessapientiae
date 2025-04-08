
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, BookOpen, Clock, Award, CalendarDays, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PublicAccountant = () => {
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
                  <BreadcrumbLink asChild>
                    <Link to="/carreras" className="hover:text-institutional">
                      Carreras
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-institutional">Contador Público</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-institutional text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-institutional-light px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Educación Superior
                </span>
                <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6">Contador Público</h1>
                <p className="text-lg mb-8">
                  Formación integral para profesionales que contribuyan responsablemente al desarrollo económico 
                  y social desde una sólida base técnica y ética.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/carreras" 
                    className="bg-white text-institutional py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    Ver plan de estudios
                  </a>
                  <Link 
                    to="/admisiones" 
                    className="bg-institutional-light text-white py-2 px-4 rounded-md hover:bg-institutional-dark transition-colors duration-200"
                  >
                    Solicitar información
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://i.ibb.co/tT3NQMB5/headerucsf01.png" 
                  alt="Estudiantes de Contaduría" 
                  className="rounded-lg shadow-lg h-80 w-full object-fill"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>Duración</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>5 años</li>
                    <li>Modalidad presencial</li>
                    <li>Horarios: tarde y noche</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle>Título</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Contador Público</li>
                    <li>Título oficial con validez nacional</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <div className="w-12 h-12 bg-institutional/10 text-institutional rounded-full flex items-center justify-center mb-3">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <CardTitle>Ciclo Lectivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Inicio: Marzo 2025</li>
                    <li>Inscripciones: Noviembre a Febrero</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Description */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title mb-8">Perfil del Graduado</h2>
                <p className="text-gray-700 mb-4">
                  El Contador Público egresado del Instituto Superior Sedes Sapientiae está formado para:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Actuar profesionalmente en organizaciones de todo tipo, con sólidos conocimientos técnicos y una 
                      visión integral del funcionamiento de los sistemas contables.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Asesorar en aspectos contables, impositivos, laborales, previsionales y financieros con responsabilidad 
                      social y criterio ético.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Participar en el diseño e implementación de sistemas de información contable en organizaciones públicas y privadas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-institutional mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Integrar equipos interdisciplinarios para el análisis y resolución de problemas en el ámbito económico-financiero.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Campo Laboral</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Estudio contable propio o asociado</li>
                    <li>Áreas contables, financieras y de auditoría en empresas</li>
                    <li>Organismos públicos y entidades sin fines de lucro</li>
                    <li>Auditoría externa e interna</li>
                    <li>Consultoría y asesoramiento tributario</li>
                    <li>Peritaje contable judicial</li>
                    <li>Docencia e investigación</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Competencias Desarrolladas</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Análisis e interpretación de información contable y financiera</li>
                    <li>Planificación y gestión tributaria</li>
                    <li>Auditoría de estados contables</li>
                    <li>Evaluación de proyectos de inversión</li>
                    <li>Resolución de problemas con pensamiento crítico</li>
                    <li>Trabajo en equipo y comunicación efectiva</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Study Plan */}
        <section id="plan-de-estudios" className="py-12">
          <div className="container mx-auto px-4">

            {/* CTA */}
            <div className="bg-institutional text-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-lora font-semibold mb-4">¿Estás listo para comenzar tu formación profesional?</h2>
                  <p className="mb-6">
                    Inicia tu camino hacia una carrera sólida y con amplias oportunidades profesionales. 
                    Solicita información sobre el proceso de admisión a la carrera de Contador Público.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      to="/admisiones" 
                      className="bg-white text-institutional py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    >
                      Proceso de admisión
                    </Link>
                    <a 
                      href="mailto:admisiones@sedessapientiae.edu.ar" 
                      className="bg-institutional-light text-white py-2 px-4 rounded-md hover:bg-institutional-dark transition-colors duration-200"
                    >
                      Contactar a un asesor
                    </a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://i.ibb.co/d4412Gkb/headerucsf02.png" 
                    alt="Estudiantes en clase" 
                    className="rounded-lg h-64 w-full object-contain"
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

export default PublicAccountant;
