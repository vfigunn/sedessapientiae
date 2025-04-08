
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import AcademicOfferSection from "@/components/home/AcademicOfferSection";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import Map from "@/components/Map";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AcademicOfferSection />
        <NewsSection />
        <TestimonialsSection />
        <ContactSection />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
