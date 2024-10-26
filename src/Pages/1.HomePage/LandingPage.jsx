import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col bg-[url('/img/BackgroundJava.jpg')] text-white">
      <Header onNavigate={onNavigate} />

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-[40px] sm:text-[60px] font-bold mb-4 md:mb-16">
            APRENDE <span className="text-orange-500">JAVA</span> BASICO
          </h1>
          <p className="text-lg sm:text-[25px] mb-16 max-w-lg  leading-relaxed">
            Aprende JAVA de una forma básica y sencilla, desde el uso de
            variables hasta ciclos for y while. ¡Desarrolla tu lógica de
            programación!
          </p>
          <button
            onClick={() => onNavigate("comienzo")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg transition transform hover:scale-105"
          >
            COMIENZO
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
