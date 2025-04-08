
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Calendar, MapPin, Clock, Users, FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstitutionalDays = () => {
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
                  <BreadcrumbLink className="text-institutional">Jornadas Institucionales</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-institutional-dark opacity-80"></div>
          <div className="container mx-auto px-4 py-20 relative z-10 text-white">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-lora font-bold mb-6">
                Jornadas Institucionales
              </h1>
              <p className="text-lg mb-8">
                Nuestras jornadas institucionales son espacios de reflexión, debate y actualización para toda la comunidad educativa.
                Centradas en la formación integral, el diálogo académico y el fortalecimiento de nuestra identidad institucional.
              </p>
              {/* <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Próxima jornada: 15-16 de Mayo, 2025</span>
              </div> */}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">Jornadas Institucionales 2025</h2>
            <p className="text-gray-700 max-w-3xl mb-12">
              Las Jornadas Institucionales del Instituto Superior Sedes Sapientiae abordarán 
              el tema <strong>"Educación y Humanismo Cristiano en el Siglo XXI: Desafíos y Perspectivas"</strong>.
              Estas jornadas serán una oportunidad para reflexionar sobre el rol de la educación 
              en la formación integral de la persona a la luz de los valores cristianos.
            </p>



          <div className="mb-12">
            <h2 className="text-2xl font-lora font-bold text-institutional mb-4">Hitos Importantes</h2>
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2024 | Octava Jornada</h3>
                <p className="text-gray-700">“Desafíos y oportunidades en la era de la Inteligencia Artificial Generativa. ¿Estamos preparados para esta revolución educativa?”</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2023 | Séptima Jornada</h3>
                <p className="text-gray-700">“Educación Emocional como eje transversal del proceso educativo”</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2022 | Sexta Jornada</h3>
                <p className="text-gray-700">"AULAS INCLUSIVAS: hacia la diversificación curricular y la identificación de barreras para el aprendizaje "</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2021 | Quinta Jornada</h3>
                <p className="text-gray-700">"El arte docente en tiempos de incertidumbre"</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2020 | Cuarta Jornada</h3>
                <p className="text-gray-700">"De prácticas y mediaciones en la virtualidad repentina"</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2019 | Tercer Jornada</h3>
                <p className="text-gray-700">"La lectura y la escritura  como clave transversal para todo aprendizaje".</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2018 | Segunda Jornada</h3>
                <p className="text-gray-700">"Pensando la Docencia en clave de diseño"</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2017 | Primer Jornada</h3>
                <p className="text-gray-700">"Enseñar y aprender en la Sociedad de la información y del Conocimiento"</p>
              </div>
            </div>
          </div>







            {/* Disertantes */}
            <div className="mb-16">
              <h2 className="section-title mb-10">Disertantes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="text-xl font-lora text-center font-semibold text-institutional-dark mb-2">Dr. Juan Carlos Mena</h3>
                    <p className="text-center text-gray-600 mb-4">Universidad Católica Argentina</p>
                    <p className="text-gray-700">
                      Doctor en Filosofía y especialista en Humanismo Cristiano. Autor de numerosas 
                      publicaciones sobre ética y antropología filosófica. Director del Centro de 
                      Investigaciones en Filosofía y Educación.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="text-xl font-lora text-center font-semibold text-institutional-dark mb-2">Dra. María Elena Vidal</h3>
                    <p className="text-center text-gray-600 mb-4">Universidad de San Andrés</p>
                    <p className="text-gray-700">
                      Doctora en Ciencias de la Educación, con especialización en gestión de 
                      instituciones educativas. Consultora internacional en proyectos de innovación 
                      pedagógica y formación docente.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="text-xl font-lora text-center font-semibold text-institutional-dark mb-2">Pbro. Dr. Alberto Figueroa</h3>
                    <p className="text-center text-gray-600 mb-4">Universidad Pontificia de Salamanca</p>
                    <p className="text-gray-700">
                      Doctor en Teología y licenciado en Pedagogía. Especialista en pastoral educativa 
                      y formación de educadores. Coordinador de la Red de Instituciones Católicas de 
                      Educación Superior de América Latina.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration CTA */}
            <div className="bg-institutional text-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-lora font-semibold mb-4">¿Quieres participar en nuestras jornadas?</h2>
                  <p className="mb-6">
                    Las Jornadas Institucionales son una oportunidad única para compartir experiencias, 
                    reflexionar sobre la práctica educativa y fortalecer nuestra identidad institucional. 
                    ¡Te esperamos!
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white text-institutional py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    Inscribirse ahora
                  </a>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://i.ibb.co/SwDs7tNt/headejornadas01.png" 
                    alt="Jornada Institucional" 
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

export default InstitutionalDays;
