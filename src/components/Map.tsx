
import React from "react";

const Map = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Nuestra Ubicación</h2>
        <p className="text-gray-700 max-w-2xl mb-6">
          Estamos ubicados en Santa Fe 74, en la ciudad de Gualeguaychú, Entre Ríos, Argentina.
        </p>
        <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.8434276024286!2d-58.52496142432772!3d-33.007903173568046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b007883e9c5397%3A0xa619a3effadb0869!2sInstituto%20Sedes%20Sapientiae!5e0!3m2!1sen!2sar!4v1744083415336!5m2!1sen!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa de ubicación del Instituto"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
