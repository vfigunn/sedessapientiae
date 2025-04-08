
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Nuestro Instituto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <p className="text-lg mb-6 text-gray-700">
              El Instituto Superior <strong className="text-institutional">Sedes Sapientiae</strong> fue fundado en 1959 
              como una institución educativa católica dedicada a la formación de docentes comprometidos 
              con la fe y los valores cristianos.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Con una larga trayectoria en la formación de profesionales de la educación, ofrecemos 
              carreras que combinan excelencia académica, formación humana y compromiso social, 
              bajo el lema <em className="font-lora">"Sede de la Sabiduría"</em>.
            </p>
            <p className="text-lg mb-8 text-gray-700">
              Nuestro proyecto educativo está centrado en el desarrollo integral de la persona, 
              inspirado en una visión humanista cristiana que respeta la libertad y dignidad de 
              cada estudiante.
            </p>
            
            <Link to="/historia" className="btn-primary inline-block">
              Conocer más
            </Link>
          </div>
          
          <div className="relative">
            <img 
              src="/assets/images/building.jpg" 
              alt="Edificio del Instituto Sedes Sapientiae" 
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -left-5 bg-institutional p-6 rounded-lg shadow-lg rotate-[-3deg]">
              <p className="font-bold text-white text-2xl">Desde 1959</p>
              <p className="text-white/80">Formando educadores</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="w-16 h-16 bg-institutional-light/20 text-institutional-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-institutional-dark mb-3">Misión</h3>
            <p className="text-gray-700">
              Formar docentes con sólida preparación académica y profundos valores cristianos, 
              capaces de transformar la sociedad a través de una educación integral y de calidad.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="w-16 h-16 bg-institutional-light/20 text-institutional-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-institutional-dark mb-3">Visión</h3>
            <p className="text-gray-700">
              Ser una institución de referencia en la formación docente, reconocida por su 
              excelencia académica, innovación pedagógica y por el compromiso de sus graduados.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm card-hover">
            <div className="w-16 h-16 bg-institutional-light/20 text-institutional-light rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-institutional-dark mb-3">Valores</h3>
            <p className="text-gray-700">
              Nuestro instituto promueve la fe, el respeto, la responsabilidad, 
              la solidaridad y la búsqueda permanente de la verdad como pilares fundamentales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
