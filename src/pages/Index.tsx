
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import AcademicOfferSection from "@/components/home/AcademicOfferSection";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import Map from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, History, MapPin, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        
        {/* Institute Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* <h2 className="section-title mb-12">El Instituto Sedes Sapientiae</h2> */}
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
              {/* <div>
                <h3 className="text-2xl font-lora font-semibold text-institutional-dark mb-4">Nuestra Historia</h3>
                <p className="text-gray-700 mb-4">
                  El Instituto Superior Sedes Sapientiae fue fundado en 1989 como una institución educativa 
                  de nivel superior, comprometida con la formación integral de los futuros profesionales 
                  de la educación y otras disciplinas afines.
                </p>
                <p className="text-gray-700 mb-4">
                  Desde sus inicios, el instituto ha trabajado bajo la inspiración cristiana, buscando 
                  formar personas con sólidos valores éticos y morales, además de una excelente preparación 
                  académica y profesional.
                </p>
                <p className="text-gray-700">
                  A lo largo de más de tres décadas, Sedes Sapientiae ha contribuido significativamente 
                  a la educación argentina, formando generaciones de docentes, filósofos, teólogos y 
                  otros profesionales que hoy se desempeñan en diversos ámbitos educativos y culturales.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/historia" 
                    className="inline-flex items-center text-institutional font-medium hover:text-institutional-dark transition-colors duration-200"
                  >
                    Conocer más sobre nuestra historia →
                  </Link>
                </div>
              </div> */}
              <div className="flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="card-hover">
                    <CardContent className="flex flex-col items-center pt-6 pb-4 text-center">
                      <History className="h-12 w-12 text-institutional mb-3" />
                      <h4 className="text-lg font-semibold text-institutional-dark">Desde 1989</h4>
                      <p className="text-gray-600 text-sm mt-1">Más de 30 años de trayectoria</p>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardContent className="flex flex-col items-center pt-6 pb-4 text-center">
                      <Users className="h-12 w-12 text-institutional mb-3" />
                      <h4 className="text-lg font-semibold text-institutional-dark">+2,500</h4>
                      <p className="text-gray-600 text-sm mt-1">Estudiantes graduados</p>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardContent className="flex flex-col items-center pt-6 pb-4 text-center">
                      <Award className="h-12 w-12 text-institutional mb-3" />
                      <h4 className="text-lg font-semibold text-institutional-dark">Excelencia</h4>
                      <p className="text-gray-600 text-sm mt-1">Reconocimiento académico</p>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardContent className="flex flex-col items-center pt-6 pb-4 text-center">
                      <MapPin className="h-12 w-12 text-institutional mb-3" />
                      <h4 className="text-lg font-semibold text-institutional-dark">Gualeguaychú</h4>
                      <p className="text-gray-600 text-sm mt-1">Entre Ríos, Argentina</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-institutional mr-3" />
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark">Misión</h3>
                  </div>
                  <p className="text-gray-700">
                    Formar integralmente profesionales de la educación y disciplinas afines, con una 
                    sólida formación académica y humana, fundamentada en valores cristianos, para contribuir 
                    a la construcción de una sociedad más justa, solidaria y comprometida con el bien común.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-institutional mr-3" />
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark">Visión</h3>
                  </div>
                  <p className="text-gray-700">
                    Ser reconocidos como una institución educativa de referencia por su excelencia 
                    académica, formación integral y compromiso con los valores humanos y cristianos, 
                    formando profesionales que sean agentes de cambio en la sociedad.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-institutional mr-3" />
                    <h3 className="text-xl font-lora font-semibold text-institutional-dark">Valores</h3>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <span className="text-institutional mr-2">•</span>
                      <span>Excelencia académica y profesional</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-institutional mr-2">•</span>
                      <span>Formación humana integral</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-institutional mr-2">•</span>
                      <span>Compromiso social y solidaridad</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-institutional mr-2">•</span>
                      <span>Respeto por la dignidad humana</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-institutional mr-2">•</span>
                      <span>Búsqueda de la verdad y el conocimiento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <AcademicOfferSection />
        <NewsSection />
        <TestimonialsSection />
        <ContactSection />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
