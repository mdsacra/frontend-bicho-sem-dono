import React from "react";
import { MainLayerMap } from "./main-layer/MainLayerMap";
import { Layers } from "./layers/Layers";
import { TileLayer } from "./layers/TileLayer";
import { OwnerlessPetPostInformation } from "../posts-information/ownerless-pet-post-information/OwnerlessPetPostInformation";

const Map = () => (
	<MainLayerMap>
		<Layers>
			<TileLayer />
			<OwnerlessPetPostInformation />
		</Layers>
	</MainLayerMap>
);

export { Map };