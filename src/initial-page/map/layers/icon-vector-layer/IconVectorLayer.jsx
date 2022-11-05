import { useContext, useEffect, useState, useCallback } from "react";
import { MapContext } from "../../context/MapContext";
import VectorSource from "ol/source/Vector";
import OLVectorLayer from "ol/layer/Vector";
import { listOwnerlessPetPosts } from "../../../../api/ownerless-pet-post-api";
import { IconFeature } from "../../features/icon/IconFeature";
import { toLonLat } from "ol/proj";

const IconVectorLayer = (callback) => {
	const { map } = useContext(MapContext); 
	const [posts, setPosts] = useState(null);

	const getPostIconInformation = useCallback((e) => {
		map.forEachFeatureAtPixel(e.pixel, () => {
			const feature = map.getFeaturesAtPixel(e.pixel)[0];
			callback(feature.values_);
		});
	}, [map, callback]);

	useEffect(() => {
		if (!map) return;

		const listPosts = async () => {
			if (!posts){
				var longitudeAndLatitude = toLonLat(map.getView().getCenter());
				var longitude = longitudeAndLatitude[0];
				var latitude = longitudeAndLatitude[1];
				var result = await listOwnerlessPetPosts(longitude, latitude);
				setPosts(result);
			}
		};
		
		listPosts();

		if (posts?.length > 0){
			console.log("render");
			var postLocalizationsMapped = posts.map(post => IconFeature(post));

			const vectorSource = new VectorSource({
				features: postLocalizationsMapped,
			});

			let vectorLayer = new OLVectorLayer({
				source: vectorSource,
			});

			map.addLayer(vectorLayer);
			map.on("pointermove", function (e) {
				const pixel = map.getEventPixel(e.originalEvent);
				const hit = map.hasFeatureAtPixel(pixel);
				map.getTarget().style.cursor = hit ? "pointer" : "";
			});
			map.on("click", getPostIconInformation);
  
			return () => {
				if (map) {
					map.removeLayer(vectorLayer);
				}
			};
		}
	}, [map, posts, getPostIconInformation]);
};

export { IconVectorLayer };