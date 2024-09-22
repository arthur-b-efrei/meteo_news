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
      <h2>Actualités</h2>
      <br />
      <div className="Card-group">
        <div className="Card">
          <div className="Card-body">
            <p className="Card-text">
              Aujourd'hui le temps est {weatherData?.weather[0].description} à{' '}
              <span id="Villejuif">Villejuif</span> la température est de{' '}
              <span id="temperature">{weatherData?.main.temp}</span>°C.
            </p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Act;
