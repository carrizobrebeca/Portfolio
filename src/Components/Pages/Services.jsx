import React from 'react'
import Service from './Service';







const Services = () => {
    const services = [
  { id: 1, name: "Front End", description: "Desarrollo sitios web intuitivos. Diseño la interfaz gráfica de usuario. Aseguro una buena experiencia en la aplicación.", point1:"JavaScript HTML", point2:"CSS Tailwind", point3:"React Redux", point4:" Cloudinary", image: "https://www.randstad.ch/s3fs-media/l-ch/public/bynder/F80CCC32-069F-47B7-94C894A10CCAE423.webp" },
  { id: 2, name: "Back End", description: "Autenticación de usuario. Base de Datos. Notificaciones.", point1:"Node.Js", point2:"Express", point3:"Postgress", point4:" Sequelize", image: "https://iddigitalschool.com/bootcamps/wp-content/uploads/2021/06/que-es-full-stack.png" },
  { id: 3, name: "Full Stack", description: "Arquitectura de la información. Pruebas de interacción. Patrones de diseño. ", point1:"Base de datos", point2:"Mantenimiento", point3:"Notificaciones por e-mail", point4:" Pasarela de pago",image: "https://website-dev.hn.ss.bfcplatform.vn/o_Z15_YPB_2r4_Fuch_Yi6ivd9_Ew1ol_TGKA_Fv_Rk_Wn_C_Ctf17_V1gp_KU_4edf46e8d0.jpg" }
];
  return (
    <>
    <div className='inline-block  w-full'>
          {services.map(
        ({ id, name, description, point1, point2, point3, point4,image }) => {
          return (
            <Service
              key={id}
              id={id}
              name={name}
              description={description}
              point1={point1}
              point2={point2}
              point3={point3}
               point4={point4}
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