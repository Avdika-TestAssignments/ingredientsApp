import React from 'react';

import Ingredient from './Ingredient';

function Results({ ingredients }) {
  return (
    <div>
      {ingredients !== [] &&
        ingredients.map(ingredient => <Ingredient ingredient={ingredient} />)}
    </div>
  )
}

export default Results;
