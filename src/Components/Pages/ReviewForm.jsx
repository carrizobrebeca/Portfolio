import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReview } from '../../Store/reviewSlice';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {
     const navigate = useNavigate();
    const [rating, setRating] = useState(0);

    const dispatch = useDispatch();

  const { allReview, status, error } = useSelector(
    (state) => state.reviews
  );

 const postReview = (e) => {
    e.preventDefault();

    const reviewData = {
      userName: e.target.userName.value,
      review: e.target.review.value,
      points: String(rating),
    };

    

    dispatch(fetchNewReview(reviewData))
    .then(
        () => {
          alert('¡Reseña enviada con éxito!');
          navigate("/");
         
        },
        (error) => {
          alert('Ocurrió un error al enviar la reseña...');
          console.log('FAILED...', error.text);
        }
      );
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

                        <div className='flex justify-center  w-[300px]  lg:w-[400px] h-[400px] bg-white/50 rounded-xl p-4 text-[#08021F]'>

                            <form  onSubmit={postReview} className="flex flex-col w-full h-full">

                                <h2 className="flex justify-center">
                                    Tu opinión es muy importante
                                </h2>

                                <h2 className="flex justify-center">
                                    Contanos tu experiencia con la app
                                </h2>

                                <label htmlFor="" className="pt-4">
                                    Nombre
                                </label>

                                <input
                                    type="text" name="userName"
                                    placeholder=" Nombre"
                                    className="h-10 rounded-xl pl-2"
                                />

                                <label htmlFor="" className="pt-4">
                                    Reseña
                                </label>

                                <textarea
                                    type="text"
                                    name="review"
                                    placeholder=" Escribe tu reseña"
                                    className="flex-1 min-h-0 resize-none rounded-xl pl-2"
                                />
                                <div className="flex flex-col items-center pt-3">
                                    <p className="text-sm">¿Qué puntaje le das?</p>

                                    <div className="flex gap-2 pt-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar
                                                key={star}
                                                onClick={() => setRating(star)}
                                                className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-400" : "text-white/50"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <button type="submit" className="bg-[#08021F] p-2 rounded-full text-white/50 mt-4 ml-10 mr-10">
                                    Guardar
                                </button>

                            </form>

                        </div>

                        <div className="fixed bottom-2 text-white/50">© Prometheus Studio</div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default ReviewForm
