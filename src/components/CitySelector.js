import { getCityNames } from "turkey-neighbourhoods";
import { useLocation } from "../context/LocationContext";

function CitySelector() {
	const { location, setLocation } = useLocation();
	const cityContainer = [];

	getCityNames().forEach((city, index) => {
		cityContainer.push(
			<option value={city} key={index}>
				{city}
			</option>
		);
	});

	return (
		<div>
			<select
				name='cities'
				id='cities'
				onChange={(e) => {
					setLocation(
						e.target[e.target.options.selectedIndex].innerText
					);
				}}>
				{cityContainer}
			</select>
			<br />
			Current location - {location}
		</div>
	);
}

export default CitySelector;
