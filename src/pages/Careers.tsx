
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
                <TabsTrigger value="tecnicaturas">Tecnicaturas</TabsTrigger>
                <TabsTrigger value="degrado">Carreras de Grado</TabsTrigger>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesor/a de Inglés</h3>
                          <p className="text-gray-600">Formación docente</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      Puede ejercer la docencia en distintos ámbitos y la creciente demanda del inglés genera una alta necesidad de profesores capacitados.
                      </p>
                      <div className="mt-4">
                        <a href="src\correlativas\profesorado-de-ingles_correlativas.pdf" className="text-institutional underline font-medium" download={'profesorado-de-ingles_correlativas.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-ingles">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Pedagogía</li>
                                <li>Corporeidad, Juego y Lenguajes Acústicos</li>
                                <li>Oralidad, Lectura, Escritura y TIC</li>
                                <li>Didáctica General</li>
                                <li>Lengua Inglesa I</li>
                                <li>Gramática Inglesa I</li>
                                <li>Fonética I</li>
                                <li>Cultura de los Publos de Habla Inglesa I</li>
                                <li>Práctica Docente I</li>
                                <li>Seminario de integración Fe - cultura y vida I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Filosofía</li>
                                <li>Historial Social y Política Argentina y Latinoamericana</li>
                                <li>Psicología Educacional</li>
                                <li>Eduación Sexual Integal</li>
                                <li>Lengua Inglesa II</li>
                                <li>Fonética II</li>
                                <li>Grámatica Inglesa II</li>
                                <li>Didáctica de la Lengua Inglesa I</li>
                                <li>Sujetos de la Educación</li>
                                <li>Práctica Docente II</li>
                                <li>Seminario de integración Fe – cultura y vida II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                                <li>Anál. Y Org. De las Inst. Educativas</li>
                                <li>Historia y Política de la Educación Argentina</li>
                                <li>Sociología de la Educación</li>
                                <li>Lengua Inglesa III</li>
                                <li>Didáctica de la Lengua Inglesa II</li>
                                <li>Epistemología de la Lengua Inglesa</li>
                                <li>Fonética III</li>
                                <li>Literatura de los Pueblos de Habla Inglesa I</li>
                                <li>UDI</li>
                                <li>Práctica Docente III</li>
                                <li>Seminario de integración Fe – cultura y vida III</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Derechos Humanos: Ética y Ciudadanía</li>
                              <li>Lengua Inglesa IV</li>
                              <li>Lenguas Comparadas</li>
                              <li>Cultura de los Pueblos de Habla Inglesa II</li>
                              <li>Lingüística</li>
                              <li>Literatura de los Pueblos de Habla Inglesa II</li>
                              <li>UDI</li>
                              <li>Práctica Docente IV</li>
                              <li>Seminario de integración Fe – cultura y vida IV</li>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesor/a de Secundaria en Lengua y Literatura</h3>
                          <p className="text-gray-600">Formación docente</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      El egresado podrá enseñar, investigar, redactar, corregir y asesorar en lengua y literatura.
                      </p>
                      <div className="mt-4">
                      <a href="src\correlativas\correlativas_lengua_literatura.pdf" className="text-institutional underline font-medium" download={'correlativas_lengua_literatura.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-literatura">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Pedagogía</li>
                              <li>Corporeidad, Juego y Lenguajes Artísticos</li>
                              <li>Oralidad, Lectura, Escritura y TIC</li>
                              <li>Didáctica General</li>
                              <li>Gramática I</li>
                              <li>Literatura Universal I</li>
                              <li>Teoría Literaria</li>
                              <li>Literatura Española</li>
                              <li>Práctica Docente I</li>
                              <li>Seminario de integración Fe – cultura y vida I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Filosofía</li>
                              <li>Historial Social y Política Argentina y Latinoamericana</li>
                              <li>Psicología Educacional</li>
                              <li>Educación Sexual Integral</li>
                              <li>Gramática II</li>
                              <li>Literatura Universal II</li>
                              <li>Lengua y Literatura Clásica I: Latín</li>
                              <li>Didáctica de la Lengua y la Literatura I</li>
                              <li>Sujetos de la Educación Secundaria</li>
                              <li>Práctica Docente II</li>
                              <li>Seminario de integración Fe – cultura y vida II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Análisis y Organización de las Instituciones Educativas</li>
                              <li>Historia y Política de la Educación Argentina</li>
                              <li>Sociología de la Educación</li>
                              <li>Literatura Argentina I</li>
                              <li>Didáctica de la Lengua y la Literatura II</li>
                              <li>Epistemología de la Lingüística</li>
                              <li>Lengua y Literatura Clásica II: Griego</li>
                              <li>Literatura Latinoamericana I</li>
                              <li>UDI</li>
                              <li>Práctica Docente III</li>
                              <li>Seminario de integración Fe – cultura y vida III</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Derechos Humanos: Ética y Ciudadanía</li>
                              <li>Alfabetización</li>
                              <li>Literatura Argentina II</li>
                              <li>Historia de la Lengua</li>
                              <li>Lingüística y Análisis del Discurso</li>
                              <li>Literatura Latinoamericana II</li>
                              <li>UDI</li>
                              <li>Práctica Docente IV</li>
                              <li>Seminario de integración Fe – cultura y vida IV</li>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesor/a de Educación Secundaria en Historia</h3>
                          <p className="text-gray-600">Formación docente</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      El egresado podrá enseñar e investigar en historia, asesorar y participar en proyectos culturales, educativos y de reconstrucción histórica en diversos ámbitos.
                      </p>
                      <div className="mt-4">
                      <a href="src\correlativas\correlativas_profesorado_historia.pdf" className="text-institutional underline font-medium" download={'correlativas_profesorado_historia.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-literatura">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Pedagogía</li>
                              <li>Corporeidad, Juego y Lenguajes Artísticos</li>
                              <li>Oralidad, Lectura, Escritura y TIC</li>
                              <li>Didáctica General</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales de la Antigüedad</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales de los Pueblos Orig. de América</li>
                              <li>Historia de las Ideas I</li>
                              <li>Problemáticas del Conocimiento Histórico</li>
                              <li>Práctica Docente I</li>
                              <li>Seminario de integración Fe – cultura y vida I</li>

                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Filosofía</li>
                              <li>Psicología Educacional</li>
                              <li>Educación Sexual Integral</li>
                              <li>Proc. Soc., Políticos, Econ., y Cult. del Feud. y de la Modernidad</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales Americanos I</li>
                              <li>Historia de las Ideas II</li>
                              <li>Economía Política</li>
                              <li>El Mundo y las Nuevas Territorialidades</li>
                              <li>Didáctica de las Ciencias Sociales</li>
                              <li>Sujetos de la Educ. Secundaria</li>
                              <li>Práctica Docente II</li>
                              <li>Seminario de integración Fe – cultura y vida II</li>

                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Análisis y Organización de las Instituciones Educativas</li>
                              <li>Historia y Política de la Educación Argentina</li>
                              <li>Sociología de la Educación</li>
                              <li>Proc. Soc., Políticos, Econ., y Cult. Contemporáneos I</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales Americanos II</li>
                              <li>Epistemología de la Historia</li>
                              <li>Didáctica de la Historia</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales Argentinos I</li>
                              <li>UDI</li>
                              <li>Práctica Docente III</li>
                              <li>Seminario de integración Fe – cultura y vida III</li>

                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Derechos Humanos: Ética y Ciudadanía</li>
                              <li>Proc. Soc., Políticos, Econ., y Cult. Contemporáneos II</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales Americanos III</li>
                              <li>Problemáticas Históricas, Regionales y Locales</li>
                              <li>Proc. Soc., Políticos, Econ., y Culturales Argentinos II</li>
                              <li>UDI</li>
                              <li>Práctica Docente IV</li>
                              <li>Seminario de integración Fe – cultura y vida IV</li>

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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Profesor/a de Educación Secundaria en Economía</h3>
                          <p className="text-gray-600">Formación docente</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      El título de docente habilita para el dictado de todas las materias de nivel secundario relacionadas con el área económica.
                      </p>
                      <div className="mt-4">
                      <a href="src\correlativas\correlativas_profesorado_economia.pdf" className="text-institutional underline font-medium" download={'correlativas_profesorado_economia.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-literatura">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Pedagogía</li>
                              <li>Corporeidad, Juego y Lenguajes Artísticos</li>
                              <li>Oralidad, Lectura, Escritura y TIC</li>
                              <li>Didáctica General</li>
                              <li>Historia Económica Contemporánea</li>
                              <li>Introducción a la Economía</li>
                              <li>Introducción a la Administración</li>
                              <li>Introducción a la Contabilidad</li>
                              <li>Matemática I</li>
                              <li>Práctica Docente I</li>
                              <li>Seminario de integración Fe – cultura y vida I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Filosofía</li>
                              <li>Historial Social y Política Argentina y Latinoamericana</li>
                              <li>Psicología Educacional</li>
                              <li>Educación Sexual Integral</li>
                              <li>Teoría y Gestión de las Organizaciones I</li>
                              <li>Microeconomía y Macroeconomía</li>
                              <li>Matemática II</li>
                              <li>Economía Política</li>
                              <li>Didáctica de las Ciencias Sociales</li>
                              <li>Sujetos de la Educ. Secundaria</li>
                              <li>Práctica Docente II</li>
                              <li>Seminario de integración Fe – cultura y vida II</li>

                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Análisis y Organización de las Instituciones Educativas</li>
                              <li>Historia de la Educación Argentina</li>
                              <li>Sociología de la Educación</li>
                              <li>Derecho I</li>
                              <li>Teoría y Gestión de las Organizaciones II</li>
                              <li>Sistema de Información Contable I</li>
                              <li>Economía para la Vida I</li>
                              <li>Epistemología de la Economía</li>
                              <li>Didáctica de la Economía</li>
                              <li>Práctica Docente III</li>
                              <li>UDI</li>
                              <li>Seminario de integración Fe – cultura y vida III</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Derechos Humanos: Ética y Ciudadanía</li>
                              <li>Economía para la Vida II</li>
                              <li>Derecho II</li>
                              <li>Estudio sobre la Realidad Económica y Social Regional</li>
                              <li>Sistema de Información Contable II</li>
                              <li>Problemáticas Económicas Contemporáneas y Alternativas Sistémicas</li>
                              <li>UDI</li>
                              <li>Práctica Docente IV</li>
                              <li>Seminario de integración Fe – cultura y vida IV</li>
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
                          <FileText className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Tecnicatura Superior en Análisis y Desarrollo de Software</h3>
                          <p className="text-gray-600">Formación académica</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      El egresado podrá trabajar de forma individual o en equipo, diseñando, programando, verificando y manteniendo software.
                      </p>
                      <div className="mt-4">
                      <a href="correlativas\correlativas_Sistemas.pdf" className="text-institutional underline font-medium" download={'correlativas_sistemas.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-historia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Problemáticas Sociales, Económicas y Políticas</li>
                              <li>Matemática I</li>
                              <li>Lógica</li>
                              <li>Inglés Técnico I</li>
                              <li>Administración y Gestión I</li>
                              <li>Tecnología de la Información</li>
                              <li>Programación I</li>
                              <li>Base de Datos</li>
                              <li>Práctica profesionalizante I</li>
                              <li>Seminario de integración Fe – cultura y vida I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Ética Profesional</li>
                              <li>Matemática II</li>
                              <li>Inglés Técnico II</li>
                              <li>Administración y Gestión II</li>
                              <li>Análisis y diseño de sistemas I</li>
                              <li>Programación II</li>
                              <li>Programación Dispositivos Móviles</li>
                              <li>Sistemas operativos y redes</li>
                              <li>Práctica profesionalizante II</li>
                              <li>Seminario de integración Fe – cultura y vida II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Derechos Humanos y ciudadanía</li>
                                <li>Probabilidad y estadística</li>
                                <li>Legislación Informática</li>
                                <li>Análisis y diseño de sistemas II</li>
                                <li>Programación III</li>
                                <li>Auditoría de Sistemas</li>
                                <li>Ingeniería de Software</li>
                                <li>Práctica profesionalizante III</li>
                                <li>Seminario de integración Fe – cultura y vida III</li>
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
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Tecnicatura Superior Administración Contable</h3>
                          <p className="text-gray-600">Formación académica</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      Habilita al egresado para asistir en estudios contables en tareas de sueldos, impuestos, balances y trámites generales.
                      </p>
                      <div className="mt-4">
                      <a href="src\correlativas\correlativas_administracion_contable.pdf" className="text-institutional underline font-medium" download={'correlativas_administracion_contable.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-economia">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Filosofía</li>
                              <li>Matemática I</li>
                              <li>Derecho I</li>
                              <li>Computación</li>
                              <li>Contabilidad I</li>
                              <li>Economía I</li>
                              <li>Administración I</li>
                              <li>Práctica profesionalizante I</li>
                              <li>Seminario de integración Fe – cultura y vida I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Ética Profesional y Responsabilidad Social</li>
                              <li>Matemática II</li>
                              <li>Derecho II</li>
                              <li>Contabilidad II</li>
                              <li>Economía II</li>
                              <li>Administración II</li>
                              <li>Práctica profesionalizante II</li>
                              <li>Seminario de integración Fe – cultura y vida II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Derechos Humanos y ciudadanía</li>
                              <li>Estadística</li>
                              <li>Derecho III</li>
                              <li>Contabilidad III</li>
                              <li>Costos</li>
                              <li>Finanzas públicas</li>
                              <li>Matemática financiera</li>
                              <li>Sociedades</li>
                              <li>Práctica profesionalizante III</li>
                              <li>Seminario de integración Fe – cultura y vida III</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              {/* Carreras de Grado Tab */}
              <TabsContent value="degrado">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-hover h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start mb-4">
                        <div className="p-3 rounded-full bg-institutional/10 mr-4">
                          <BookOpen className="h-6 w-6 text-institutional" />
                        </div>
                        <div>
                          <h3 className="text-xl font-lora font-bold text-institutional-dark">Contador Público Nacional</h3>
                          <p className="text-gray-600">Formación técnica</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                      El egresado podrá elaborar y auditar estados contables, liquidar impuestos, realizar presupuestos, analizar costos y brindar asesoramiento impositivo y peritajes contables.
                      </p>
                      <div className="mt-4">
                      <a href="src\correlativas\correlativas_contador_publico_nacional.pdf" className="text-institutional underline font-medium" download={'correlativas_contador_publico_nacional.pdf'}>Descargar correlativas</a>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="plan-computacion">
                            <AccordionTrigger className="text-institutional font-medium">
                              Ver Plan de Estudios
                            </AccordionTrigger>
                            <AccordionContent>
                              <h4 className="font-medium mb-2">Primer Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Filosofía</li>
                              <li>Matemática I</li>
                              <li>Derecho I</li>
                              <li>Computación</li>
                              <li>Contabilidad I</li>
                              <li>Economía I</li>
                              <li>Administración I</li>
                              <li>Práctica profesionalizante I</li>
                              <li>Seminario de integración Fe – cultura y vida I</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Segundo Año</h4>
                              <ul className="list-disc list-inside text-gray-700 mb-4">
                              <li>Ética Profesional y Responsabilidad Social</li>
                              <li>Matemática II</li>
                              <li>Derecho II</li>
                              <li>Contabilidad II</li>
                              <li>Economía II</li>
                              <li>Administración II</li>
                              <li>Práctica profesionalizante II</li>
                              <li>Seminario de integración Fe – cultura y vida II</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Tercer Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Derechos Humanos y ciudadanía</li>
                              <li>Estadística</li>
                              <li>Derecho III</li>
                              <li>Contabilidad III</li>
                              <li>Costos</li>
                              <li>Finanzas públicas</li>
                              <li>Matemática financiera</li>
                              <li>Sociedades</li>
                              <li>Práctica profesionalizante III</li>
                              <li>Seminario de integración Fe – cultura y vida III</li>
                              </ul>
                              
                              <h4 className="font-medium mb-2">Cuarto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Finanzas de Empresas</li>
                              <li>Contabilidad Superior II</li>
                              <li>Costos Empresarios</li>
                              <li>Teoría y Técnica Impositiva I</li>
                              <li>Taller I (Sociedades y laboral)</li>
                              <li>Teología Moral y Doctrina Social de la Iglesia</li>
                              <li>Concursos</li>
                              <li>Administración III</li>
                              </ul>

                              <h4 className="font-medium mb-2">Quinto Año</h4>
                              <ul className="list-disc list-inside text-gray-700">
                              <li>Contabilidad Pública</li>
                              <li>Evaluación de Proyectos de Inversión</li>
                              <li>Teoría y Técnica Impositiva II</li>
                              <li>Contabilidad Aplicada</li>
                              <li>Taller II (Concursos y Pericias)</li>
                              <li>Auditoría</li>
                              <li>Optativa I</li>
                              <li>Optativa II</li>
                              <li>Seminario de Investigación Científica</li>
                              <li>Taller de Integración Profesional</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-institutional/10 rounded-lg p-6 inline flex-col justify-center">
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
                    <li>Títulos de grado: Contador Público Nacional (5 años)</li>
                    <li>Títulos docentes: Profesorados (4 años)</li>
                    <li>Títulos técnicos: Tecnicaturas (3 años)</li>
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
                    <li>Turnos: Tarde y noche</li>
                    <li>Asistencia obligatoria: 70% </li>
                    <li>Algunas materias con opción de libre</li>
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
