import CitySelector from "./components/CitySelector";
import WeatherContainer from "./components/WeatherContainer";
import Footer from "./components/Footer";
import { LocationProvider } from "./context/LocationContext";
import { WeatherProvider } from "./context/WeatherContext";

import "./App.css";

function App() {
	return (
		<LocationProvider>
			<WeatherProvider>
				<h1>WEATHER APP</h1>
				<CitySelector />
				<WeatherContainer />
				<Footer />
			</WeatherProvider>
		</LocationProvider>
	);
}

export default App;
