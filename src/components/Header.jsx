import React, { useState } from "react";
import {
  Coffee,
  House,
  SquareChevronRight,
  Menu,
  UserCircle2Icon,
} from "lucide-react";

export function Header({ onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 py-3">
      <div className="container mx-auto px-4 flex justify-between items-center sticky">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Coffee className="h-5 w-5 text-orange-500 md:h-6 md:w-6" />
          <span className="text-lg font-bold md:text-xl">JavaCourse</span>
        </div>

        {/* Botón de menú hamburguesa solo visible en móviles */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300"
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <UserCircle2Icon className="h-7 w-7 lg:block text-gray-300" />
        </div>

        {/* Navegación */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } flex absolute items-center justify-center top-9 left-0 right-0 bg-gray-800 p-1 px-3 lg:static lg:flex lg:items-center lg:space-x-4 lg:ml-auto`}
        >
          <button
            onClick={() => {
              onNavigate("inicio");
              setIsMobileMenuOpen(false);
            }}
            className="flex hover:text-orange-500 transition"
          >
            <House className="mr-1" />
            Inicio
          </button>

          <button
            onClick={() => {
              onNavigate("comienzo");
              setIsMobileMenuOpen(false);
            }}
            className="flex hover:text-orange-500 transition"
          >
            <SquareChevronRight className="mr-1" />
            Comienzo
          </button>
        </nav>

        {/* Icono de usuario en pantallas grandes */}
        <UserCircle2Icon className="h-7 w-7 lg:block hidden text-gray-300" />
      </div>
    </header>
  );
}
