import React, { useContext, useEffect, useState, useCallback } from "react";
import { MapContext } from "../../context/MapContext";
import VectorSource from "ol/source/Vector";
import OLVectorLayer from "ol/layer/Vector";
import { listOwnerlessPetPosts } from "../../../../api/ownerless-pet-post-api";
import { IconFeature } from "../../features/icon/IconFeature";
import { Text } from "@chakra-ui/react";
import { GhostButton } from "../../../../common-components/buttons/GhostButton";
import { CloseIcon } from "@chakra-ui/icons";
import "./styles.css";
import { VerticalSpace } from "../../../../common-components/VerticalSpace";
import { toLonLat } from "ol/proj";

const IconVectorLayer = () => {
	const { map } = useContext(MapContext); 
	const [posts, setPosts] = useState(null);
	const [postIconInformation, setPostIconInformation] = useState({});
	const [isShowingPostInformation, setIsShowingPostInformation] = useState(false);

	const getPostIconInformation = useCallback((e) => {
		map.forEachFeatureAtPixel(e.pixel, () => {
			const feature = map.getFeaturesAtPixel(e.pixel)[0];
			setPostIconInformation(feature.values_);
			setIsShowingPostInformation(true);
		});
	}, [map]);

	useEffect(() => {
		if (!map) return;

		if (!posts){
			var longitudeAndLatitude = toLonLat(map.getView().getCenter());
			var longitude = longitudeAndLatitude[0];
			var latitude = longitudeAndLatitude[1];
			listOwnerlessPetPosts(longitude, latitude).then(result => setPosts(result));
		}
  
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
	}, [map, posts, getPostIconInformation]);

	return (
		<>
			{
				isShowingPostInformation &&
			<div className="ownerless-pet-post-information-overlay-container">
				<div className="ownerless-pet-post-information">
					<div className="drawer-header">
						<Text fontSize="2xl" color="bsd.blue">Pet abandonado</Text>
						<Text 
							fontSize="sm" 
							fontWeight={400}
							color="bsd.blue"
						>
							{postIconInformation.localization.address}
						</Text>
					</div>
					<div className="drawer-body">
						<Text fontSize="xl" color="bsd.blue">{postIconInformation.description}</Text>
						<VerticalSpace />
						<div className="drawer-close-button">
							<GhostButton textColor="bsd.blue" icon={<CloseIcon />} onClick={() => setIsShowingPostInformation(false)} />
						</div>
					</div>
				</div>
			</div>
			}
		</>
	);
};

export { IconVectorLayer };
