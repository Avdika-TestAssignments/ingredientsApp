import React, { useState } from 'react';

import { apiKey } from './config';
import Results from './Components/Results';
import Mainform from './Components/Mainform';
import QueryHistory from './Components/QueryHistory';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [notifications, setNotifications] = useState("");

  const getUrl = () =>
    `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&query=${query}&number=100&sort=calories&sortDirection=desc`;

  const getData = () => {
    if (query !== "") {
      fetch(getUrl())
        .then(response => response.json())
        .then(data => {
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
    setIngredients(results);
  };

  const onHistoryClick = element => {
    resultsProcess(element.responce);
  };

  const onChange = e => {
    setQuery(e.target.value);
  };

  const queryToArray = request => request.split(/[ ,]+/);

  const onSubmit = e => {
    e.preventDefault();

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
    });

    if (isNewRequest) {
      getData();
    }
  };

  const queryHistory = JSON.parse(localStorage.getItem('queryHistory')) || [];

  return (
    <div className="App">
      <h1>Ingredients Searching App</h1>
      <Mainform notifications={notifications} onChange={onChange} onSubmit={onSubmit} query={query} />
      <QueryHistory queryHistory={queryHistory} onClick={onHistoryClick} />
      <Results ingredients={ingredients} />
    </div>
  );
};

export default App;
