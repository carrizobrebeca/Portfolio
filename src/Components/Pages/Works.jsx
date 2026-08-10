import React from "react";
import Work from "./Work";

const Works = () => {
        const works = [
  { id: 1, name: "Deja Vu Market", category: "E-COMMERCE", image: "https://www.randstad.ch/s3fs-media/l-ch/public/bynder/F80CCC32-069F-47B7-94C894A10CCAE423.webp", work:"FULL-STACK" },
  { id: 2, name: "El Rocío", category: "BOOKAPP",  image: "https://iddigitalschool.com/bootcamps/wp-content/uploads/2021/06/que-es-full-stack.png", work:"FULL-STACK" },
  { id: 3, name: "Magic", category: "APP WEB",image: "https://website-dev.hn.ss.bfcplatform.vn/o_Z15_YPB_2r4_Fuch_Yi6ivd9_Ew1ol_TGKA_Fv_Rk_Wn_C_Ctf17_V1gp_KU_4edf46e8d0.jpg", work:"FULL-STACK" }
];
  return (
    <>
      <div className="max-auto max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
         {works.map(
        ({ id, name, category, image, work }) => {
          return (
            <Work
              key={id}
              id={id}
              name={name}
              category={category}
              image={image}
              work={work}

            />
 );
        }
      )}
      </div>
    </>
  );
};

export default Works;
