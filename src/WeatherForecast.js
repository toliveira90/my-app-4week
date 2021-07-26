import React, { useState } from "react";
import axios from "axios";

export default function Weatherforecast() {
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState("");

    function enterWeather(response) {
        setWeather(response.data);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "2bbfe2c83b5eba58ece5b7c5c691290a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(enterWeather);
    }

    function enterLocality(event) {
        setCity(event.target.value);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <input
                type="search"
                placeholder="Enter a locality..."
                onChange={enterLocality}
            />
            <input type="submit" value="Search" />
        </form>
    );
    if (weather.length < 1) return form;

    return (
        <div className="Weather-details">
            {form}
            <ul>
                <li>Temperature: {Math.round(weather.main.temp)}°C</li>
                <li>Description: {weather.weather[0].description}</li>
                <li>Humidity: {Math.round(weather.main.humidity)}%</li>
                <li>Wind: {Math.round(weather.wind.speed)}km/h</li>
                <li>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="weather icon"
                    ></img>
                </li>
            </ul>
        </div>
    );
}