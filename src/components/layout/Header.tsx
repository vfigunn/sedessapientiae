
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/images/logo.png" 
              alt="Sedes Sapientiae Logo" 
              className="h-12 md:h-16" 
            />
            <div className={cn(
              "hidden md:block transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0"
            )}>
              <h1 className="text-lg font-semibold text-institutional">Instituto Superior</h1>
              <h2 className="text-xl font-bold text-institutional-dark">Sedes Sapientiae</h2>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link active-nav-link font-medium">Inicio</Link>
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Institucional <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <Link to="/historia" className="block px-4 py-2 hover:bg-gray-100">Historia</Link>
                <Link to="/autoridades" className="block px-4 py-2 hover:bg-gray-100">Autoridades</Link>
                <Link to="/proyecto-educativo" className="block px-4 py-2 hover:bg-gray-100">Proyecto Educativo</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Académica <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <Link to="/carreras/profesorado" className="block px-4 py-2 hover:bg-gray-100">Profesorado</Link>
                <Link to="/carreras/licenciaturas" className="block px-4 py-2 hover:bg-gray-100">Licenciaturas</Link>
                <Link to="/carreras/preceptoria" className="block px-4 py-2 hover:bg-gray-100">Preceptoría</Link>
              </div>
            </div>
            <Link to="/noticias" className="nav-link font-medium">Noticias</Link>
            <Link to="/contacto" className="nav-link font-medium">Contacto</Link>
            <a 
              href="https://sedes.infd.edu.ar/aula/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Campus Virtual
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-600 hover:text-institutional focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <Link to="/" className="block py-2 nav-link active-nav-link" onClick={toggleMenu}>Inicio</Link>
          
          <div className="py-2 border-t border-gray-200">
            <p className="text-institutional-dark font-medium mb-2">Institucional</p>
            <Link to="/historia" className="block py-1 pl-4 hover:text-institutional" onClick={toggleMenu}>Historia</Link>
            <Link to="/autoridades" className="block py-1 pl-4 hover:text-institutional" onClick={toggleMenu}>Autoridades</Link>
            <Link to="/proyecto-educativo" className="block py-1 pl-4 hover:text-institutional" onClick={toggleMenu}>Proyecto Educativo</Link>
          </div>
          
          <div className="py-2 border-t border-gray-200">
            <p className="text-institutional-dark font-medium mb-2">Académica</p>
            <Link to="/carreras/profesorado" className="block py-1 pl-4 hover:text-institutional" onClick={toggleMenu}>Profesorado</Link>
            <Link to="/carreras/licenciaturas" className="block py-1 pl-4 hover:text-institutional" onClick={toggleMenu}>Licenciaturas</Link>
            <Link to="/carreras/preceptoria" className="block py-1 pl-4 hover:text-institutional" onClick={toggleMenu}>Preceptoría</Link>
          </div>
          
          <Link to="/noticias" className="block py-2 border-t border-gray-200 nav-link" onClick={toggleMenu}>Noticias</Link>
          <Link to="/contacto" className="block py-2 border-t border-gray-200 nav-link" onClick={toggleMenu}>Contacto</Link>
          
          <div className="pt-2 border-t border-gray-200">
            <a 
              href="https://sedes.infd.edu.ar/aula/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary block text-center"
              onClick={toggleMenu}
            >
              Campus Virtual
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
