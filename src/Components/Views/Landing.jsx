import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Service from "../Pages/Service";
import Services from "../Pages/Services";
import Works from "../Pages/Works";
const Landing = () => {
  const navigate = useNavigate();
  const handleEmail = () => {
    window.location.href = "mailto:carrizob.rebeca@gmail.com";
  };
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };

  return (
    <>
      <section className="home-section  ">
        <div className=" relative h-screen w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*KAO1Gm5fqpnKM49Y"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
            <div className="absolute  top-4 w-full text-base sm:text-xl  text-white ">
              <div className="grid grid-cols-3 w-full ">
                <div className="flex justify-center pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 pb-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6 pt-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <h2 className=" text-sm">Rebeca Carrizo Bourlot</h2>
                </div>

                <div className="flex justify-center">
                  <div className="flex justify-around">
                    <h2 className="ml-2 mr-2">About</h2>
                    <h2 className="ml-2 mr-2">Porfolio</h2>
                    <h2 className="ml-2 mr-2">Services</h2>
                    <h2 className="ml-2 mr-2">Testimonials</h2>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="border  text-sm p-2">Contact me</button>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-3 gap-4 text-white">
              <h2 className="flex justify-center">Freelance web developer</h2>
              <h2 className="flex justify-center">based in Argentina</h2>

              <button className="border text-sm p-2">Check my work</button>
            </div>
          </div>
        </div>
      </section>

      <div className=" bg-[#130024] text-white">
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
                className="services "
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
                Soy Rebeca Carrizo Bourlot. Soy Full Stack Developer y
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
          id="sevices"
          className="sevices py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={0.2}
        >
          <div className="font-bold ml-10 text-xl">Services</div>
          <div className="mx-auto max-w-2xl"><Services /></div>
          
          </motion.section>
<div className="border-2 border-white/50 mr-10 ml-10"></div>
<motion.section
          id="work"
          className="work py-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scrollAnimation}
          custom={0.2}
        >
          <ul className=" mx-auto max-w-2xl ">
           
          <Works />
            
          </ul>
        </motion.section>
      </div>
    </>
  );
};

export default Landing;
