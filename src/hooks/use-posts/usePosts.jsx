import { useEffect, useState, useContext } from "react";
import { MapContext } from "../../initial-page/map/context/MapContext";
import { toLonLat } from "ol/proj";
import { listOwnerlessPetPosts } from "../../api/ownerless-pet-post-api";

const usePosts = () => {
	const { map } = useContext(MapContext); 
	const [posts, setPosts] = useState(null);
    
	useEffect(() => {
		const listPosts = async () => {
			if (!posts){
				var longitudeAndLatitude = toLonLat(map.getView().getCenter());
				var longitude = longitudeAndLatitude[0];
				var latitude = longitudeAndLatitude[1];
				var result = await listOwnerlessPetPosts(longitude, latitude);
				setPosts(result);
			}
		};

		if (map){
			listPosts();
		}
        
	}, [map, posts]);

	return { posts, setPosts };
};

export { usePosts };