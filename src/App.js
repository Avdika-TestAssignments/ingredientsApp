import React, { useState, useEffect } from "react";
import "./App.css";
import Ingridient from "./components/Ingridient";
import Mainform from "./components/mainform";
import QueryHistory from "./components/QueryHistory";
import { ChakraProvider } from "@chakra-ui/react"

const apiKey = 'fced7d7b5e6440f3a7a173f5026615e3';

// const testData = [
//   {
//     "id": 19400,
//     "name": "banana chips",
//     "image": "banana-chips.jpg"
//   },
//   {
//     "id": 93671,
//     "name": "banana bread mix",
//     "image": "banana-bread.jpg"
//   },
//   {
//     "id": 93779,
//     "name": "banana liqueur",
//     "image": "limoncello.jpg"
//   }
// ];

function App() {
  const [query, setQuery] = useState("");
  const [ingridients, setIngridients] = useState([]);
  const [notifications, setNotifications] = useState("");
  
  // useEffect(() => {
  //   setQueryHistory(JSON.parse(localStorage.getItem('queryHistory')) || []);
  // }, [JSON.parse(localStorage.getItem('queryHistory'))]);

  const getUrl = () =>
    `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${query}&number=100&sort=calories&sortDirection=desc`;

  const getData = () => {
    if (query !== "") {
      // setQueryHistory([...queryHistory, { query, responce: testData}]);
      // resultsProcess(testData);
      fetch(getUrl())
        .then(response => response.json())
        .then(data => {
          console.log('__ data : ', data);
          if (data?.results?.length) {
            const queryHistory = JSON.parse(localStorage.getItem('queryHistory')) || [];
            localStorage.setItem('queryHistory', JSON.stringify([...queryHistory, { query, responce: data.results }]));
            resultsProcess(data.results);
          } else {
            setNotifications("Empty response");
          }
        })
        .catch(e => {
          console.log('error : ', e);
        });
    } else {
      setNotifications("Please fill the form");
    }
  };

  const resultsProcess = results => {
    setQuery("");
    setNotifications("");
    setIngridients(results);
  };

  const onHistoryClick = element => {
    console.log('__ onHistoryClick : ', element);
    resultsProcess(element.responce);
  }

  const onChange = e => {
    setQuery(e.target.value);
  }

  const queryToArray = request => request.split(/[ ,]+/);

  const onSubmit = e => {
    e.preventDefault();
    console.log('__ query : ', query);

    const queryArray = queryToArray(query);
    const queryHistory = JSON.parse(localStorage.getItem('queryHistory')) || [];
    const isNewRequest = !queryHistory.some(historyElement => {
      const { query: element, responce } = historyElement;
      const elementArray = queryToArray(element);

      if (
        !Array.isArray(queryArray)
        || !Array.isArray(elementArray)
        || queryArray.length !== elementArray.length
      ) {
        return false;
      }

      // .concat() to not mutate arguments
      const arr1 = queryArray.concat().sort();
      const arr2 = elementArray.concat().sort();

      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }

      resultsProcess(responce);

      return true;
    })

    if (isNewRequest) {
      getData();
    }
  };
  
  const queryHistory = JSON.parse(localStorage.getItem('queryHistory')) || [];
  return (
    <ChakraProvider>
    <div className="App">
      <h1>Ingridients Searching App</h1>
      <Mainform notifications={notifications} onChange={onChange} onSubmit={onSubmit} query={query} />
      <QueryHistory queryHistory={queryHistory} onClick={onHistoryClick} />
      <div className="ingridients">
        {ingridients !== [] &&
          ingridients.map(ingridient => <Ingridient ingridient={ingridient} />)}
      </div>
    </div>
    </ChakraProvider>
  );
};

export default App;
