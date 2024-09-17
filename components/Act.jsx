import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Act = () => {
  const [weatherData, setWeatherData] = useState(null);
  const api = '6195420285d657719bc7e101aa5660c9';

  useEffect(() => {
    const fetchWeatherData = async () => {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Villejuif&units=metric&appid=${api}`
      );
      setWeatherData(result.data);
    };

    fetchWeatherData();
  }, []);

  return (
    <div id="Act" className="Act">
      <h5>Actualités</h5>
      <br />
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <p className="card-text">
              Aujourd'hui le temps est {weatherData?.weather[0].description} à{' '}
              <span id="Villejuif">Villejuif</span> la température est de{' '}
              <span id="temperature">{weatherData?.main.temp}</span>°C.
            </p>
            <p className="card-text">
              <small className="text-body-secondary"></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Act;
