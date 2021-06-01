import React from "react";

export default function Ingredient({ ingredient }) {

  return (
    <div>
      <h1>{ingredient.name}</h1>
      <img src={'https://spoonacular.com/cdn/ingredients_100x100/'+ingredient.image} alt={ingredient.name} />
    </div>
  );
}
