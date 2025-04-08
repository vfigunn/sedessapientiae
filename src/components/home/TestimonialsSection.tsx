
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Mi formación en el Instituto Sedes Sapientiae me brindó herramientas invaluables para mi desarrollo profesional y crecimiento personal. Los valores y conocimientos adquiridos aquí fueron fundamentales para mi carrera.",
    name: "María Fernández",
    role: "Egresada del Profesorado de Educación Primaria, 2019",
    avatar: "/assets/images/testimonials/testimonial-1.jpg"
  },
  {
    id: 2,
    quote: "Lo que más valoro de mi experiencia en Sedes Sapientiae es el acompañamiento personalizado que recibí de parte de los docentes durante toda mi formación. Es una institución que realmente se preocupa por sus estudiantes.",
    name: "Carlos Rodríguez",
    role: "Egresado del Profesorado de Filosofía, 2020",
    avatar: "/assets/images/testimonials/testimonial-2.jpg"
  },
  {
    id: 3,
    quote: "Elegí Sedes Sapientiae por su prestigio y trayectoria. Hoy puedo decir que fue la mejor decisión que tomé para mi formación profesional. La calidad académica y humana es excepcional.",
    name: "Laura González",
    role: "Egresada de la Licenciatura en Psicopedagogía, 2021",
    avatar: "/assets/images/testimonials/testimonial-3.jpg"
  },
  {
    id: 4,
    quote: "La formación integral que recibí me permitió desarrollarme no solo como profesional, sino también como persona. Los valores cristianos y el compromiso social son pilares fundamentales de esta institución.",
    name: "Martín Sánchez",
    role: "Egresado del Profesorado de Ciencias Sagradas, 2018",
    avatar: "/assets/images/testimonials/testimonial-4.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Lo que dicen nuestros egresados</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Conoce las experiencias y opiniones de quienes se formaron en nuestro instituto.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="mb-4">
                            <svg 
                              width="45" 
                              height="36" 
                              className="text-institutional-light/30" 
                              viewBox="0 0 45 36" 
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                            >
                              <path d="M13.415 0C5.595 0 0 5.13 0 12.093c0 6.397 5.02 10.96 11.59 10.96 1.435 0 2.585-.192 3.544-.384-1.913 3.936-5.502 7.296-9.622 9.024L9.08 36C15.946 33.169 22.812 26.304 22.812 15.791 22.812 6.205 18.553 0 13.415 0zM35.602 0c-7.82 0-13.414 5.13-13.414 12.093 0 6.397 5.019 10.96 11.589 10.96 1.435 0 2.585-.192 3.544-.384-1.913 3.936-5.502 7.296-9.622 9.024L31.268 36c6.865-2.831 13.73-9.696 13.73-20.209C45 6.205 40.74 0 35.603 0z" />
                            </svg>
                          </div>
                          
                          <p className="text-gray-700 italic mb-6 flex-grow">
                            {testimonial.quote}
                          </p>
                          
                          <div className="flex items-center">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name} 
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-bold text-institutional-dark">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 lg:-left-12" />
            <CarouselNext className="right-0 lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
