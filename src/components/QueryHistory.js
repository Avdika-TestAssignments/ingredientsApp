import React from 'react';
import uuid from 'react-uuid';

function QueryHistory({ onClick, queryHistory }) {
    console.log('__ queryHistory : ', queryHistory);
    return (
        <div pos="absolute" left="25%" maxW="50%"  className='historyWindow'>
            <ul id="searchHistory">
            {queryHistory.map((historyElement, index) =>
                    index < 10 && <li key={uuid()} onClick={() => onClick(historyElement)}>{historyElement.query}</li>
                    )}
                </ul>
        </div>
    );
};

export default QueryHistory;
