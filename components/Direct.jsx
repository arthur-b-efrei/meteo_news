import React, { useState } from 'react';

const Direct = () => {
  const [cityName, setCityName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [weatherImage, setWeatherImage] = useState('./img/pt.png');
  const api = '6195420285d657719bc7e101aa5660c9';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${api}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWindSpeed(data.wind.speed);
        setWeatherImage(getWeatherIcon(data.weather[0].main));
      } else {
        setTemperature('');
        setHumidity('');
        setWindSpeed('');
        setWeatherImage('./img/pt.png');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setTemperature('');
      setHumidity('');
      setWindSpeed('');
      setWeatherImage('./img/pt.png');
    }
  };

  const getWeatherIcon = (weather) => {
    let imageUrl = '';
    if (weather === 'Clear') {
      imageUrl = './img/soleil.png';
    } else if (weather === 'Clouds') {
      imageUrl = './img/des-nuages.png';
    } else if (weather === 'Rain') {
      imageUrl = './img/pluie-abondante.png';
    } else if (weather === 'Snow') {
      imageUrl = './img/flocon.png';
    } else {
      imageUrl = './img/cars.jpg';
    }
    return imageUrl;
  };

  return (
    <div id="Direct" className="Direct">
      <h2>En direct</h2>
      <br />
      <form id="weatherForm" className="Query" onSubmit={handleSubmit}>
        <input
          type="text"
          id="city"
          placeholder="Entrez le nom de la ville"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      <br />
      <div className="weather-info">
        <div className="Weather-card">
          <p>
            Ville : <span id="cityName">{cityName}</span>
          </p>
          <p>
            Température : <span id="directTemperature">{temperature}</span>°C
          </p>
          <p>
            Humidité : <span id="directHumidity">{humidity}</span>%
          </p>
          <p>
            Vent : <span id="directWindSpeed">{windSpeed}</span> m/s
          </p>
        </div>
        <img id="weatherImage" src={weatherImage} alt="Image de la météo en France" />
      </div>
    </div>
  );
};

export default Direct;
