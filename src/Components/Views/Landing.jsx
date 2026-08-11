import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbBrandGithubFilled } from "react-icons/tb";

import Service from "../Pages/Service";
import Services from "../Pages/Services";
import Works from "../Pages/Works";
import Reviews from "../Pages/Reviews";

const Landing = () => {
  const navigate = useNavigate();
 
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_843uirh',    
        'template_1vvooik',    
        'kPa60sIBAK0F48k3o'      
      )
      .then(
        () => {
          alert('¡Correo enviado con éxito!');
          form.current.reset(); // Limpia el formulario
        },
        (error) => {
          alert('Ocurrió un error al enviar el correo...');
          console.log('FAILED...', error.text);
        }
      );
  };

  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };
  const handleScroll = (id) => {
    console.log(`Scrolling to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>

      <section className=" home-section bg-[#08021F]">
        <div id="home" className=" relative h-screen w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*KAO1Gm5fqpnKM49Y"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex h-full w-full items-center justify-center bg-[#08021F] bg-opacity-40 backdrop-blur-sm">
            <div className="absolute top-4 text-sm lg:text-xl text-white w-full px-2">
              <div className="flex w-full items-center justify-between ">

                {/* NOMBRE */}
                <div className="flex items-center justify-start  min-w-0 flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 lg:size-6 shrink-0 pb-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 lg:size-6 shrink-0 pt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>

                  <h2 className="whitespace-nowrap text-xs sm:text-sm lg:text-xl">
                    Rebeca Carrizo
                  </h2>
                </div>




                {/* CONTACT */}
                <div className="flex justify-end flex-1 pr-2">
                  <a
                    href="#home"
                    onClick={() => handleScroll("contact")}
                    className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
                  ><button className="border hover:border-white/50 p-1 sm:p-2 text-xs sm:text-sm lg:text-xl whitespace-nowrap">
                      Contact me
                    </button></a>

                </div>

              </div>
            </div>
            <div className="absolute top-10"><div className="flex justify-around min-w-0 flex-[2] pt-2">
              <div className="flex items-center justify-center gap-4  text-white">
                <a
                  href="#home"
                  onClick={() => handleScroll("about")}
                  className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
                >
                  <h2 className="lg:ml-2 lg:mr-2 whitespace-nowrap hover:text-white/50">
                    About
                  </h2>
                </a>

                <a
                  href="#home"
                  onClick={() => handleScroll("services")}
                  className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
                >
                  <h2 className="lg:ml-2 lg:mr-2 whitespace-nowrap hover:text-white/50">
                    Services
                  </h2>
                </a>
                <a
                  href="#home"
                  onClick={() => handleScroll("portfolio")}
                  className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
                >
                  <h2 className="lg:ml-2 lg:mr-2 whitespace-nowrap hover:text-white/50">
                    Porfolio
                  </h2>
                </a>



                <a
                  href="#home"
                  onClick={() => handleScroll("reviews")}
                  className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
                >
                  <h2 className="lg:ml-2 lg:mr-2 whitespace-nowrap hover:text-white/50">
                    Testimonials
                  </h2>
                </a>


              </div>
            </div></div>
            <div className="grid grid-rows-3 gap-4 text-white">
              <h2 className="flex justify-center">Freelance web developer</h2>
              <h2 className="flex justify-center">based in Argentina</h2>

<div className="flex justify-center"><a
                href="#home"
                onClick={() => handleScroll("portfolio")}
                className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
              >
                <button className="border hover:border-white/50 hover:text-white/50 p-2">Check my work</button>
              </a></div>

              
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-[#08021F] text-white">
        <motion.section
          id="about"
          className="about py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={0.2}
        >
          <ul className="about-list mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.li
              className="d-flex justify-center align-middle pt-8"
              variants={scrollAnimation}
              custom={0.6}
            >
              <img
                src="https://img.freepik.com/premium-vector/caucasian-female-software-developer-her-40s-debugging-program_1238364-92002.jpg"
                alt=""

              />
              <div className="grid grid-cols-3 pt-4">
                <div>
                  <a
                    href="https://github.com/carrizobrebeca"
                    className="flex justify-center pb-6 mb-6"
                  >
                    <SiGmail className="" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/carrizobrebeca"
                    className="flex justify-center pb-6 mb-6"
                  >
                    <AiFillGithub className="" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/rebeca-carrizo-bourlot-508316274"
                    className="flex justify-center pb-6 mb-6"
                  >
                    <FaLinkedin className="" />
                  </a>
                </div>
              </div>
            </motion.li>
            <motion.li
              className=" p-6 "
              variants={scrollAnimation}
              custom={0.4}
            >
              <p className="font-bold ">
                Soy Rebeca Carrizo. Soy Full Stack Developer y
                estudiante de Lic en Informática.
              </p>

              <p className="text-white/50 pt-2">
                Vivo en Argentina. Actualmente trabajo en proyectos
                independientes y aprovecho el tiempo para aprender nuevas
                tecnologías.
              </p>
            </motion.li>
          </ul>
        </motion.section>
        <div className="border-2 border-white/50 mr-10 ml-10"></div>
        <motion.section
          id="services"
          className="sevices py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={0.2}
        >
          <div className="font-bold ml-4 lg:ml-10 text-xl ">Services</div>
          <div className="mx-auto max-w-2xl"><Services /></div>

        </motion.section>
        <div className="border-2 border-white/50 mr-10 ml-10"></div>
        <motion.section
          id="portfolio"
          className="work py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={0.2}
        >
          <div className="font-bold ml:4 lg:ml-10 text-xl pb-6">Work</div>
          <ul className=" mx-auto max-w-2xl ">

            <Works />

          </ul>
        </motion.section>
        <div className="border-2 border-white/50 mr-10 ml-10"></div>
        <motion.section
          id="reviews"
          className="review py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={0.2}
        >
          <div className="font-bold ml:4 lg:ml-10 text-xl pb-6">Reviews</div>
          <div className="mx-auto max-w-2xl">

            <Reviews />

          </div>
        </motion.section>
        <div className="border-2 border-white/50 mr-10 ml-10"></div>
        <motion.section
          id="contact"
          className="contact mx-auto max-w-2xl text-center py-16 pb-2 pt-2 px-2 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={3.6}
        >
          <div className="d-flex justify-content-center align-items-center bg-[#0A0342] ">
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 sm:gap-8">

              {/* COLUMNA IZQUIERDA */}
              <div className="flex justify-start p-4">
                <div className="grid grid-rows-6 w-full">

                  <h2 className="flex justify-start text-left">
                    Vamos a hablar sobre
                  </h2>

                  <h2 className="flex justify-start text-left flex-wrap">
                    una
                    <span className="font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pr-2 pl-2">
                      idea
                    </span>
                    <span>juntos</span>
                  </h2>

                  <h2 className="flex justify-start pt-4 text-left">
                    Estoy interesado en ...
                  </h2>

                  <div className="flex justify-start items-center pt-4 w-full gap-2 flex-wrap">
                    <div className="bg-white/50  rounded-lg text-[#0A0342] p-2 text-sm sm:text-base">
                      E-commerce Website
                    </div>

                    <div className="bg-white/50  rounded-lg text-[#0A0342]  p-2 text-sm sm:text-base">
                      Landing page
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-2 flex-wrap pt-2">
                    <div className="bg-white/50  rounded-lg text-[#0A0342]  p-2 text-sm sm:text-base">
                      Portfolio
                    </div>

                    <div className="bg-white/50  rounded-lg text-[#0A0342]  p-2 text-sm sm:text-base">
                      Blog Website
                    </div>

                    <div className="bg-white/50  rounded-lg text-[#0A0342]  p-2 text-sm sm:text-base">
                      Institucional
                    </div>
                  </div>

                </div>
              </div>

              {/* COLUMNA DERECHA */}
              <form  ref={form} onSubmit={sendEmail} className="flex justify-center p-4 text-[#0A0342]">
                <div className="grid grid-rows-5 gap-2 w-full">

                  <input type="email" name="user_email" placeholder="E-mail" className="rounded-lg w-full p-2" />

                  <input type="text" name="name" placeholder="Nombre y Apellido" className="rounded-lg w-full p-2" />

                  <textarea name="message" required placeholder="Mensaje" className="rounded-lg w-full p-2" />

                  <button type="submit" className="bg-white/50  rounded-lg   ml-4 mr-4 sm:ml-8 sm:mr-8 mt-2 mb-2 h-10">
                    Enviar
                  </button>

                  <div className="flex justify-around   ">

                    <div className="border border-white/50  rounded-full text-white/50   size-10 flex justify-center items-center">
                      <a href="https://github.com/carrizobrebeca">
                        <PiInstagramLogoFill className="size-5 max-sm:size-4" />
                      </a>
                    </div>

                    <div className="border border-white/50  rounded-full text-white/50   size-10  flex justify-center items-center">
                      <a href="https://github.com/carrizobrebeca">
                        <TbBrandGithubFilled className="size-5 max-sm:size-4" />
                      </a>
                    </div>

                    <div className="border border-white/50  rounded-full text-white/50  size-10 flex justify-center items-center">
                      <a href="https://www.linkedin.com/in/rebeca-carrizo-bourlot-508316274">
                        <FaLinkedinIn className="size-5 max-sm:size-4" />
                      </a>
                    </div>

                  </div>

                </div>
              </form>

            </div>
          </div>
        </motion.section>
        <div className="flex justify-center"><footer className=" pb-2 text-white/50">© Prometheus Studio</footer></div>
        <div
          className="fixed bottom-0 left-4 w-full h-auto p-4 bg-transparent flex justify-end items-end"
          style={{
            left: 0,
            textAlign: "right",
            zIndex: 9999,
          }}
        >

          <a
            href="#home"
            onClick={() => handleScroll("home")}
            className="flex items-center space-x-2 hover:text-white/50 cursor-pointer"
          >  <button className="bg-white/50 text-[#0A0342] text-xl rounded-full w-10 h-10">^</button></a>


        </div>
      </div>


    </>
  );
};

export default Landing;