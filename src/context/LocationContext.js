import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
	const [location, setLocation] = useState("Adana");

	const values = {
		location,
		setLocation,
	};

	return (
		<LocationContext.Provider value={values}>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocation = () => useContext(LocationContext);
