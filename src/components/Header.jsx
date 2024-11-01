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
    <header className="bg-[#ffd5bd] py-3">
      <div className="container mx-auto px-4 flex justify-between items-center sticky">
        <div className="flex items-center space-x-2">
          <Coffee className="h-5 w-5 text-orange-500 md:h-6 md:w-6" />
          <span className="text-[#000000] text-lg font-bold md:text-xl font-montserrat">
            JavaCourse
          </span>
        </div>

        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#000000]"
          >
            <Menu className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          <UserCircle2Icon className="h-7 w-7 lg:block text-[#000000]" />
        </div>

        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } font-montserrat flex absolute items-center justify-center top-9 left-0 right-0 bg-[#ffd5bd] p-1 px-3 lg:static lg:flex lg:items-center lg:space-x-4 lg:ml-auto`}
        >
          <button
            onClick={() => {
              onNavigate("inicio");
              setIsMobileMenuOpen(false);
            }}
            className="text-[#000000] flex hover:text-orange-500 transition font-bold"
          >
            <House className="mr-1" />
            Inicio
          </button>

          <button
            onClick={() => {
              onNavigate("comienzo");
              setIsMobileMenuOpen(false);
            }}
            className="text-[#000000] flex hover:text-orange-500 transition font-bold"
          >
            <SquareChevronRight className="mr-1" />
            Comienzo
          </button>
        </nav>

        <UserCircle2Icon className="h-7 w-7 lg:block hidden text-[#000000] lg:text-[#000000]" />
      </div>
    </header>
  );
}
