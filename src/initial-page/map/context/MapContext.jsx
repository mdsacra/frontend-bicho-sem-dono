import React, { useState } from "react";
import PropTypes from "prop-types";

const MapContext = new React.createContext();

const MapProvider = ({ children }) => {
	const [map, setMap] = useState(null);

	return (
		<MapContext.Provider value={{ 
			map,
			setMap
		}}>
			{children}
		</MapContext.Provider>);
};

export { MapContext, MapProvider };

MapProvider.propTypes = {
	children: PropTypes.element.isRequired
};