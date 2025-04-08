
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, GraduationCap, BookOpen, FileText } from "lucide-react";
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
                <TabsTrigger value="preceptoria">Preceptoría</TabsTrigger>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesorado de Educación Secundaria en Filosofía</h3>
                          <p className="text-gray-600">Resolución 564/03</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación para la enseñanza de la Filosofía en el nivel secundario, con sólidos 
                        fundamentos filosóficos y pedagógicos.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-filosofia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Filosofía</li>
                                <li>Historia de la Filosofía Antigua</li>
                                <li>Psicología</li>
                                <li>Pedagogía</li>
                                <li>Introducción a la Teología</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia de la Filosofía Medieval</li>
                                <li>Lógica</li>
                                <li>Antropología Filosófica</li>
                                <li>Didáctica General</li>
                                <li>Filosofía de la Educación</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia de la Filosofía Moderna</li>
                                <li>Gnoseología</li>
                                <li>Ética</li>
                                <li>Didáctica de la Filosofía</li>
                                <li>Práctica de la Enseñanza</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Historia de la Filosofía Contemporánea</li>
                                <li>Metafísica</li>
                                <li>Filosofía de la Ciencia</li>
                                <li>Filosofía Política</li>
                                <li>Residencia Pedagógica</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="correlatividades-filosofia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Correlatividades
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="border border-gray-300 px-4 py-2 text-left">Para cursar</th>
                                      <th className="border border-gray-300 px-4 py-2 text-left">Debe tener regularizada</th>
                                      <th className="border border-gray-300 px-4 py-2 text-left">Debe tener aprobada</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Historia de la Filosofía Medieval</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Historia de la Filosofía Antigua</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Historia de la Filosofía Moderna</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Historia de la Filosofía Medieval</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Historia de la Filosofía Contemporánea</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Historia de la Filosofía Moderna</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Didáctica de la Filosofía</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Didáctica General</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Residencia Pedagógica</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Práctica de la Enseñanza</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesorado de Educación Secundaria en Ciencias Sagradas</h3>
                          <p className="text-gray-600">Resolución 564/03</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación para la enseñanza de la Religión y Ciencias Sagradas en el nivel secundario, 
                        con profundo conocimiento teológico y pedagógico.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-sagradas">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Sagrada Escritura</li>
                                <li>Antropología Teológica</li>
                                <li>Psicología</li>
                                <li>Pedagogía</li>
                                <li>Historia de la Iglesia</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Antiguo Testamento</li>
                                <li>Cristología</li>
                                <li>Didáctica General</li>
                                <li>Filosofía de la Educación</li>
                                <li>Teología Moral</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Nuevo Testamento</li>
                                <li>Eclesiología</li>
                                <li>Liturgia y Sacramentos</li>
                                <li>Didáctica de la Religión</li>
                                <li>Práctica de la Enseñanza</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Teología Pastoral</li>
                                <li>Doctrina Social de la Iglesia</li>
                                <li>Diálogo Fe y Cultura</li>
                                <li>Catequética</li>
                                <li>Residencia Pedagógica</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="correlatividades-sagradas">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Correlatividades
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="border border-gray-300 px-4 py-2 text-left">Para cursar</th>
                                      <th className="border border-gray-300 px-4 py-2 text-left">Debe tener regularizada</th>
                                      <th className="border border-gray-300 px-4 py-2 text-left">Debe tener aprobada</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Antiguo Testamento</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Introducción a la Sagrada Escritura</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Nuevo Testamento</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Antiguo Testamento</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Didáctica de la Religión</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Didáctica General</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Residencia Pedagógica</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Práctica de la Enseñanza</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Licenciatura en Filosofía</h3>
                          <p className="text-gray-600">Resolución 775/03</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación académica en filosofía para la investigación, la docencia universitaria 
                        y el análisis crítico de problemas contemporáneos.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-lic-filosofia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Filosofía</li>
                                <li>Historia de la Filosofía Antigua</li>
                                <li>Lógica I</li>
                                <li>Antropología</li>
                                <li>Metodología de la Investigación</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia de la Filosofía Medieval</li>
                                <li>Lógica II</li>
                                <li>Teoría del Conocimiento</li>
                                <li>Filosofía del Lenguaje</li>
                                <li>Seminario de Textos Clásicos</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia de la Filosofía Moderna</li>
                                <li>Metafísica</li>
                                <li>Ética</li>
                                <li>Filosofía de la Ciencia</li>
                                <li>Seminario de Investigación I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Historia de la Filosofía Contemporánea</li>
                                <li>Filosofía Política</li>
                                <li>Estética</li>
                                <li>Filosofía de la Religión</li>
                                <li>Seminario de Investigación II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Quinto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Filosofía Argentina y Latinoamericana</li>
                                <li>Filosofía de la Historia</li>
                                <li>Seminario de Temas Actuales</li>
                                <li>Taller de Tesis</li>
                                <li>Trabajo Final de Licenciatura</li>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Licenciatura en Ciencias Sagradas</h3>
                          <p className="text-gray-600">Resolución 775/03</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación académica integral en teología para la investigación, la docencia 
                        y el liderazgo en ámbitos pastorales y educativos.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-lic-sagradas">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Introducción a la Teología</li>
                                <li>Introducción a la Sagrada Escritura</li>
                                <li>Historia de la Iglesia Antigua y Medieval</li>
                                <li>Antropología Teológica</li>
                                <li>Metodología de la Investigación Teológica</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Antiguo Testamento I</li>
                                <li>Historia de la Iglesia Moderna y Contemporánea</li>
                                <li>Cristología</li>
                                <li>Teología Moral Fundamental</li>
                                <li>Patrología</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Antiguo Testamento II</li>
                                <li>Nuevo Testamento I</li>
                                <li>Eclesiología</li>
                                <li>Teología Moral Especial</li>
                                <li>Seminario de Investigación I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Nuevo Testamento II</li>
                                <li>Liturgia y Sacramentos</li>
                                <li>Teología Pastoral</li>
                                <li>Doctrina Social de la Iglesia</li>
                                <li>Seminario de Investigación II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Quinto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Teología Espiritual</li>
                                <li>Diálogo Interreligioso</li>
                                <li>Seminario de Temas Actuales</li>
                                <li>Taller de Tesis</li>
                                <li>Trabajo Final de Licenciatura</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Preceptoría Tab */}
              <TabsContent value="preceptoria">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <BookOpen className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Tecnicatura Superior en Preceptoría</h3>
                          <p className="text-gray-600">Resolución 189/03</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Formación técnica para el acompañamiento, orientación y asistencia de estudiantes 
                        en instituciones educativas de nivel secundario.
                      </p>
                      <div className="mt-4">
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-preceptoria">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Pedagogía</li>
                                <li>Psicología Evolutiva</li>
                                <li>Sociología de la Educación</li>
                                <li>Rol y Función del Preceptor</li>
                                <li>Dinámicas Grupales</li>
                                <li>Práctica I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                                <li>Legislación Escolar</li>
                                <li>Orientación Educativa y Vocacional</li>
                                <li>Ética Profesional</li>
                                <li>Resolución de Conflictos</li>
                                <li>Tecnología Educativa</li>
                                <li>Práctica II</li>
                                <li>Proyecto Final</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="correlatividades-preceptoria">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Correlatividades
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="border border-gray-300 px-4 py-2 text-left">Para cursar</th>
                                      <th className="border border-gray-300 px-4 py-2 text-left">Debe tener regularizada</th>
                                      <th className="border border-gray-300 px-4 py-2 text-left">Debe tener aprobada</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Práctica II</td>
                                      <td className="border border-gray-300 px-4 py-2">-</td>
                                      <td className="border border-gray-300 px-4 py-2">Práctica I</td>
                                    </tr>
                                    <tr>
                                      <td className="border border-gray-300 px-4 py-2">Proyecto Final</td>
                                      <td className="border border-gray-300 px-4 py-2">Todas las materias de 2do año</td>
                                      <td className="border border-gray-300 px-4 py-2">Todas las materias de 1er año</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-institutional/10 rounded-lg p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-4">¿Por qué estudiar Preceptoría en Sedes Sapientiae?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Formación integral con enfoque humanista y ético</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Prácticas profesionales en instituciones educativas de prestigio</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Docentes con amplia experiencia en el ámbito educativo</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Alta demanda laboral en instituciones públicas y privadas</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-institutional mr-2">✓</div>
                        <span className="text-gray-700">Carrera de corta duración con rápida inserción laboral</span>
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
                    <li>Títulos técnicos: Tecnicaturas (2 años)</li>
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
