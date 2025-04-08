
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
              El Instituto Sedes Sapientiae se crea para dar respuesta a la inquietud de la juventud estudiosa de perfeccionar su nivel cultural en una orientación cristiana de su vida, con una vocación auténtica de saber. Lo funda en abril de 1963 el entonces obispo de Gualeguaychú Mons. Ramón Chalup.
              </p>
              <p className="mb-4 text-gray-700">
              La entidad propietaria del Instituto es el Obispado de Gualeguaychú, quien a partir del año 2000 ha encomendado a la Asociación de las Servidoras la rectoría del Instituto y el asesoramiento en la gestión académica a través del Centro de Investigaciones en Antropología Filosófica y Cultural (CIAFIC). El obispado conserva la gestión económica y administrativa del Instituto.
              </p>
              <p><b className="underline underline-offset-1">AUTORIDADES:</b></p>
              <p className="mb-4 text-gray-700">
                <ul>
                  <li><b>Rectora</b> Lic. Marisa Menta - rectoria@sedessapientiae.edu.ar</li>
                  <li><b>Vicerectora</b> Prof. María de los Milagros Casanova</li>
                  <li><b>Secretaria</b> Prof. Daniela Mª Florencia Valiente</li>
                  <li><b>Apoderada</b> Legal Sra. María Adela Aranda de Montagno</li>
                </ul>
              </p>
            </div>
            <div className="bg-gray-200 h-72 md:h-full rounded-lg overflow-hidden">
              <img 
                src="https://i.ibb.co/w5vdD4D/Captura-de-pantalla-2025-04-08-011950.png" 
                alt="Edificio histórico del Instituto" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* <div className="mb-12">
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
          </div> */}
          

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Historia;
