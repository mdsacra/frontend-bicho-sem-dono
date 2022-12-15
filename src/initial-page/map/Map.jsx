import React from "react";
import { MainLayerMap } from "./main-layer/MainLayerMap";
import { Layers } from "./layers/Layers";
import { TileLayer } from "./layers/TileLayer";
import { PostIconsLayer } from "./layers/PostIconsLayer";
import PropTypes from "prop-types";

const Map = ({ posts }) => (
	<MainLayerMap>
		<Layers>
			<TileLayer />
			<PostIconsLayer posts={posts}/>
		</Layers>
	</MainLayerMap>
);

export { Map };

Map.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.object)
};