import { useState } from 'react'
import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"

export default function WeatherApp() {
	const [weatherInfo, setWeatherInfo] = useState({
		city: "Delhi",
		feels_like: 32.21,
		humidity: 31,
		temp: 33.05,
		tempMax: 33.05,
		tempMin: 33.05,
		weather: "haze"
	});

	let updateInfo = (newInfo) => {
		setWeatherInfo(newInfo);
	}

	return(
		<div style={{textAlign: "center"}}>
			<h2>Weather App</h2>
			<SearchBox updateInfo={updateInfo} />
			<InfoBox info={weatherInfo}/>
		</div>
	)
}