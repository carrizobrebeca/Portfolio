import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";
const Service = ({ id, name, description, point1, point2, point3, image }) => {
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
      <ul className=" about-list mx-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
        <motion.li className=" p-6 " variants={scrollAnimation} custom={0.4}>
          <p className="font-bold text-xl">{name}</p>

          <p className="text-white/50 pt-2">
            {description}
          </p>

          <div className="inset-block pt-4">
   <div className="flex justify-start items-center">
            <FiPlay className="" />
            <p className="text-white/50 pl-2 ">{point1}</p>
          </div>
             <div className="flex justify-start items-center">
            <FiPlay className="" />
            <p className="text-white/50 pl-2 ">{point2}</p>
          </div>
             <div className="flex justify-start items-center">
            <FiPlay className="" />
            <p className="text-white/50 pl-2 ">{point3}</p>
          </div>
          </div>
       
        </motion.li>
        <motion.li
          className="d-flex justify-center align-middle pt-8"
          variants={scrollAnimation}
          custom={0.6}
        >
          
            <img
            src={image}
            alt=""
            className="services "
          />
        </motion.li>
      </ul>
    </>
  );
};

export default Service;
