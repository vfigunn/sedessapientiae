
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, GraduationCap, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => {
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
                  <BreadcrumbLink className="text-institutional">Carreras</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-institutional py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-lora font-bold mb-6">Oferta Académica</h1>
              <p className="text-lg md:text-xl mb-8">
                Nuestras carreras están diseñadas para formar profesionales con compromiso ético, 
                excelencia académica y visión integral del ser humano.
              </p>
            </div>
          </div>
        </section>

        {/* Career Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">Nuestras Carreras</h2>
            
            <Tabs defaultValue="profesorados" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="profesorados">Profesorados</TabsTrigger>
                <TabsTrigger value="licenciaturas">Licenciaturas</TabsTrigger>
                <TabsTrigger value="tecnicaturas">Tecnicaturas</TabsTrigger>
              </TabsList>
              
              {/* Profesorados Tab */}
              <TabsContent value="profesorados">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <GraduationCap className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesorado de Inglés</h3>
                          <p className="text-gray-600">Formación docente</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Prepara docentes especializados en la enseñanza del idioma inglés para niveles secundario y superior.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-ingles">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Lengua Inglesa I</li>
                                <li>Gramática Inglesa</li>
                                <li>Fonética y Fonología</li>
                                <li>Didáctica General</li>
                                <li>Pedagogía</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Lengua Inglesa II</li>
                                <li>Literatura Inglesa</li>
                                <li>Lingüística</li>
                                <li>Didáctica Específica del Inglés</li>
                                <li>Psicología Educacional</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Lengua Inglesa III</li>
                                <li>Literatura Norteamericana</li>
                                <li>Práctica de la Enseñanza</li>
                                <li>Teorías del Aprendizaje</li>
                                <li>Cultura Anglo-Sajona</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Lengua Inglesa IV</li>
                                <li>Literatura Comparada</li>
                                <li>Residencia Pedagógica</li>
                                <li>Investigación Educativa</li>
                                <li>Seminario de Actualización Docente</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <GraduationCap className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesorado de Literatura</h3>
                          <p className="text-gray-600">Formación docente</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación de profesionales especializados en la enseñanza de literatura en niveles secundario y superior.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-literatura">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Literatura</li>
                                <li>Teoría Literaria</li>
                                <li>Historia de la Literatura Universal</li>
                                <li>Didáctica General</li>
                                <li>Pedagogía</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Literatura Argentina</li>
                                <li>Literatura Latinoamericana</li>
                                <li>Análisis Literario</li>
                                <li>Didáctica de la Literatura</li>
                                <li>Psicología Educacional</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Literatura Española</li>
                                <li>Literatura Comparada</li>
                                <li>Práctica de la Enseñanza</li>
                                <li>Teorías del Aprendizaje</li>
                                <li>Crítica Literaria</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Literatura Contemporánea</li>
                                <li>Seminario de Investigación Literaria</li>
                                <li>Residencia Pedagógica</li>
                                <li>Investigación Educativa</li>
                                <li>Seminario de Actualización Docente</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Licenciaturas Tab */}
              <TabsContent value="licenciaturas">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <FileText className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Licenciatura en Historia</h3>
                          <p className="text-gray-600">Formación académica</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación académica para la investigación, docencia y análisis histórico con perspectiva crítica.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-historia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Historia</li>
                                <li>Historiografía Argentina</li>
                                <li>Historia Universal Antigua</li>
                                <li>Metodología de la Investigación</li>
                                <li>Teoría Social</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia Medieval</li>
                                <li>Historia Latinoamericana</li>
                                <li>Fuentes Históricas</li>
                                <li>Hermenéutica Histórica</li>
                                <li>Antropología Cultural</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia Moderna</li>
                                <li>Historia Argentina</li>
                                <li>Seminario de Investigación I</li>
                                <li>Teoría Política</li>
                                <li>Archivística</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia Contemporánea</li>
                                <li>Historia del Pensamiento</li>
                                <li>Seminario de Investigación II</li>
                                <li>Geopolítica</li>
                                <li>Metodologías Comparativas</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Quinto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Seminario de Tesis</li>
                                <li>Historia Regional</li>
                                <li>Taller de Investigación</li>
                                <li>Trabajo Final de Licenciatura</li>
                                <li>Seminario de Especialización</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <FileText className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Licenciatura en Economía</h3>
                          <p className="text-gray-600">Formación académica</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación de profesionales especializados en análisis económico, investigación y gestión.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-economia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Economía</li>
                                <li>Matemática I</li>
                                <li>Microeconomía</li>
                                <li>Contabilidad Básica</li>
                                <li>Estadística</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Macroeconomía</li>
                                <li>Matemática II</li>
                                <li>Economía Internacional</li>
                                <li>Derecho Económico</li>
                                <li>Finanzas Públicas</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Econometría</li>
                                <li>Economía Argentina</li>
                                <li>Desarrollo Económico</li>
                                <li>Política Económica</li>
                                <li>Seminario de Investigación</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Economía Contemporánea</li>
                                <li>Economía Latinoamericana</li>
                                <li>Teoría de la Decisión</li>
                                <li>Economía Social</li>
                                <li>Taller de Investigación</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Quinto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Seminario de Tesis</li>
                                <li>Economía Ética</li>
                                <li>Trabajo Final de Licenciatura</li>
                                <li>Seminario de Actualización</li>
                                <li>Gestión Estratégica</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Tecnicaturas Tab */}
              <TabsContent value="tecnicaturas">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <BookOpen className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Tecnicatura en Ciencias de la Computación</h3>
                          <p className="text-gray-600">Formación técnica</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación técnica en desarrollo de software, programación y sistemas informáticos.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-computacion">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Programación I</li>
                                <li>Matemática Computacional</li>
                                <li>Fundamentos de Computación</li>
                                <li>Introducción a la Lógica</li>
                                <li>Sistemas Operativos</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Programación II</li>
                                <li>Estructura de Datos</li>
                                <li>Bases de Datos</li>
                                <li>Redes de Computadoras</li>
                                <li>Algoritmos</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Desarrollo Web</li>
                                <li>Seguridad Informática</li>
                                <li>Inteligencia Artificial</li>
                                <li>Proyecto Final de Desarrollo</li>
                                <li>Práctica Profesional</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-institutional/10 rounded-lg p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">¿Por qué estudiar en Sedes Sapientiae?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Formación integral con enfoque humanista</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Docentes altamente calificados</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Títulos oficiales con validez nacional</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Infraestructura moderna y tecnológica</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Prácticas profesionales y académicas</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link 
                        to="/admisiones" 
                        className="inline-flex items-center text-institutional font-medium hover:text-institutional-dark transition-colors duration-200"
                      >
                        Más información sobre admisiones →
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Additional Info */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">Información General</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Titulaciones</h3>
                  <p className="text-gray-700 mb-4">
                    Todas nuestras carreras otorgan títulos oficiales con validez nacional, 
                    habilitantes para el ejercicio profesional en todo el territorio argentino.
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Títulos de grado: Licenciaturas (5 años)</li>
                    <li>Títulos docentes: Profesorados (4 años)</li>
                    <li>Títulos técnicos: Tecnicaturas (2-3 años)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Modalidad de Cursada</h3>
                  <p className="text-gray-700 mb-4">
                    Las carreras se dictan en modalidad presencial, con opciones de horarios 
                    flexibles para facilitar el acceso a estudiantes que trabajan.
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Turnos: Mañana, tarde y noche</li>
                    <li>Asistencia obligatoria: 75%</li>
                    <li>Algunas materias con opción semipresencial</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">Becas y Financiamiento</h3>
                  <p className="text-gray-700 mb-4">
                    El instituto ofrece diversos programas de becas y opciones de financiamiento 
                    para facilitar el acceso a la educación superior.
                  </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Becas por mérito académico</li>
                    <li>Becas por situación socioeconómica</li>
                    <li>Descuentos por hermanos o familias</li>
                    <li>Planes de pago flexibles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
