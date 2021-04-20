/*
æ=e
ø=o
å=a
*/ 

import React, { useEffect,useState } from 'react';
import './App.css';

const api = {
  key: "b1b7d8aabc91d00eb14c524e82835f99",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  var unit="";
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(weather);
        });
    }
  }
  fetch('https://extreme-ip-lookup.com/json/')
  .then( res => res.json())
  .then(response => {
    console.log("Country: ", response.country);
  })
  .catch((data, status) => {
    console.log('Request failed');
  })
  /*
  function () {
    if (weather.weather[0].main=="Clouds") {
      return <img src/>
    }
    return <img src/>
  }
  */

  const DatoFunksjon = (d) => {
    let maneder =["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]

    let dager = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];
    
    let dag = dager[d.getDay()];
    let dato = d.getDate();
    let maned = maneder[d.getMonth()];
    let ar =d.getFullYear();

    return `${dag} ${dato} ${maned} ${ar}`
  }

  return (
    
    <div className={
      (typeof weather.main != "undefined")
      ? ((weather.main.temp > 16)
      ? 'App varm' : 'App')
      : 'App'}>
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
        
        {(typeof weather.main != "undefined") ? (
        <div>
        <div className="by-box">
          <div className="by">{weather.name}, {weather.sys.country}</div>
          <div className="dato">{DatoFunksjon(new Date())}</div>
        </div>
        <div className="ver-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="ver">
            {weather.weather[0].main}
          </div>
          <div className="ikon">
          <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='ikon'></img>
          </div>
        </div>
        </div>
  ) : ("")}
      </main>
    </div>
  );
}

export default App;
