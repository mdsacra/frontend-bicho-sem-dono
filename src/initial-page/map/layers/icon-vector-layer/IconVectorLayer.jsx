import React, { useContext, useEffect, useState, useCallback } from "react";
import MapContext from "../../context/MapContext";
import VectorSource from "ol/source/Vector";
import OLVectorLayer from "ol/layer/Vector";
import { listOwnerlessPetPosts } from "../../../../api/ownerless-pet-post-api";
import { IconFeature } from "../../features/icon/IconFeature";
import {
	Drawer,
	DrawerContent,
	DrawerOverlay,
	DrawerBody,
	useDisclosure,
	DrawerHeader,
	Text
} from "@chakra-ui/react";
import { GhostButton } from "../../../../common-components/buttons/GhostButton";
import { CloseIcon } from "@chakra-ui/icons";
import "./styles.css";
import { VerticalSpace } from "../../../../common-components/VerticalSpace";
import { toLonLat } from "ol/proj";

const IconVectorLayer = () => {
	const { map } = useContext(MapContext); 
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [posts, setPosts] = useState(null);
	const [postIconInformation, setPostIconInformation] = useState({});
	const [isShowingPostInformation, setIsShowingPostInformation] = useState(false);

	const getPostIconInformation = useCallback((e) => {
		map.forEachFeatureAtPixel(e.pixel, () => {
			const feature = map.getFeaturesAtPixel(e.pixel)[0];
			setPostIconInformation(feature.values_);
			setIsShowingPostInformation(true);
			onOpen();
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
			map.on("click", getPostIconInformation);
  
			return () => {
				if (map) {
					map.removeLayer(vectorLayer);
				}
			};
		}
	}, [map, posts, getPostIconInformation]);

	return (
		<Drawer
			isOpen={isOpen}
			placement='top'
		>
			<DrawerOverlay />
			<DrawerContent minHeight="60%" borderBottomRadius="16px" bg="bsd.red">
				{ isShowingPostInformation &&
				<>
					<div className="drawer-header">
						<DrawerHeader color="bsd.blue">
							<Text fontSize="2xl">Pet abandonado</Text>
							<Text 
								fontSize="sm" 
								fontWeight={400}
							>
								{postIconInformation.localization.address}
							</Text>
						</DrawerHeader>
					</div>
					<div className="drawer-body">
						<DrawerBody >
							<Text fontSize="xl" color="bsd.blue">{postIconInformation.description}</Text>
							<VerticalSpace />
							<div className="drawer-close-button">
								<GhostButton textColor="bsd.blue" icon={<CloseIcon />} onClick={() => onClose()} />
							</div>
						</DrawerBody>
					</div>
				</>
				}
			</DrawerContent>
		</Drawer>
	);
};

export { IconVectorLayer };
