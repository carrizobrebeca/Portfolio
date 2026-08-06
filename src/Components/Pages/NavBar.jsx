import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = (id) => {
    console.log(`Scrolling to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="text-gray-500 p-3 text-lg flex justify-between items-center w-full fixed right-2 top-0 left-0 z-50 bg-white pb-1">
      <div className="flex items-start">
       
      </div>

      <div className="flex space-x-4">
      <a
          href="#home"
          onClick={() => handleScroll("home")}
          className="flex items-center space-x-2 hover:text-pink-400 cursor-pointer"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

        </a>
        <a
          href="#about"
          onClick={() => handleScroll("about")}
          className="flex items-center space-x-2 hover:text-pink-400 cursor-pointer"
        >
          Sobre mí
        </a>
        <a
          href="#proyects"
          onClick={() => handleScroll("proyects")}
          className="flex items-center space-x-2 hover:text-pink-400 cursor-pointer"
        >
          Proyectos
        </a>
        <a
          href="#services"
          onClick={() => handleScroll("services")}
          className="flex items-center space-x-2 hover:text-pink-400 cursor-pointer"
        >
          Servicios
        </a>
    
      </div>
    </nav>
  );
};

export default Navbar;