import React from 'react'
import Service from './Service';

const Services = () => {
    const services = [
  { id: 1, name: "Front End", description: "Lorem sajhasjfhsf sjashdjsadasjd sjhaferjbjc", point1:"ytrytry", point2:"cxcawwr", point3:"aerer",image: "https://www.randstad.ch/s3fs-media/l-ch/public/bynder/F80CCC32-069F-47B7-94C894A10CCAE423.webp" },
  { id: 2, name: "Back End", description: "Usdfajsfjdndf sdjhdjf jsjfnsdfh ss er", point1:"fdfdsfdf", point2:"jmhcc", point3:"dsdasdasdsa", image: "https://iddigitalschool.com/bootcamps/wp-content/uploads/2021/06/que-es-full-stack.png" },
  { id: 3, name: "Full Stack", description: "sdaje jsahcnejh asjhrje cash dsdjjhfej ", point1:"ukif", point2:"vdsdfg", point3:"qewqetr",image: "https://website-dev.hn.ss.bfcplatform.vn/o_Z15_YPB_2r4_Fuch_Yi6ivd9_Ew1ol_TGKA_Fv_Rk_Wn_C_Ctf17_V1gp_KU_4edf46e8d0.jpg" }
];
  return (
    <>
    <div className='inline-block'>
          {services.map(
        ({ id, name, description, point1, point2, point3, image }) => {
          return (
            <Service
              key={id}
              id={id}
              name={name}
              description={description}
              point1={point1}
              point2={point2}
              point3={point3}
              image={image}
              
            />
 );
        }
      )}
    </div>
    </>
  )
}

export default Services