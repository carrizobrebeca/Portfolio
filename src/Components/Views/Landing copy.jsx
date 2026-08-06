import React, { useState } from "react";
import NavBar from "../Pages/NavBar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/profile.png";
import laptop from "../../assets/laptop.png";
import laptop2 from "../../assets/laptop2.png";
import figma from "../../assets/Figma.png";
import sequelize from "../../assets/sequelize.png";
import tailwind from "../../assets/tailwind.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import git from "../../assets/git.png";
import postgresql from "../../assets/postgreSQL.png";
import javascript from "../../assets/javascript.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import react from "../../assets/React.svg.png";
import redux from "../../assets/redux.png";
import cv from "../../assets/RebecaCarrizoBourlot.docx.pdf";
import Corousel from "../Pages/Corousel";

const Home = () => {
  const images = [
    figma,
    sequelize,
    react,
    redux,
    javascript,
    express,
    node,
    postgresql,
    tailwind,
    html,
    css,
    git
  ];
  const navigate = useNavigate();
  const [reviews, setreviews] = useState([]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [showMoreInfoBack, setShowMoreInfoBack] = useState(false);
  const [showMoreInfoFront, setShowMoreInfoFront] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backInfo, setBackInfo] = useState(false);
  const [frontInfo, setFrontInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const handleToggleInfoBack = () => {
    setBackInfo(!backInfo);
  };

  const handleToggleInfoFront = () => {
    setFrontInfo(!frontInfo);
  };

  const toggleMoreInfo = () => {
    setShowMoreInfo((prev) => !prev);
  };

  const toggleMoreInfoBack = () => {
    setShowMoreInfoBack((prev) => !prev);
  };

  const toggleMoreInfoFront = () => {
    setShowMoreInfoFront((prev) => !prev);
  };

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
      <NavBar />

      <section
        className="home-section relative text-white"
        style={{
          marginTop: "30px",
          backgroundImage: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "50vh",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 10%",
        }}
      >
        <div className="inline-block pr-6 mr-6">
          <button onClick={handleEmail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              className="flex justify-center pb-6 mb-6"
            >
              <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
            </svg>
          </button>

          <a
            href="https://github.com/carrizobrebeca"
            className="flex justify-center pb-6 mb-6"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/rebeca-carrizo-bourlot-508316274"
            className="flex justify-center pb-6 mb-6 text-black"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </button>
          </a>

          <a
            href={cv}
            download
            className="flex justify-center pb-6 mb-6 text-black"
          >
            <button title="Descargar CV" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
            <motion.h1
              id="home"
              initial="hidden"
              animate="visible"
              variants={scrollAnimation}
              style={{ textAlign: "left" }}
            >
              <div className="md:text-4xl lg:text-5xl font-bold text-gray-500 w-full md:w-1/2">
                <div className="flex justify-start">
                  Hola, <span className="pl-2">soy </span>{" "}
                  <span className="text-pink-500 pl-2">Rebeca</span>
                </div>

                <div className="mt-2">
                  <p className="flex justify-center text-gray-600 text-base pt-4">
                    Diseño y desarrollo web
                  </p>

                  <p className="flex justify-center text-pink-400 text-base mt-2">
                    Contacto
                  </p>
                  <p className="flex justify-center text-gray-400 text-base mt-2">
                    carrizob.rebeca@gmail.com
                  </p>
                  {/* <a href="/login" className="flex justify-center pb-4 pt-2">
                    <button className="bg-transparent border-2 border-pink-200 text-pink-200 py-2 px-6 rounded-full text-lg font-bold hover:bg-pink-200 hover:text-white transition duration-300 ease-in-out">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        class="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    </button>
                  </a> */}
                </div>
              </div>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={scrollAnimation}
              transition={{ delay: 0.2 }}
              className="bg-white text-lg md:text-xl lg:text-2xl mb-8 text-black w-full md:w-1/2"
              style={{ textAlign: "right" }}
            >
              <div className="flex justify-center">
                <img
                  src={photo}
                  alt=""
                  className="w-80 h-80 bg-pink-200 object-cover"
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                />
              </div>
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={scrollAnimation}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <p className="text-pink-300 py-2 px-6 text-lg font-bold hover:text-pink-500 transition duration-300 ease-in-out">
              Desplázate
            </p>
            <p className="text-pink-300 py-2 px-6 text-lg font-bold hover:text-pink-500 transition duration-300 ease-in-out animate-ping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeÑinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </p>
          </motion.div>
        </div>
      </section>

      <div></div>

      <motion.section
        id="about"
        className="about bg-gray-100 text-center py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={0.2}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-500">
          Sobre mi
        </h2>
        <ul className="about-list mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
          <motion.li
            className="services border p-6 rounded-lg"
            variants={scrollAnimation}
            custom={0.4}
          >
            <p>
              Soy Full Stack Developer y estudiante de Lic en Informática. Vivo
              en Argentina. Actualmente trabajo en proyectos independientes y
              aprovecho el tiempo para aprender nuevas tecnologías.
            </p>
          </motion.li>

          <motion.li
            className="d-flex justify-center align-middle pt-8"
            variants={scrollAnimation}
            custom={0.6}
          >
            <img
              src="https://img.freepik.com/premium-vector/caucasian-female-software-developer-her-40s-debugging-program_1238364-92002.jpg"
              alt=""
              className="services border rounded-lg"
            />
          </motion.li>
        </ul>
      </motion.section>
      <div></div>
      <div></div>
      <motion.section
  className="habilidades-section bg-white mt-0 mb-0"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollAnimation}
>
  <Corousel/>
  {/* <div
    x-data="{}"
    x-init="$nextTick(() => {
      let ul = $refs.logos;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
  >
    <ul
      x-ref="logos"
      className="flex items-center animate-infinite-scroll"
    >
    
      {images.map((img, index) => (
        <li key={index} className="flex-shrink-0 mx-8">
          <img className="w-40" src={img} alt={`Logo de ${img.split('/').pop().split('.')[0]}`} />
        </li>
      ))}
  
      {images.map((img, index) => (
        <li key={index + images.length} className="flex-shrink-0 mx-8">
          <img className="w-40" src={img} alt={`Logo de ${img.split('/').pop().split('.')[0]}`} />
        </li>
      ))}
    </ul>
  </div> */}
</motion.section>



      <div></div>

      <motion.section
        className="habilidades bg-gray-200 text-center py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={1}
      >
        <div className="habilidades-list mx-auto max-w-2xl flex flex-col gap-8">
          <motion.div
            className="testimonial border p-6 rounded-lg flex flex-row justify-around items-center"
            variants={scrollAnimation}
            custom={1.2}
          >
            <span className="text-pink-400 pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
            </span>
            <h2 className="text-gray-700 text-2xl md:text-2xl lg:text-2xl font-bold pl-6">
              Front End
            </h2>
            <button
              onClick={handleToggleInfoFront}
              className="text-pink-400 pl-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </motion.div>
          {frontInfo && (
            <div>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Tailwind</p>
              <p>React</p>
              <p>Redux</p>
              <p>Cloudinary</p>
            </div>
          )}
          <motion.div
            className="habilidad p-6 flex flex-row justify-around items-center"
            variants={scrollAnimation}
            custom={1.4}
          >
            <span className="text-pink-400 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
                />
              </svg>
            </span>
            <h2 className="text-gray-700 text-2xl md:text-2xl lg:text-2xl font-bold pl-2">
              Back End
            </h2>
            <button
              onClick={handleToggleInfoBack}
              className="text-pink-400 pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </motion.div>
          {backInfo && (
            <div>
              <p>Node.Js</p>
              <p>Express</p>
              <p>Postgress</p>
              <p>Sequelize</p>
            </div>
          )}
          <motion.div
            className="habilidades border p-6 rounded-lg flex flex-row justify-around items-center"
            variants={scrollAnimation}
            custom={1.6}
          >
            <span className="text-pink-400 pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                />
              </svg>
            </span>
            <h2 className="text-md text-gray-700 text-2xl md:text-2xl lg:text-2xl font-bold pl-6">
              Diseño
            </h2>
            <button className="text-pink-400 pl-6" onClick={handleToggleInfo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {showMoreInfo && (
          <div>
            <p>Figma</p>
            <p>Photoshop</p>
          </div>
        )}
      </motion.section>

      <section
        id="educacion"
        className="how-it-works bg-white text-center py-16 px-4"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-500 font-bold mb-8">
          Educación
        </h2>
        <div className="relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
            custom={1.8}
            className="step-container mb-12"
          >
            <div className="step-number bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Universidad Siglo XXI
            </h3>
            <p className="text-md text-gray-700">Licenciatura en informática</p>
            <p className="text-md text-gray-700">2022-2026</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollAnimation}
            custom={2}
            className="step-container mb-12"
          >
            <div className="step-number bg-pink-400 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Henry</h3>
            <p className="text-md text-gray-700">Full Stack Developer</p>
            <p className="text-md text-gray-700">2023 - 2024</p>
          </motion.div>
        </div>
      </section>
      <motion.section
        id="proyects"
        className="proyects bg-gray-100 text-center py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.2}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-500">
          Proyectos
        </h2>
        <ul className="proyects-list mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {["Countries", "FoodGlobal"].map((project, index) => (
            <motion.li
              key={index}
              className="proyects border p-6 rounded-lg relative transition duration-300 bg-white"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              variants={scrollAnimation}
              custom={2.4 + index * 0.2}
            >
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gray-100 filter blur-sm z-0"></div>
              )}
              <div
                className={`${hoveredIndex === index ? "filter blur-sm" : ""}`}
              >
                <h3 className="text-xl font-semibold">{project}</h3>
                <p>
                  Proyecto {index === 0 ? "individual" : "grupal"}. Henry
                  bootcamp
                </p>
                <p>{index === 0 ? "Plataforma web" : "e-commerce"}</p>
                <img
                  src={index === 0 ? laptop2 : laptop}
                  alt={`${project} Project`}
                />
              </div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex justify-center items-center z-10">
                  <a
                    href="https://github.com/carrizobrebeca?tab=repositories"
                    className="flex justify-center pb-6 mb-6"
                  >
                    <button className="rounded-full bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="80"
                        height="80"
                        viewBox="0 0 30 30"
                      >
                        <path
                          fill="#ed50a1"
                          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                        ></path>
                      </svg>
                    </button>
                  </a>
                </div>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <div></div>
      <motion.section
        id="services"
        className="services bg-white text-center py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={2.8}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-500">
          Servicios
        </h2>
        <ul className="services-list mx-auto max-w-2xl text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.li
            className="services relative border p-6 rounded-lg"
            variants={scrollAnimation}
            custom={3}
          >
            <svg
              width="30%"
              height="30%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-500"
            >
              <path
                d="M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokLinejoin="round"
              />
            </svg>
            <h3 className="text-xl font-semibold">Front End</h3>
            <h3 className="text-xl font-semibold">Developer</h3>
            <div className="flex justify-between mt-6 pt-6">
              <p>Ver más</p>
              <button
                onClick={toggleMoreInfoFront}
                className="hover:animate-ping"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            {showMoreInfoFront && (
              <div className="absolute inset-0 bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg z-10">
                <h4 className="text-base font-semibold">Front End</h4>
                <p>Desarrollo sitios </p>
                <p>web intuitivos</p>
                <p>Diseño la interfaz </p>
                <p>gráfica de usuario</p>
                <p>Aseguro una buena </p>
                <p>experiencia en la aplicación</p>
                <div className="flex justify-between mt-2 text-black">
                  <button
                    onClick={toggleMoreInfoFront}
                    className="hover:animate-ping"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>{" "}
                  <p>Ver menos</p>
                </div>
              </div>
            )}
          </motion.li>

          <motion.li
            className="services relative border p-6 rounded-lg"
            variants={scrollAnimation}
            custom={3.2}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="30%"
              height="30%"
              viewBox="0 0 24 24"
              id="server-network"
            >
              <path
                fill="#ed50a1"
                d="M8,6A1,1,0,1,0,7,5,1,1,0,0,0,8,6ZM21,19H14.82A3,3,0,0,0,13,17.18V15h4a3,3,0,0,0,3-3V10a3,3,0,0,0-.78-2A3,3,0,0,0,20,6V4a3,3,0,0,0-3-3H7A3,3,0,0,0,4,4V6a3,3,0,0,0,.78,2A3,3,0,0,0,4,10v2a3,3,0,0,0,3,3h4v2.18A3,3,0,0,0,9.18,19H3a1,1,0,0,0,0,2H9.18a3,3,0,0,0,5.64,0H21a1,1,0,0,0,0-2ZM6,4A1,1,0,0,1,7,3H17a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H7A1,1,0,0,1,6,6Zm1,9a1,1,0,0,1-1-1V10A1,1,0,0,1,7,9H17a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1Zm5,8a1,1,0,1,1,1-1A1,1,0,0,1,12,21ZM8,10a1,1,0,1,0,1,1A1,1,0,0,0,8,10Z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold">Back End</h3>
            <h3 className="text-xl font-semibold">Developer</h3>
            <div className="flex justify-between mt-6 pt-6">
              <p>Ver más</p>
              <button
                onClick={toggleMoreInfoBack}
                className="hover:animate-ping"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            {showMoreInfoBack && (
              <div className="absolute inset-0 bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg z-10">
                <h4 className="text-base font-semibold">Back End</h4>
                <p>Autenticación de usuario</p>
                <p>Base de Datos</p>
                <p>Notificaciones</p>
                <div className="flex justify-between mt-2 text-black">
                  <button
                    onClick={toggleMoreInfoBack}
                    className="hover:animate-ping"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>{" "}
                  <p>Ver menos</p>
                </div>
              </div>
            )}
          </motion.li>
          <motion.li
            className="services relative border p-6 rounded-lg text-pink-500"
            variants={scrollAnimation}
            custom={3.4}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30%"
              height="30%"
              id="web-grid"
            >
              <path
                fill="#ed50a1"
                d="M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM14,20H4V13H14Zm0-9H4V4H14Zm6,9H16V4h4Z"
              ></path>
            </svg>
            <h3 className="text-xl font-semibold text-black">Diseño</h3>
            <h3 className="text-xl font-semibold text-black">UX/UI</h3>
            <div className="flex justify-between mt-6 pt-6 text-black">
              <p>Ver más</p>
              <button onClick={toggleMoreInfo} className="hover:animate-ping">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            {showMoreInfo && (
              <div className="absolute inset-0 bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg z-10">
                <h4 className="text-base font-semibold">Diseño UX/UI</h4>
                <p>Arquitectura</p>
                <p> de la información</p>
                <p>Pruebas de interacción</p>
                <p>Patrones de diseño</p>
                <div className="flex justify-between mt-2 text-black">
                  <button
                    onClick={toggleMoreInfo}
                    className="hover:animate-ping"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>{" "}
                  <p>Ver menos</p>
                </div>
              </div>
            )}
          </motion.li>
        </ul>
      </motion.section>
      <div></div>
      <motion.section
        className="contact bg-gray-100 text-center py-16 pb-2 pt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scrollAnimation}
        custom={3.6}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-2 col-md-4 text-gray-500">¡Contame tu idea!</div>
          <div className="col-2 col-md-4 pb-4">
            {" "}
            <p>carrizob.rebeca@gmail.com</p>
            {/* <a href="/login">
              <button className="bg-transparent border-2 border-pink-200 text-pink-200 py-2 px-6 rounded-full text-lg font-bold hover:bg-pink-200 hover:text-white transition duration-300 ease-in-out">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </a> */}
          </div>
          <button onClick={handleEmail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
            </svg>
          </button>
          <a href="https://github.com/carrizobrebeca">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </button>
          </a>
          <a href="https://www.linkedin.com/in/rebeca-carrizo-bourlot-508316274">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </button>
          </a>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="mb-0 text-gray-500">
            Creado con{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline-block w-6 h-6 animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>{" "}
            Rebeca Carrizo Bourlot
          </h6>
        </div>
      </motion.section>
    </>
  );
};

export default Home;