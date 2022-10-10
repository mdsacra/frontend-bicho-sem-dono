import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Icon, Style} from 'ol/style';
import ownerlessPetPostMarker from './markers/ownerless-pet-post-marker.png'
import {useGeographic} from 'ol/proj';

export const IconFeature = (localization) => {
    useGeographic();
    console.log(localization);
    const iconStyle = new Style({
        image: new Icon({
            src: ownerlessPetPostMarker,
        })
    });

    const iconFeature = new Feature({
        geometry: new Point([localization.longitude, localization.latitude])
    });
          
    iconFeature.setStyle(iconStyle);

    return iconFeature;
}
