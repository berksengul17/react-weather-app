import { getCityNames } from "turkey-neighbourhoods";
import { useLocation } from "../context/LocationContext";

function CitySelector() {
	const { setLocation } = useLocation();
	const cityContainer = [];

	getCityNames().forEach((city, index) => {
		cityContainer.push(
			<option value={city} key={index}>
				{city}
			</option>
		);
	});

	return (
		<div className='city-selector'>
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
		</div>
	);
}

export default CitySelector;
