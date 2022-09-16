import { useContext, useEffect, useState } from "react";
import MapContext from "../Map/MapContext";
import VectorSource from 'ol/source/Vector';
import OLVectorLayer from "ol/layer/Vector";
import { listOwnerlessPetPosts } from '../api/ownerless-pet-post-api';
import { IconFeature } from "../Features/icon/IconFeature";

const IconVectorLayer = () => {
    const { map } = useContext(MapContext); 
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        if (!map) return;

        if (!posts){
          listOwnerlessPetPosts().then(result => setPosts(result));
        }
          
        if (posts?.length > 0){
            var postLocalizationsMapped = posts.map(post => IconFeature(post.localization));

            const vectorSource = new VectorSource({
              features: postLocalizationsMapped,
            });
  
          let vectorLayer = new OLVectorLayer({
            source: vectorSource,
          });
      
          map.addLayer(vectorLayer);
          
          return () => {
            if (map) {
              map.removeLayer(vectorLayer);
            }
          };
        };
      }, [map, posts]);
}

export { IconVectorLayer };