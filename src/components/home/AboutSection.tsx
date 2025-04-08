
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
              El Instituto <strong className="text-institutional">Sedes Sapientiae</strong> se crea para dar respuesta a la inquietud de la juventud estudiosa de perfeccionar su nivel cultural en una orientación cristiana de su vida, con una vocación auténtica de saber. Lo funda en abril de 1963 el entonces obispo de Gualeguaychú Mons. Ramón Chalup.
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

            <div className="absolute -bottom-5 -left-5 bg-institutional p-6 rounded-lg shadow-lg rotate-[-3deg]">
              <p className="font-bold text-white text-2xl">Desde 1963</p>
              <p className="text-white/80 ">Formando profesionales</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
