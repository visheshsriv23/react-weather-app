import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function InfoBox({ info }) {
	const image_URL = "https://images.unsplash.com/photo-1561553873-e8491a564fd0?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"	
	const hot_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=758&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	const cold_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
	const rainy_URL = "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
	return(
		<div className="InfoBox">
			<div className="cardContainer">
			<Card sx={{ maxWidth: 400 }}>
		      <CardMedia
		        sx={{ height: 200 }}
		        image={
		        	info.humidity > 80
		        	 ? rainy_URL 
		        	 : info.temp > 15 
		        	 ? hot_URL 
		        	 : cold_URL 
		        }
		        title="green iguana"
		      />
		      <CardContent>
		        <Typography gutterBottom variant="h5" component="div">
		          {info.city }&nbsp; &nbsp;{
		        	info.humidity > 80
		        	 ? <ThunderstormIcon /> 
		        	 : info.temp > 15 
		        	 ? <LightModeIcon />
		        	 : <AcUnitIcon /> 
		        }
		        </Typography>
		        <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
		          <p>Temperature = {info.temp}&deg;C</p>
		          <p>Humidity = {info.humidity}</p>
		          <p>Min-Temperature = {info.tempMin}&deg;C</p>
		          <p>Max-Temperature = {info.tempMax}&deg;C</p>
		          <p>Weather can be described as <i><b>{info.weather}</b></i> Feels Like : {info.feels_like}&deg;C</p>
		        </Typography>
		      </CardContent>
		    </Card>
		</div>
		</div>
	)
}