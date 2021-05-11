import React from 'react';
import uuid from 'react-uuid';
import { Box } from "@chakra-ui/react"

function QueryHistory({ onClick, queryHistory }) {
    console.log('__ queryHistory : ', queryHistory);
    return (
        <Box pos="absolute" left="25%" maxW="50%"  className='historyWindow'>
            <ul id="searchHistory">
            {queryHistory.map((historyElement, index) =>
                    index < 10 && <li key={uuid()} onClick={() => onClick(historyElement)}>{historyElement.query}</li>
                    )}
                </ul>
        </Box>
    );
};

export default QueryHistory;
