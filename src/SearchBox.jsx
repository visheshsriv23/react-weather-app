import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
	const API_URL = import.meta.env.VITE_API_URL;
	const API_KEY = import.meta.env.VITE_API_KEY;
	let [city, setCity] = useState("");
	let [error, setError] = useState("false");

	let getWeatherInfo = async () => {
		try{
			if(!API_URL || !API_KEY){
				console.log("Missing data");
				return;
			}
			let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
			let jsonResponse = await res.json();
			let result = {
				city: city,
				temp: jsonResponse.main.temp,
				tempMin: jsonResponse.main.temp_min,
				tempMax: jsonResponse.main.temp_max,
				humidity: jsonResponse.main.humidity,
				feels_like: jsonResponse.main.feels_like,
				weather: jsonResponse.weather[0].description
			};
			console.log(result);
			return result;
		} catch(err) {
			console.error(err);
			throw err;
			
		}
		console.log(jsonResponse);
	}

	let handleChange = (event) => {
		setCity(event.target.value);
	};

	let handleSubmit = async(event) => {
		try{
			event.preventDefault();
			console.log(city);
			setError(false);
			setCity("");
			let info = await getWeatherInfo(city);
			updateInfo(info);
		} catch(err){
			setError(true);
		}
	};

	return (
		<div className="SearchBox">
			<form onSubmit={handleSubmit}>
				<TextField
				 id="city"
				 label="Search City Name"
				 variant="filled" 
				 required 
				 value={city}
				 onChange={handleChange}
				/>
				<br/>
				<br/>
				 <Button variant="contained" type="submit" endIcon={<SendIcon />}>
			       Search
			     </Button>
			     {error && <p style={{color: "red"}}><b>Sorry!</b> We dont have data for such place</p>}
			</form>
		</div>
	)
}