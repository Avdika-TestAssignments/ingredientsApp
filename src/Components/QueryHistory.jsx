import React from 'react';
import uuid from 'react-uuid';

import { Container, Ul, Description } from '../Styled/QueryHistoryStyle';

function QueryHistory({ onClick, queryHistory }) {
  return (
    <Container>
      <Description>Your search history. You can click on it to repeat query</Description>
      <Ul>
        {queryHistory.map((historyElement, index) =>
          index < 10 && <li key={uuid()} onClick={() => onClick(historyElement)}>{historyElement.query}</li>
        )}
      </Ul>
    </Container>
  );
}

export default QueryHistory;
