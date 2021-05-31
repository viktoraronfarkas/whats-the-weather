import './App.css';
import $ from 'jquery';
import apiKey from './secret';
import cityStyle from './City.module.scss';

const getWeatherData = (city) => {
  let result = {};

  $.ajax({
    type: 'GET',
    url: `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`,
    dataType: 'json',
    async: false,
    success: (data) => {
      result = data;
    },
  });

  return result;
}

const getCities = (returnArray = false) => {
  if (returnArray) {
    return window.localStorage.getItem("cities") ?  window.localStorage.getItem("cities").split(',') : [];
  } else if (!returnArray) {
    return window.localStorage.getItem("cities") ? window.localStorage.getItem("cities") : '';
  }
}

const addCity = () => {
  const currentData = getCities();
  const city = $('#cityInput').val();

  if (city && !currentData.includes(city)) {
    let updatedData = '';
    if ('' === currentData) {
      updatedData = currentData + city;
    } else {
      updatedData = currentData + ',' + city;
    }

    window.localStorage.setItem('cities', updatedData);
    window.location.reload();
  }
}

const removeCity = (e) => {
  const city = e.target.getAttribute('data-js-name');
  const currentData = getCities();

  if (-1 !== currentData.indexOf(city + ',')) {
    window.localStorage.setItem('cities', currentData.replace(city + ',', ''));
  } else if (-1 !== currentData.indexOf(city)) {
    window.localStorage.setItem('cities', currentData.replace(city, ''));
  }

  window.location.reload();
}

const City = (props) => {
  const name = props?.data?.list[0]?.name;
  const temp = props?.data?.list[0]?.main?.temp;
  const feelsLike = props?.data?.list[0]?.main?.feels_like;
  const clouds = props?.data?.list[0]?.clouds?.all;
  const pressure = props?.data?.list[0]?.main?.pressure;
  const weatherDesc = props?.data?.list[0]?.weather[0].description;
  const style = cityStyle;

  return (
    <div className={style.container}>
      <h3 className={style.title}>{name}</h3>
      <svg className={style.closeIcon} onClick={ removeCity } data-js-name={name} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
           role="img" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 352 512">
        <path fill="currentColor" data-js-name={name}
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
      </svg>
      <h4>Current temperature: <span>{temp} °C</span></h4>
      <h4>Feels like: <span>{feelsLike} °C</span></h4>
      <h4>Cloudiness: <span>{clouds}%</span></h4>
      <h4>Atmospheric pressure: <span>{pressure} hPa</span></h4>
      <h4>Current weather: <span>{weatherDesc}</span></h4>
    </div>
  );
}

const App = () => {
  let cities = getCities(true);
  let weatherData = [];
  cities.forEach((city) => {
    weatherData.push(getWeatherData(city));
  });
  //window.localStorage.clear();

  return (
    <div className="App">
      <header className="App-header">
        <h1>What's the weather like?</h1>
        <h3>Add your cities and see what the weather is like at those locations.</h3>
        <input type='text' id='cityInput' placeholder='Enter a city..' />
        <button onClick={ addCity }>Add city</button>
        <div className='CitiesContainer'>
          {
            weatherData.map((item) => (
              <City data={item} />
            ))
          }
        </div>
      </header>
    </div>
  );
}

export default App;
