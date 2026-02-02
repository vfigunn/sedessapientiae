
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
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
              src={cn(scrolled ? "assets/images/logo-scrolled.png" : "assets/images/logo-extended.png")} 
              alt="Sedes Sapientiae Logo" 
              className="h-12 md:h-16" 
            />
            <div className={cn(
              "hidden md:block transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0"
            )}>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn("nav-link font-medium ", 
                isActive("/") && "active-nav-link ")}
            >
              Inicio
            </Link>
            
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Institucional <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <Link to="/historia" className="block px-4 py-2 hover:bg-gray-100">Historia</Link>
                <Link to="/sedes" className="block px-4 py-2 hover:bg-gray-100">Sedes</Link>
              </div>
            </div>
            
            <div className="relative group">
              <button className="nav-link font-medium flex items-center">
                Académica <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
                <Link to="/carreras" className="block px-4 py-2 hover:bg-gray-100">Carreras</Link>
                <Link to="/jornadas" className="block px-4 py-2 hover:bg-gray-100">Jornadas Institucionales</Link>
                <Link to="/graduados" className="block px-4 py-2 hover:bg-gray-100">Graduados</Link>
              </div>
            </div>
            
            <Link 
              to="/carreras/contador-publico" 
              className={cn("nav-link font-medium", 
                isActive("/carreras/contador-publico") && "active-nav-link")}
            >
              Contador Público
            </Link>
            
            <Link 
              to="/admisiones" 
              className={cn("nav-link font-medium", 
                isActive("/admisiones") && "active-nav-link")}
            >
              Inscripciones
            </Link>
            
            <a 
              href="https://www.sedesonline.edu.ar/login/index.php" 
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
          <Link to="/" className="block py-2 nav-link">Inicio</Link>
          
          <div className="py-2 border-t border-gray-200">
            <p className="text-institutional-dark font-medium mb-2">Institucional</p>
            <Link to="/historia" className="block py-1 pl-4 hover:text-institutional">Historia</Link>
            <Link to="/sedes" className="block py-1 pl-4 hover:text-institutional">Sedes</Link>
          </div>
          
          <div className="py-2 border-t border-gray-200">
            <p className="text-institutional-dark font-medium mb-2">Académica</p>
            <Link to="/carreras" className="block py-1 pl-4 hover:text-institutional">Carreras</Link>
            <Link to="/jornadas" className="block py-1 pl-4 hover:text-institutional">Jornadas Institucionales</Link>
            <Link to="/graduados" className="block py-1 pl-4 hover:text-institutional">Graduados</Link>
          </div>
          
          <Link to="/carreras/contador-publico" className="block py-2 border-t border-gray-200 nav-link">Contador Público</Link>
          <Link to="/admisiones" className="block py-2 border-t border-gray-200 nav-link">Inscripciones</Link>
          
          <div className="pt-2 border-t border-gray-200">
            <a 
              href="https://sedes.infd.edu.ar/aula/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary block text-center"
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
