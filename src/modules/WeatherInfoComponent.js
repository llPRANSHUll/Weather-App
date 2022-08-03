import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;

  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[props.name]} />
      <InfoLabel>
        {props.value}
        <span>{props.name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const isDay = props.weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(props.weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${props.weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src="/icons/perfect-day.svg" />
      </WeatherCondition>
      <Location>{`${props.weather?.name}, ${props.weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(props.weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent
          name="humidity"
          value={props.weather?.main?.humidity}
        />
        <WeatherInfoComponent name="wind" value={props.weather?.wind?.speed} />
        <WeatherInfoComponent
          name="pressure"
          value={props.weather?.main?.pressure}
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
