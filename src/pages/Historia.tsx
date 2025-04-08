
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink, 
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Historia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Breadcrumb navigation */}
        <div className="bg-gray-100 py-3">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Historia</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        
        {/* Page content */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="section-title mb-8">Nuestra Historia</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="mb-4 text-gray-700">
                El Instituto Superior de Formación Docente "Sede Sapientiae" nació como un proyecto educativo en el año 1995, 
                con el objetivo de formar docentes con excelencia académica y valores cristianos, bajo el lema "La Verdad os hará libres".
              </p>
              <p className="mb-4 text-gray-700">
                Fundado por un grupo de profesionales comprometidos con la educación y la formación integral de futuros docentes, 
                el instituto comenzó sus actividades en un pequeño edificio en el barrio de Caballito, Ciudad Autónoma de Buenos Aires.
              </p>
              <p className="mb-4 text-gray-700">
                La institución recibe su nombre "Sede Sapientiae" (Sede de la Sabiduría) como una invocación a la búsqueda constante 
                del conocimiento y la verdad, valores fundamentales en el proceso educativo que proponemos a nuestros estudiantes.
              </p>
            </div>
            <div className="bg-gray-200 h-72 md:h-full rounded-lg overflow-hidden">
              <img 
                src="/assets/images/building.jpg" 
                alt="Edificio histórico del Instituto" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-lora font-bold text-institutional mb-4">Hitos Importantes</h2>
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">1995</h3>
                <p className="text-gray-700">Fundación del Instituto Superior de Formación Docente "Sede Sapientiae".</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">1998</h3>
                <p className="text-gray-700">Reconocimiento oficial de los primeros programas educativos por parte del Ministerio de Educación.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2003</h3>
                <p className="text-gray-700">Traslado a las instalaciones actuales y ampliación de la oferta académica.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2010</h3>
                <p className="text-gray-700">Celebración del 15º aniversario y renovación del compromiso institucional con la formación docente de calidad.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2020</h3>
                <p className="text-gray-700">Adaptación a la enseñanza virtual y desarrollo de nuevas metodologías educativas durante la pandemia.</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 card-hover">
                <h3 className="text-xl font-lora font-semibold mb-2 text-institutional-light">2023</h3>
                <p className="text-gray-700">Renovación del proyecto educativo institucional y lanzamiento de nuevas carreras con enfoque en las tecnologías educativas.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-institutional-light bg-opacity-10 rounded-lg p-8">
            <h2 className="text-2xl font-lora font-bold text-institutional mb-4">Misión y Visión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-institutional">Nuestra Misión</h3>
                <p className="text-gray-700">
                  Formar educadores comprometidos con la excelencia académica y los valores humanos, 
                  capaces de transformar la realidad social a través de una práctica profesional ética, 
                  reflexiva y orientada al servicio.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-institutional">Nuestra Visión</h3>
                <p className="text-gray-700">
                  Ser una institución educativa referente en la formación docente, 
                  reconocida por su calidad académica, innovación pedagógica y compromiso con la formación integral 
                  de profesionales que contribuyan significativamente al desarrollo educativo del país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Historia;
