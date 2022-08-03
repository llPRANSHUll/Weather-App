import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const API_KEY = "2e9f9ba65f3ff0d48d220bc1bbe3b4b1";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
`;

const Applabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <Applabel>Weather App</Applabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      {/*<WeatherComponent></WeatherComponent>*/}
    </Container>
  );
}

export default App;
