
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
                XX Jornadas Institucionales
              </h1>
              <p className="text-lg mb-8">
                Nuestras jornadas institucionales son espacios de reflexión, debate y actualización para toda la comunidad educativa.
                Centradas en la formación integral, el diálogo académico y el fortalecimiento de nuestra identidad institucional.
              </p>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Próxima jornada: 15-16 de Mayo, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">Jornadas Institucionales 2025</h2>
            <p className="text-gray-700 max-w-3xl mb-12">
              Las XX Jornadas Institucionales del Instituto Superior Sedes Sapientiae abordarán 
              el tema <strong>"Educación y Humanismo Cristiano en el Siglo XXI: Desafíos y Perspectivas"</strong>.
              Estas jornadas serán una oportunidad para reflexionar sobre el rol de la educación 
              en la formación integral de la persona a la luz de los valores cristianos.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="bg-institutional text-white">
                    <CardTitle className="text-2xl">Programa de Actividades</CardTitle>
                    <CardDescription className="text-white/90">15 y 16 de mayo de 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Tabs defaultValue="dia-1">
                      <TabsList className="grid grid-cols-2 w-64 mb-6">
                        <TabsTrigger value="dia-1">Día 1</TabsTrigger>
                        <TabsTrigger value="dia-2">Día 2</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="dia-1">
                        <h3 className="text-lg font-semibold mb-3 text-institutional-dark">
                          Jueves 15 de Mayo
                        </h3>
                        <div className="space-y-6">
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">8:30 - 9:00</p>
                            <h4 className="font-medium">Acreditación</h4>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">9:00 - 9:30</p>
                            <h4 className="font-medium">Apertura y Bienvenida</h4>
                            <p className="text-gray-700 mt-1">
                              A cargo de autoridades institucionales
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">9:30 - 11:00</p>
                            <h4 className="font-medium">Conferencia Inaugural</h4>
                            <p className="text-gray-700 mt-1">
                              "Humanismo Cristiano y Educación: Fundamentos y Perspectivas"<br />
                              Disertante: Dr. Juan Carlos Mena (Universidad Católica Argentina)
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">11:00 - 11:30</p>
                            <h4 className="font-medium">Receso - Café</h4>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">11:30 - 13:00</p>
                            <h4 className="font-medium">Panel Interdisciplinario</h4>
                            <p className="text-gray-700 mt-1">
                              "La Persona Humana como Centro de la Acción Educativa"<br />
                              Panelistas: Especialistas en filosofía, teología y pedagogía
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">13:00 - 14:30</p>
                            <h4 className="font-medium">Almuerzo</h4>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">14:30 - 16:30</p>
                            <h4 className="font-medium">Talleres Simultáneos</h4>
                            <ul className="list-disc list-inside text-gray-700 mt-1">
                              <li>Taller 1: "Valores cristianos y convivencia escolar"</li>
                              <li>Taller 2: "Metodologías activas desde una perspectiva humanista"</li>
                              <li>Taller 3: "Acompañamiento integral del estudiante"</li>
                            </ul>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">16:30 - 17:00</p>
                            <h4 className="font-medium">Puesta en común y cierre del día</h4>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="dia-2">
                        <h3 className="text-lg font-semibold mb-3 text-institutional-dark">
                          Viernes 16 de Mayo
                        </h3>
                        <div className="space-y-6">
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">9:00 - 10:30</p>
                            <h4 className="font-medium">Conferencia</h4>
                            <p className="text-gray-700 mt-1">
                              "Desafíos de la Educación Superior en Tiempos de Cambio"<br />
                              Disertante: Dra. María Elena Vidal (Universidad de San Andrés)
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">10:30 - 11:00</p>
                            <h4 className="font-medium">Receso - Café</h4>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">11:00 - 12:30</p>
                            <h4 className="font-medium">Mesa Redonda</h4>
                            <p className="text-gray-700 mt-1">
                              "La Misión de las Instituciones Educativas Católicas en el Contexto Actual"<br />
                              Participantes: Representantes de instituciones educativas católicas
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">12:30 - 14:00</p>
                            <h4 className="font-medium">Almuerzo</h4>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">14:00 - 16:00</p>
                            <h4 className="font-medium">Trabajo Colaborativo</h4>
                            <p className="text-gray-700 mt-1">
                              Elaboración de propuestas para fortalecer la identidad institucional 
                              y el proyecto educativo a la luz del humanismo cristiano
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">16:00 - 17:00</p>
                            <h4 className="font-medium">Presentación de Conclusiones y Cierre</h4>
                            <p className="text-gray-700 mt-1">
                              Síntesis de las jornadas y proyección institucional<br />
                              Palabras finales a cargo del Rector
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-institutional pl-4">
                            <p className="text-gray-500">17:00</p>
                            <h4 className="font-medium">Ágape de Cierre</h4>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <div className="mt-8 p-4 bg-gray-50 rounded-md">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-institutional mr-2 mt-1" />
                        <div>
                          <h4 className="font-medium mb-1">Cronograma Completo</h4>
                          <p className="text-gray-700 mb-2">
                            Descarga el programa detallado de las jornadas con información sobre los disertantes y contenidos.
                          </p>
                          <a 
                            href="#" 
                            className="inline-flex items-center text-institutional hover:text-institutional-dark"
                          >
                            <Download className="h-4 w-4 mr-1" />
                            <span>Descargar programa (PDF)</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="bg-institutional/10">
                    <CardTitle>Información General</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <h3 className="flex items-center text-lg font-medium mb-2">
                        <MapPin className="h-5 w-5 text-institutional mr-2" />
                        <span>Ubicación</span>
                      </h3>
                      <p className="text-gray-700">
                        Auditorio Principal<br />
                        Instituto Superior Sedes Sapientiae<br />
                        Av. Gaona 1851, CABA
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="flex items-center text-lg font-medium mb-2">
                        <Users className="h-5 w-5 text-institutional mr-2" />
                        <span>Destinatarios</span>
                      </h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Directivos y docentes</li>
                        <li>Estudiantes avanzados</li>
                        <li>Graduados</li>
                        <li>Comunidad educativa en general</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="flex items-center text-lg font-medium mb-2">
                        <FileText className="h-5 w-5 text-institutional mr-2" />
                        <span>Certificación</span>
                      </h3>
                      <p className="text-gray-700">
                        Se entregará certificado de asistencia con valor académico de 15 horas reloj.
                        Requisito: 100% de asistencia a las actividades programadas.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="flex items-center text-lg font-medium mb-2">
                        <Clock className="h-5 w-5 text-institutional mr-2" />
                        <span>Inscripción</span>
                      </h3>
                      <p className="text-gray-700 mb-3">
                        La inscripción permanecerá abierta hasta el 10 de mayo o hasta agotar cupos disponibles.
                      </p>
                      <div className="flex flex-col space-y-2">
                        <a 
                          href="#" 
                          className="inline-flex items-center justify-center bg-institutional text-white py-2 px-4 rounded-md hover:bg-institutional-dark transition-colors duration-200 w-full"
                        >
                          Inscripción Online
                        </a>
                        <a 
                          href="#" 
                          className="inline-flex items-center justify-center border border-institutional text-institutional py-2 px-4 rounded-md hover:bg-institutional/10 transition-colors duration-200 w-full"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Formulario de Inscripción
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader className="bg-institutional/10">
                    <CardTitle>Jornadas Anteriores</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-institutional font-medium hover:text-institutional-dark">
                          XIX Jornadas (2024): "Educación y Ecología Integral"
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-institutional font-medium hover:text-institutional-dark">
                          XVIII Jornadas (2023): "Educación Post-pandemia: Nuevos Paradigmas"
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-institutional font-medium hover:text-institutional-dark">
                          XVII Jornadas (2022): "Educación Híbrida y Nuevas Tecnologías"
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
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
                    Las XX Jornadas Institucionales son una oportunidad única para compartir experiencias, 
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
                    src="/assets/images/placeholder.svg" 
                    alt="Jornada Institucional" 
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

export default InstitutionalDays;
