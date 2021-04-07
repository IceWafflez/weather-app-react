/*
æ=e
ø=o
å=a
*/ 

import React, { useState } from 'react';
import './App.css';
const api = {
  key: "0c275275d6148774fa53bd2575dc98b8",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&AAPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(weather);
        });
    }
  }


  const DatoFunksjon = (d) => {
    let maneder =["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

    let dager = ["Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag","Søndag"];

    let dag = dager[d.getDay()];
    let dato = d.getDate();
    let maned = maneder[d.getMonth()];
    let ar =d.getFullYear();

    return `${dag} ${dato} ${maned} ${ar}`
  }

  return (
    
    <div className="App">
      <main>
        <div className="box-sok">
          <input 
            type="text"
            className="bar-sok"
            placeholder="Søk..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <br></br><br></br><br></br>
        <div className="by-box">
          <div className="by">Oslo,No</div>
          <div className="dato">{DatoFunksjon(new Date())}</div>
        </div>
        <div className="ver-box">
          <div className="temp">
            15C
          </div>
          <div className="ver">
            Sol
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
