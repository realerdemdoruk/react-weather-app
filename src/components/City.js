import React from 'react';

function City({ city }) {
  return (
    <div className="city">
      <h2 id="cityName">{city.name}</h2>
      <h2 id="temp">{Math.round(city.main.temp)}°C</h2>
      <h2 id="desc">{city.weather[0].description}</h2>

      <h2 id="minMax">
        {Math.round(city.main.temp_min)}°C / {Math.round(city.main.temp_max)}°C
      </h2>
    </div>
  );
}

export default City;
