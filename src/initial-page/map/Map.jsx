import React from "react";
import { MainLayerMap } from "./main-layer/MainLayerMap";
import { Layers } from "./layers/Layers";
import { TileLayer } from "./layers/TileLayer";
import { IconVectorLayer } from "./layers/icon-vector-layer/IconVectorLayer";

const Map = () => (
	<MainLayerMap>
		<Layers>
			<TileLayer />
			<IconVectorLayer />
		</Layers>
	</MainLayerMap>
);

export { Map };