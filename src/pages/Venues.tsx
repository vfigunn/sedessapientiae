
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const Venues = () => {
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
                  <BreadcrumbLink className="text-institutional">Sedes</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="section-title mb-12">Donde encontrarnos</h1>
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-lora font-semibold text-institutional-dark mb-4">Sede Central - Caballito</h2>
                <p className="text-gray-700 mb-4">
                  Nuestra sede principal está ubicada en el barrio de Caballito, en un edificio histórico completamente renovado 
                  para ofrecer instalaciones modernas y adaptadas a las necesidades educativas actuales.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><span className="font-medium">Dirección:</span> Av. Gaona 1851, CABA</li>
                  <li><span className="font-medium">Teléfono:</span> (011) 4981-2190</li>
                  <li><span className="font-medium">Horario de atención:</span> Lunes a Viernes de 8:00 a 21:00</li>
                </ul>
                <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-3">Instalaciones:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>10 aulas equipadas con tecnología audiovisual</li>
                  <li>Biblioteca especializada con más de 5,000 volúmenes</li>
                  <li>Laboratorio de informática</li>
                  <li>Sala de conferencias</li>
                  <li>Cafetería</li>
                  <li>Área de estudio y trabajo colaborativo</li>
                </ul>
              </div>
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8970401823214!2d-58.46882242511758!3d-34.60653687295908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca07f35461a5%3A0x83f35ecb7082dfdf!2sAv.%20Gaona%201851%2C%20C1416DRG%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1712612211216!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa de ubicación Sede Central"
                ></iframe>
              </div>
            </div>
             */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-lora font-semibold text-institutional-dark mb-4">Instituto de Profesorado Sedes Sapientiae</h2>
                <p className="text-gray-700 mb-4">
                  Nuestra sede cuenta con instalaciones para brindar 
                  comodidad y accesibilidad a los estudiantes de la  ciudad.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><span className="font-medium">Dirección:</span> Santa Fe 74, Gualeguaychú, Entre Ríos, Argentina</li>
                  <li><span className="font-medium">Teléfonos:</span> (+549) 3446-427177 | 3446-427021 | 3446-426865</li>
                  <li><span className="font-medium">Horario de atención:</span> Lunes a Viernes de 18:00 a 22:00</li>
                </ul>
                <h3 className="text-xl font-lora font-semibold text-institutional-dark mb-3">Instalaciones:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>+10 aulas completamente equipadas</li>
                  <li>Sala de estudios</li>
                  <li>Biblioteca</li>
                  <li>Área de recreación</li>
                  <li>Laboratorio de computación</li>
                </ul>
              </div>
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.8434276024286!2d-58.52496142432772!3d-33.007903173568046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007883e9c5397%3A0xa619a3effadb0869!2sInstituto%20Sedes%20Sapientiae!5e0!3m2!1sen!2sar!4v1744083415336!5m2!1sen!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Mapa de ubicación Sede Anexo"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Venues;
