import React from "react";

const Work = ({ id, name, category, image, work }) => {
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
      <ul className="  text-white border border-white/50">
        <div className="" variants={scrollAnimation} custom={0.4}>
         <div className="w-full h-[200px] "> <img src={image} alt="" className="h-full w-full object-cover " /></div>
         
          

          <p className="text-white/50 p-2">{category}</p>

       <p className="text-white/50 p-2">{work}</p>
       <h2 className="font-bold text-xl p-2">{name}</h2>
        </div>
      </ul>
    </>
  );
};

export default Work;
