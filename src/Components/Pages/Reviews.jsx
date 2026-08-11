//         const reviews = [
//   { id: 1, userName: "Mirta", points: "5",  review:"Una aplicación excelente, muy fácil de usar. Desde el primer momento pude entender cómo funcionaba. Todo está muy bien organizado. " }, 
//   { id: 2, userName: "Hilda", points: "5",    review:"Me sorprendió lo simple y práctica que es la aplicación. Tiene un diseño moderno, las funciones están muy bien pensadas y todo funciona de manera rápida. Realmente me facilita mucho las cosas." },
//   { id: 3, userName: "Erwin", points: "5", review:"Una muy buena experiencia. La aplicación tiene una interfaz limpia, moderna y fácil de usar. Me gustó especialmente que todas las opciones estén organizadas de forma clara y que sea tan sencilla de utilizar." }
// ];

import React, { useEffect } from "react";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview } from "../../Store/reviewSlice";

const Reviews = () => {

  const dispatch = useDispatch();

  const { allReview, status, error } = useSelector(
    (state) => state.reviews
  );

  useEffect(() => {
    dispatch(fetchReview());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Cargando reviews...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }


  return (
    <>
      <div className="full grid grid-cols-1 md:grid-cols-2 gap-8">
         {allReview.map(
        ({ id, userName, points,  review }) => {
          return (
            <Review
              key={id}
              id={id}
              userName={userName}
              points={points}
             
              review={review}

            />
 );
        }
      )}
      </div>
    </>
  );
};

export default Reviews;
