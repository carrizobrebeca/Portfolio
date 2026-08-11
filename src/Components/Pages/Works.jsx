import React from "react";
import Work from "./Work";

const Works = () => {
        const works = [
  { id: 1, name: "Deja Vu Market", category: "E-COMMERCE", image: "https://res.cloudinary.com/x968hkr9/image/upload/v1786455384/wsqzz8uhv7wcjjth50pz.jpg", work:"FULL-STACK" },
  { id: 2, name: "El Rocío", category: "BOOKAPP",  image: "https://res.cloudinary.com/x968hkr9/image/upload/v1786454879/wrivfkmql4wyot41giql.jpg", work:"FULL-STACK" },
  { id: 3, name: "Magic", category: "APP WEB",image: "https://res-console.cloudinary.com/x968hkr9/thumbnails/v1/image/upload/v1786455739/aHRrdmxhbGl0OW1vNjZ5Y3V5bzE=/preview", work:"FULL-STACK" }
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
