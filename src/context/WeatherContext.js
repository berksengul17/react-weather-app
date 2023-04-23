import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "./LocationContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
	const { location } = useLocation();
	const [weatherInfo, setWeather] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const API = "5a4eba316221300c155e8cc66841c0bb";
		const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&exclude=current,minutely,hourly,alerts&units=metric&lang=en&appid=${API}&cnt=40`;
		fetch(URL)
			.then((response) => response.json())
			.then((data) => {
				const dailyWeatherData = data.list.filter(
					(_, index) => index % 8 === 0
				);
				setWeather(dailyWeatherData);
				setLoading(false);
			})
			.catch((e) => console.log(e));
	}, [location]);

	const values = {
		weatherInfo,
		loading,
		setWeather,
		setLoading,
	};

	return (
		<WeatherContext.Provider value={values}>
			{children}
		</WeatherContext.Provider>
	);
};

export const useWeather = () => useContext(WeatherContext);
