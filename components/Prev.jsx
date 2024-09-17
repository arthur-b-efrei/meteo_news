import React, { useState, useEffect } from 'react';

const Prev = () => {
  const [forecastData, setForecastData] = useState(null);
  const api = '6195420285d657719bc7e101aa5660c9';

  useEffect(() => {
    const getForecast = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=Villejuif&lang=fr&units=metric&appid=${api}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === '200') {
          setForecastData(data.list.filter((_, i) => i % 8 === 0));
        } else {
          setForecastData(null);
        }
      } catch (error) {
        console.error('Erreur:', error);
        setForecastData(null);
      }
    };

    getForecast();
  }, []);

  return (
    <div id="Previsions" className="Previsions">
      <h5>Prévisions</h5>
      <div id="forecast">
        {forecastData ? (
          forecastData.map((forecast) => {
            const date = new Date(forecast.dt * 1000);
            const options = { weekday: 'long', day: 'numeric', month: 'long' };
            const dateString = date.toLocaleDateString('fr-FR', options);
            const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
            return (
              <div className="forecast-item" key={forecast.dt}>
                <h6>{dateString}</h6>
                <img src={iconUrl} alt="Weather icon" />
                <p>Température : {forecast.main.temp}°C</p>
                <p>Humidité : {forecast.main.humidity}%</p>
                <p>Vent : {forecast.wind.speed} m/s</p>
              </div>
            );
          })
        ) : (
          <p>Chargement des données météorologiques...</p>
        )}
      </div>
    </div>
  );
};

export default Prev;
