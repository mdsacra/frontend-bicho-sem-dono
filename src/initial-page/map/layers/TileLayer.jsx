import { useContext, useEffect } from "react";
import { MapContext } from "../context/MapContext";
import OLTileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

const TileLayer = () => {
	const { map } = useContext(MapContext); 

	useEffect(() => {
		if (!map) return;
		const zIndex = 0;

		let tileLayer = new OLTileLayer({
			source: new OSM(),
			zIndex: zIndex,
		});

		map.addLayer(tileLayer);

		tileLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(tileLayer);
			}
		};
	}, [map]);

	return null;
};

export { TileLayer };