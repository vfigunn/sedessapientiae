
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-r from-institutional-dark via-institutional to-institutional-light overflow-hidden">
      {/* <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10"></div> */}
      {/* <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Instituto de Profesorado<br />
              <span className="text-white/90">Sedes Sapientiae</span>
            </h1>
            <p className="text-xl mb-8 text-white/80 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Formando profesionales de la educación con valores cristianos desde 1963. <br />Comprometidos con la excelencia académica y el desarrollo integral.
            </p>
            {/* <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Link to="/inscripciones" className="bg-white hover:bg-gray-100 text-institutional-dark font-medium py-3 px-6 rounded-md transition-colors duration-200">
                Conocé nuestras carreras
              </Link>
              <Link to="/contacto" className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-md transition-colors duration-200">
                Contactanos
              </Link>
            </div> */}
          </div>
          {/* <div className="hidden lg:block">
            <img 
              src="/assets/images/students.png" 
              alt="Estudiantes Sedes Sapientiae" 
              className="w-full rounded-lg shadow-lg animate-fade-in transform translate-y-4"
              style={{animationDelay: "0.6s"}}
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg rotate-3">
              <p className="font-lora italic text-institutional">
                "Sede de la Sabiduría"
              </p>
            </div>
          </div> */}
        </div>
        
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div> */}
      </div>
    </section>
  );
};

export default Hero;
