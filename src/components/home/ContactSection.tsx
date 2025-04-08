
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-institutional-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-16 after:h-1 after:bg-white/50">
              Contactate con Nosotros
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Estamos disponibles para atender tus consultas y brindarte toda la información que necesites 
              sobre nuestras carreras y servicios.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-institutional p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Dirección</h4>
                  <p className="text-white/80">Av. Gaona 1851, C1416DRG CABA, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-institutional p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Teléfono</h4>
                  <p className="text-white/80">(011) 4582-1635 / 8386</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-institutional p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:info@sedessapientiae.edu.ar" className="text-white/80 hover:text-white transition">
                    info@sedessapientiae.edu.ar
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-institutional p-3 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Horario de Atención</h4>
                  <p className="text-white/80">Lunes a Viernes: 8:00 - 21:00</p>
                  <p className="text-white/80">Sábados: 8:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold mb-6 text-institutional">Envianos tu Consulta</h3>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-2 font-medium">
                    Nombre
                  </label>
                  <input 
                    type="text" 
                    id="nombre" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-institutional focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-gray-700 mb-2 font-medium">
                    Apellido
                  </label>
                  <input 
                    type="text" 
                    id="apellido" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-institutional focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-institutional focus:border-transparent"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="telefono" className="block text-gray-700 mb-2 font-medium">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  id="telefono" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-institutional focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="asunto" className="block text-gray-700 mb-2 font-medium">
                  Asunto
                </label>
                <select 
                  id="asunto" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-institutional focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="informacion">Información sobre carreras</option>
                  <option value="inscripcion">Inscripción</option>
                  <option value="administrativo">Consulta administrativa</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-gray-700 mb-2 font-medium">
                  Mensaje
                </label>
                <textarea 
                  id="mensaje" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-institutional focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-institutional hover:bg-institutional-light text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
