
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Calendar, MapPin, Clock, Users } from "lucide-react";
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
                Jornadas Institucionales 2025
              </h1>
              <p className="text-lg mb-8">
                Espacios de reflexión, debate y actualización para nuestra comunidad educativa. 
                Las jornadas institucionales son momentos privilegiados para el encuentro, el intercambio 
                y la formación continua.
              </p>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Próxima jornada: 15 de Mayo, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">Calendario de Jornadas</h2>
            <p className="text-gray-700 max-w-3xl mb-12">
              Las jornadas institucionales del Instituto Superior Sedes Sapientiae se desarrollan 
              a lo largo del año académico, abordando temáticas relevantes para la formación integral 
              de nuestra comunidad educativa. Consulta nuestro calendario para no perderte ninguna actividad.
            </p>

            <Tabs defaultValue="primer-semestre" className="mb-16">
              <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
                <TabsTrigger value="primer-semestre">Primer Semestre</TabsTrigger>
                <TabsTrigger value="segundo-semestre">Segundo Semestre</TabsTrigger>
              </TabsList>
              <TabsContent value="primer-semestre">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover">
                    <CardHeader className="bg-institutional/5 border-b">
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-institutional" />
                        15 de Marzo, 2025
                      </CardTitle>
                      <CardDescription>Jornada de Inicio Académico</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-institutional-dark mb-3">Educación y Valores en el Siglo XXI</h3>
                      <p className="text-gray-700 mb-4">
                        Reflexión sobre los desafíos de la educación contemporánea y el papel de los valores 
                        humanos y cristianos en la formación integral.
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-institutional" />
                          <span>9:00 - 16:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-institutional" />
                          <span>Auditorio Principal - Sede Central</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-institutional" />
                          <span>Destinatarios: Docentes y Directivos</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 flex justify-end">
                      <a 
                        href="#" 
                        className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                      >
                        Ver programa completo →
                      </a>
                    </CardFooter>
                  </Card>

                  <Card className="card-hover">
                    <CardHeader className="bg-institutional/5 border-b">
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-institutional" />
                        15 de Mayo, 2025
                      </CardTitle>
                      <CardDescription>Jornada de Formación Docente</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-institutional-dark mb-3">Innovación Pedagógica y Nuevas Tecnologías</h3>
                      <p className="text-gray-700 mb-4">
                        Estrategias y herramientas para la incorporación efectiva de recursos tecnológicos 
                        en el proceso de enseñanza-aprendizaje.
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-institutional" />
                          <span>9:00 - 17:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-institutional" />
                          <span>Laboratorio Multimedia - Sede Central</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-institutional" />
                          <span>Destinatarios: Docentes</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 flex justify-end">
                      <a 
                        href="#" 
                        className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                      >
                        Ver programa completo →
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="segundo-semestre">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover">
                    <CardHeader className="bg-institutional/5 border-b">
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-institutional" />
                        20 de Agosto, 2025
                      </CardTitle>
                      <CardDescription>Jornada de Investigación</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-institutional-dark mb-3">Desafíos de la Investigación Educativa</h3>
                      <p className="text-gray-700 mb-4">
                        Presentación de proyectos de investigación en curso y reflexión sobre metodologías 
                        y enfoques innovadores en la investigación educativa.
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-institutional" />
                          <span>10:00 - 16:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-institutional" />
                          <span>Sala de Conferencias - Sede Central</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-institutional" />
                          <span>Destinatarios: Docentes, Investigadores y Estudiantes Avanzados</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 flex justify-end">
                      <a 
                        href="#" 
                        className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                      >
                        Ver programa completo →
                      </a>
                    </CardFooter>
                  </Card>

                  <Card className="card-hover">
                    <CardHeader className="bg-institutional/5 border-b">
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-institutional" />
                        25 de Octubre, 2025
                      </CardTitle>
                      <CardDescription>Jornada de Integración</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-institutional-dark mb-3">Comunidad Educativa: Construyendo Puentes</h3>
                      <p className="text-gray-700 mb-4">
                        Espacio de encuentro e integración entre todos los miembros de la comunidad educativa, 
                        con actividades de reflexión, trabajo colaborativo y celebración.
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-institutional" />
                          <span>9:00 - 18:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-institutional" />
                          <span>Instituto completo - Sede Central</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-institutional" />
                          <span>Destinatarios: Toda la comunidad educativa</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t bg-gray-50 flex justify-end">
                      <a 
                        href="#" 
                        className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                      >
                        Ver programa completo →
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Previous Conferences */}
            <h2 className="text-2xl font-lora font-semibold text-institutional-dark mb-8">Jornadas Anteriores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Educación y Ecología Integral</li>
                    <li>Neurociencias y Aprendizaje</li>
                    <li>Liderazgo Educativo</li>
                    <li>Evaluación Formativa</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <a 
                    href="#" 
                    className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                  >
                    Ver archivo →
                  </a>
                </CardFooter>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Educación Post-pandemia</li>
                    <li>Inclusión y Diversidad</li>
                    <li>Identidad Institucional</li>
                    <li>Formación Humana Integral</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <a 
                    href="#" 
                    className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                  >
                    Ver archivo →
                  </a>
                </CardFooter>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>2022</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Educación Híbrida</li>
                    <li>Bicentenario y Educación</li>
                    <li>Acompañamiento Tutorial</li>
                    <li>Desarrollo Profesional Docente</li>
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <a 
                    href="#" 
                    className="text-institutional hover:text-institutional-dark transition-colors duration-200"
                  >
                    Ver archivo →
                  </a>
                </CardFooter>
              </Card>
            </div>

            {/* Registration CTA */}
            <div className="bg-institutional text-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-lora font-semibold mb-4">¿Quieres participar en nuestras jornadas?</h2>
                  <p className="mb-6">
                    Si eres miembro de nuestra comunidad educativa o quieres participar como invitado en 
                    alguna de nuestras jornadas institucionales, completa el formulario de inscripción.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white text-institutional py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200"
                  >
                    Inscribirse a próxima jornada
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
