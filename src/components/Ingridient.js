import React from "react";

export default function Ingridient({ ingridient }) {

  return (
    <div>
      <h1>{ingridient.name}</h1>
      <img src={'https://spoonacular.com/cdn/ingredients_100x100/'+ingridient.image} alt={ingridient.name} />
    </div>
  );
}
