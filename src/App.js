import './App.css';
import $ from 'jquery';
import apiKey from './secret';


const getWeatherData = (city) => {
  $.ajax({
    type: 'GET',
    url: `http://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=${apiKey}`,
    dataType: 'json',
    done: (data) => {
      return data;
    },
  });
}

const getCities = () => {
  return window.localStorage.getItem("cities");
}

const addCity = (city) => {
  const currentData = getCities();

  if (!currentData.includes(city)) {
    let updatedData = '';
    if ('' === currentData) {
      updatedData = currentData + city;
    } else {
      updatedData = currentData + ',' + city;
    }

    window.localStorage.setItem('cities', updatedData);
  }
}

const removeCity = (city) => {
  const currentData = getCities();
  window.localStorage.setItem('cities', currentData.replace(city + ',', ''));
}

const City = (props) => (
  <div>Current temperature in {props.data.city}: {props.data.temp} °C</div>
);


function App() {
  //const cityData = getWeatherData('Vienna');
  const cityData = {
    'city': 'Vienna',
    'temp': 11,
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>What's the weather like?</h1>
        <h3>Add your cities and see what the weather is like at those locations.</h3>
        <City data={cityData} />
      </header>
    </div>
  );
}

export default App;
