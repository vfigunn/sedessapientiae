
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-institutional text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div>
            <img 
              src="assets/images/logo-extended.png" 
              alt="Sedes Sapientiae Logo" 
              className="h-20 mb-4 " 
            />
            <h3 className="text-xl font-bold mb-4">Instituto Sedes Sapientiae</h3>
            <p className="text-gray-300 mb-4">
              Formación académica con valores cristianos desde 1963
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-institutional-light pb-2">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-300" />
                <span>Santa Fe 74 Gualeguaychú, Entre Ríos, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <span>(+549) 3446-427177</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <a href="mailto:info@sedessapientiae.edu.ar" className="hover:text-gray-300 transition">
                  informes@sedessapientiae.edu.ar
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-gray-300" />
                <span>Lunes a Viernes: 18:00 - 22:00</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-institutional-light pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/admisiones" className="hover:text-gray-300 transition">
                  Inscripciones
                </Link>
              </li>
              <li>
                <Link to="/carreras" className="hover:text-gray-300 transition">
                  ¿Qué estudiar?
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.sedesonline.edu.ar/login/index.php" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-300 transition"
                >
                  Campus Virtual
                </a>
              </li>
              <li>
                <Link to="/historia" className="hover:text-gray-300 transition">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-institutional-light pb-2">Seguinos</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.facebook.com/sedessapientiae" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-institutional-light hover:bg-institutional-dark p-2 rounded-full transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/school/instituto-sedes-sapientiae-gualeguaychu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-institutional-light hover:bg-institutional-dark p-2 rounded-full transition"
                aria-label="Linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/sedessapientiaegchu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-institutional-light hover:bg-institutional-dark p-2 rounded-full transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCZI9SsMtS-WsdHHqkqdBxQg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-institutional-light hover:bg-institutional-dark p-2 rounded-full transition"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-institutional-light mt-8 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Instituto de Profesorado Sedes Sapientiae. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
