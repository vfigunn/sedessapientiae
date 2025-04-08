
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-institutional text-9xl font-bold">404</h1>
            <p className="text-2xl text-gray-700 mb-6">Página no encontrada</p>
            <p className="text-gray-600 mb-8">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <Link 
              to="/" 
              className="btn-primary inline-block"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
