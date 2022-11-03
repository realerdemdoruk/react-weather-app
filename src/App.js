import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import City from './components/City';

function App() {
  const myKey = 'aaa934e4e44b686673376e8c48307317';
  const url = 'https://api.openweathermap.org/data/2.5/';

  const [search, setSearch] = useState('Sinop');
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `${url}weather?q=${search}&appid=${myKey}&units=metric&lang=tr`
        );
        console.log(response.data);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input onChange={(e) => setSearch(e.target.value)} />
      {city && <City city={city} />}
    </div>
  );
}

export default App;
