import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const WeatherWrap = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  align-content: center;
`;

const InputCity = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  padding: 20px;
  font-size: 18px;
  border: 3px solid black;
`;

const CityWeather = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  border: 2px solid black;
  margin-top: 100px;
  padding: 20px;
`;

export default function Input() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState();

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const handleInputChage = (event) => {
    setLocation(event.target.value);
    //console.log(location);
  };

  const activeEnter = (event) => {
    if (event.key === "Enter") {
      searchWeather();
      //console.log("엔터");
      //console.log(location);
    }
  };

  const searchWeather = async () => {
    try {
      const response = await axios.get(apiUrl);
      //console.log(typeof response.data);
      setData(response.data);
    } catch (error) {
      console.log("fetch 동작에서 오류가 발생했습니다", error);
    }
  };

  return (
    <WeatherWrap>
      <InputCity
        onChange={handleInputChage}
        onKeyDown={activeEnter}
        type="text"
        placeholder="도시를 입력하세요"
      />
      {data ? (
        <CityWeather>
          <p style={{ fontSize: "40px" }}>{data.name}</p>
          <br />
          <p style={{ fontSize: "80px" }}>
            {Math.round(((data.main.temp - 273.15) * 10) / 10)}°C
          </p>
          <br />
          <p style={{ fontSize: "35px", textAlign: "right" }}>
            {data.weather[0].main}
          </p>
        </CityWeather>
      ) : null}
    </WeatherWrap>
  );
}
