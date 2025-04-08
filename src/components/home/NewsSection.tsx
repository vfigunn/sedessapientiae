
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

// Sample news data - this would come from an API in a real implementation
const newsItems = [
  {
    id: 1,
    title: "Inscripciones abiertas para el ciclo lectivo 2025",
    excerpt: "Ya están abiertas las inscripciones para todas las carreras. Conoce los requisitos y procedimientos.",
    date: "2024-10-15",
    image: "/assets/images/news/inscripciones.jpg",
    slug: "/noticias/inscripciones-abiertas-2025"
  },
  {
    id: 2,
    title: "Jornada de Puertas Abiertas",
    excerpt: "Visita nuestras instalaciones y conoce de cerca nuestra propuesta educativa en nuestra próxima jornada.",
    date: "2024-11-05",
    image: "/assets/images/news/puertas-abiertas.jpg",
    slug: "/noticias/jornada-puertas-abiertas-2024"
  },
  {
    id: 3,
    title: "Conferencia sobre Innovación Educativa",
    excerpt: "Especialistas nacionales e internacionales compartirán las últimas tendencias en educación.",
    date: "2024-09-28",
    image: "/assets/images/news/conferencia.jpg",
    slug: "/noticias/conferencia-innovacion-educativa"
  }
];

const NewsSection = () => {
  // Format date function
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-AR', options);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <h2 className="section-title mb-4 md:mb-0">Últimas Noticias</h2>
          <Link 
            to="/noticias" 
            className="text-institutional-light hover:text-institutional-dark font-medium flex items-center transition"
          >
            Ver todas las noticias <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden card-hover">
              <Link to={item.slug} className="block">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition duration-300 hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </div>
                <Link to={item.slug}>
                  <h3 className="text-xl font-bold mb-3 text-institutional-dark hover:text-institutional transition">{item.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link 
                  to={item.slug} 
                  className="text-institutional-light hover:text-institutional-dark font-medium flex items-center transition"
                >
                  Leer más <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
