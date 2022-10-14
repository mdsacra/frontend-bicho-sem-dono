import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import {Icon, Style} from "ol/style";
import ownerlessPetPostMarker from "./markers/ownerless-pet-post-marker.png";
import {useGeographic} from "ol/proj";

export const IconFeature = (post) => {
	useGeographic();

	const iconStyle = new Style({
		image: new Icon({
			src: ownerlessPetPostMarker
		})
	});

	const iconFeature = new Feature({
		geometry: new Point([post.localization.longitude, post.localization.latitude])
	});

	iconFeature.setStyle(iconStyle);
	iconFeature.setProperties(post);

	return iconFeature;
};