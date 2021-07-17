import React from 'react';

import { Container, ImgContainer, TextContainer, H2, Img } from '../Styled/IngredientStyle';

function Ingredient({ ingredient }) {
  return (
    <Container>
      <ImgContainer>
        <Img
          src={'https://spoonacular.com/cdn/ingredients_100x100/' + ingredient.image}
          alt={ingredient.name}
          width="100"
          float='right'
        />
      </ImgContainer>
      <TextContainer>
        <H2>{ingredient.name}</H2>
        </TextContainer>
    </Container>
  );
}

export default Ingredient;
