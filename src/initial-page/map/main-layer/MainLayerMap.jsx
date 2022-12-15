import React, { useRef, useState, useEffect, useContext } from "react";
import "./styles.css";
import { MapContext } from "../context/MapContext";
import { View, Map } from "ol";
import { fromLonLat } from "ol/proj";
import PropTypes from "prop-types";
import { useCallback } from "react";

const MainLayerMap = ({ children }) => {
	const { setMap } = useContext(MapContext);
	const mapRef = useRef();
	const [deviceLocation, setDeviceLocation] = useState(null);
	const DEFAULT_ZOOM = 14;

	const getDeviceLocation = useCallback(() => {
		navigator.geolocation.getCurrentPosition(position => 
			setDeviceLocation(
				[
					position.coords.longitude,
					position.coords.latitude
					
				]
			)
		);
	}, []);

	useEffect(() => {
		if (deviceLocation === null) {
			getDeviceLocation();
		}

		let mapObject;
		if (deviceLocation){
			let options = {
				view: new View(
					{ 
						zoom: DEFAULT_ZOOM, 
						center: fromLonLat(deviceLocation)
					}
				)
			};
	
			mapObject = new Map(options);
			mapObject.setTarget(mapRef.current);
			setMap(mapObject);
		}
    
		return () => { 
			if (mapObject) {
				mapObject.setTarget(undefined);
			}  
		};
	}, [deviceLocation, getDeviceLocation, setMap]);

	return (
		<div ref={mapRef} className="ol-map" style={{ height: window.innerHeight }}>
			{children}
		</div>
	);
};

export { MainLayerMap };

MainLayerMap.propTypes = {
	children: PropTypes.element.isRequired
};
