
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Clock, Calendar, Users, ArrowRight } from "lucide-react";

const AcademicOfferSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Oferta Académica</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          El Instituto ofrece diversas carreras de formación docente y profesional, 
          con títulos oficiales y reconocidos por el Ministerio de Educación.
        </p>
        
        <Tabs defaultValue="profesorado" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="profesorado" className="text-lg">Profesorado</TabsTrigger>
            <TabsTrigger value="tecnicaturas" className="text-lg">Tecnicaturas</TabsTrigger>
            <TabsTrigger value="degrado" className="text-lg">Carreras de Grado</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profesorado">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CarreraCard 
                title="Profesor/a de Secundaria en Lengua y Literatura"
                description="El egresado podrá enseñar, investigar, redactar, corregir y asesorar en lengua y literatura."
                duration="4 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
              
              <CarreraCard 
                title="Profesor/a de Inglés"
                description="Puede ejercer la docencia en distintos ámbitos y la creciente demanda del inglés genera una alta necesidad de profesores capacitados."
                duration="4 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
              
              <CarreraCard 
                title="Profesor/a de Educación Secundaria en Historia"
                description="El egresado podrá enseñar e investigar en historia, asesorar y participar en proyectos culturales, educativos y de reconstrucción histórica en diversos ámbitos."
                duration="4 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
              
              <CarreraCard 
                title="Profesor/a de Educación Secundaria en Economía "
                description="El título de docente habilita para el dictado de todas las materias de nivel secundario relacionadas con el área económica."
                duration="4 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="tecnicaturas">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CarreraCard 
                title="Tecnicatura Superior en Análisis y Desarrollo de Software"
                description="El egresado podrá trabajar de forma individual o en equipo, diseñando, programando, verificando y manteniendo software."
                duration="3 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
              
            </div>
          </TabsContent>

          <TabsContent value="tecnicaturas">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CarreraCard 
                title="Tecnicatura Superior Administración Contable"
                description="Habilita al egresado para asistir en estudios contables en tareas de sueldos, impuestos, balances y trámites generales."
                duration="3 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
              
            </div>
          </TabsContent>
          
          <TabsContent value="degrado">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CarreraCard 
                title="Contador Público Nacional"
                description="El egresado podrá elaborar y auditar estados contables, liquidar impuestos, realizar presupuestos, analizar costos y brindar asesoramiento impositivo y peritajes contables."
                duration="5 años"
                schedule="Turno tarde/noche"
                modalidad="Presencial"
                link="/carreras"
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Link to="/carreras" className="btn-primary inline-flex items-center">
            Ver todas las carreras <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

interface CarreraCardProps {
  title: string;
  description: string;
  duration: string;
  schedule: string;
  modalidad: string;
  link: string;
}

const CarreraCard = ({ title, description, duration, schedule, modalidad, link }: CarreraCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader className="bg-institutional/5">
        <CardTitle className="text-institutional text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3 text-sm">
          <li className="flex items-center text-gray-700">
            <Clock className="h-4 w-4 mr-2 text-institutional-light" />
            <span><strong>Duración:</strong> {duration}</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Calendar className="h-4 w-4 mr-2 text-institutional-light" />
            <span><strong>Horario:</strong> {schedule}</span>
          </li>
          <li className="flex items-center text-gray-700">
            <Users className="h-4 w-4 mr-2 text-institutional-light" />
            <span><strong>Modalidad:</strong> {modalidad}</span>
          </li>
          <li className="flex items-center text-gray-700">
            <BadgeCheck className="h-4 w-4 mr-2 text-institutional-light" />
            <span><strong>Título oficial</strong> con validez nacional</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Link 
          to={link} 
          className="text-institutional-light hover:text-institutional-dark font-medium flex items-center transition"
        >
          Más información <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AcademicOfferSection;
