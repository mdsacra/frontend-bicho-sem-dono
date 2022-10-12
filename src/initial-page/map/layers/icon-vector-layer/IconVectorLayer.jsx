import React, { useContext, useEffect, useState, useCallback } from "react";
import MapContext from "../../context/MapContext";
import VectorSource from "ol/source/Vector";
import OLVectorLayer from "ol/layer/Vector";
import { listOwnerlessPetPosts } from "../../../../api/ownerless-pet-post-api";
import { IconFeature } from "../../features/icon/IconFeature";
import "./styles.css";

const IconVectorLayer = () => {
	const { map } = useContext(MapContext); 
	const [posts, setPosts] = useState(null);
	const [postIconInformation, setPostIconInformation] = useState({});
	const [isShowingPostInformation, setIsShowingPostInformation] = useState(false);

	const getPostIconInformation = useCallback((e) => {
		map.forEachFeatureAtPixel(e.pixel, () => {
			const feature = map.getFeaturesAtPixel(e.pixel)[0];
			console.log(feature);
			setPostIconInformation(feature.values_);
			setIsShowingPostInformation(true);
		});
	}, [map]);

	useEffect(() => {
		if (!map) return;

		if (!posts){
			listOwnerlessPetPosts().then(result => setPosts(result));
		}
  
		if (posts?.length > 0){
			var postLocalizationsMapped = posts.map(post => IconFeature(post));

			const vectorSource = new VectorSource({
				features: postLocalizationsMapped,
			});

			let vectorLayer = new OLVectorLayer({
				source: vectorSource,
			});
  
			map.on("click", getPostIconInformation);
			map.addLayer(vectorLayer);
  
			return () => {
				if (map) {
					map.removeLayer(vectorLayer);
				}
			};
		}
	}, [map, posts, getPostIconInformation]);
      
	console.log(postIconInformation);
	console.log(isShowingPostInformation);

	return (
		<div>
			{isShowingPostInformation && 
<div className="ownerless-pet-post-information">
	<p>{postIconInformation.petSpecies === 1 ? "Cachorro abandonado" : "Gato abandonado"}</p>
	<p>{postIconInformation.localization.address}</p>
	<p>{postIconInformation.description}</p>
	<button onClick={() => setIsShowingPostInformation(false)}>Fechar</button>
</div>}
		</div>

	);

};

export { IconVectorLayer };