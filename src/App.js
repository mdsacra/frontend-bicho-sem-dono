import React, { useState, useEffect } from 'react';
import './App.css';

const getData = (action) => {
  fetch('https://bichosemdono.herokuapp.com/BichoSemDonoOnBuilding')
  .then(response => response.json())
  .then(data =>  action(data));  
}

const App = () => {
  const [data, setData] = useState();

  return (
    <div className="App">
      <header className="App-header">
        
        <button onClick={() => getData(setData)}>
          <img src='insert_pet_btn.png' width={150} alt='clique aqui' />
        </button>
        <h1>{data && data.title}</h1>
        <p>
          {data && data.subtitle}
        </p>
      </header>
    </div>
  );
}

export default App;
