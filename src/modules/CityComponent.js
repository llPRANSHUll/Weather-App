import styled from "styled-components";

const WeatherLogo = styled.img`
  height: 140px;
  width: 140px;
  margin: 40px auto;
`;

const ChooseCityLable = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
  }
`;

const CityComponent = (props) => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLable> Find weather of your city</ChooseCityLable>
      <SearchBox onSubmit={props.fetchWeather}>
        <input
          placeholder="city"
          onChange={(e) => props.updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
