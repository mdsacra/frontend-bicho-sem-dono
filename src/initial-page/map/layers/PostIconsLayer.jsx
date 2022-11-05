import React, { useContext, useEffect, useState, useCallback } from "react";
import { MapContext } from "../context/MapContext";
import VectorSource from "ol/source/Vector";
import OLVectorLayer from "ol/layer/Vector";
import { IconFeature } from "../features/icon/IconFeature";
import { OwnerlessPetPostInformation } from "../../posts-information/ownerless-pet-post-information/OwnerlessPetPostInformation";
import PropTypes from "prop-types";

const PostIconsLayer = ({ posts }) => {
	const { map } = useContext(MapContext); 
	const [postIconInformation, setPostIconInformation] = useState({});
	const [isShowingPostInformation, setIsShowingPostInformation] = useState(false);

	const getPostIconInformation = useCallback((e) => {
		map.forEachFeatureAtPixel(e.pixel, () => {
			const feature = map.getFeaturesAtPixel(e.pixel)[0];
			setPostIconInformation(feature.values_);
			setIsShowingPostInformation(true);
		});
	}, [map, setPostIconInformation]);

	useEffect(() => {
		if (!map) return;

		if (posts?.length > 0){
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
	}, [map, getPostIconInformation, posts]);

	return (
		<>
			{
				isShowingPostInformation &&
				<OwnerlessPetPostInformation postInformation={postIconInformation} onClose={() => setIsShowingPostInformation(false)} />
			}
		</>
	);
};

export { PostIconsLayer };

PostIconsLayer.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object)
};