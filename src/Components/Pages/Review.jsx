import React from "react";
import { FaStar } from "react-icons/fa";
const Review = ({ id, userName, points,  review }) => {
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
      <ul className=" text-white  bg-[#0A0342] bg-opacity-40 p-4">
        <div className="" variants={scrollAnimation} custom={0.4}>
         <div className="flex justify-start text-yellow-300  pl-2">{Array.from({ length: points }).map((_, index) => (
  <FaStar key={index} />
))}</div>  
         <p className="text-white/50 p-2 pt-6 h-[170px]">{review}</p>
        <div className="flex justify-start font-bold text-xl p-2"><div className="rounded-full bg-white/50 w-10 h-10 flex justify-center items-center ">N</div ><div className="pl-2">{userName}</div></div>

      
       
        </div>
      </ul>
    </>
  );
};

export default Review;
