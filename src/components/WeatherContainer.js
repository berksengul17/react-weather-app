import { useWeather } from "../context/WeatherContext";

function WeatherContainer() {
	const { weatherInfo, loading } = useWeather();

	if (loading) return <span>Loading...</span>;

	return (
		<div className='weather-container'>
			{weatherInfo.map((day) => {
				let dayname = new Date(day.dt * 1000).toLocaleDateString("en", {
					weekday: "long",
				});

				return (
					<div
						key={day.dt}
						className={`weather ${
							new Date().getDate() ===
							new Date(day.dt * 1000).getDate()
								? "is-today"
								: ""
						}`}>
						<div className='day'>{dayname}</div>
						<img
							alt='Weather'
							src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
						/>
						<div className='temp'>
							<span>{`${Math.round(day.main.temp_min)}°`}</span>
							<span>{`${Math.round(day.main.temp_max)}°`}</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default WeatherContainer;
