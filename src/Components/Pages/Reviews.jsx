import React from "react";
import Work from "./Work";
import Review from "./Review";

const Reviews = () => {
        const reviews = [
  { id: 1, userName: "Roque Perez", points: "5",  review:"fnsdsdfjdsfjsjfbnsdjcsdcm sd dsfjd jsdjskfesf  jsdfcjskrfnsejrb sdfckdsjsrfsernj " },
  { id: 2, userName: "Hilda Bourlot", points: "5",    review:"tretgergergb rtytrhtb tgrgsdgv rgdftgrth" },
  { id: 3, userName: "Claudio Nuñez", points: "5", review:"FULL-STACK" }
];
  return (
    <>
      <div className="full grid grid-cols-1 md:grid-cols-2 gap-8">
         {reviews.map(
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
