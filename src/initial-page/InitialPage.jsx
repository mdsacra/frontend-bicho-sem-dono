import React from "react";
import { MainLayerMap } from "./map/main-layer/MainLayerMap";
import { Layers } from "./map/layers/Layers";
import { TileLayer } from "./map/layers/TileLayer";
import { IconVectorLayer } from "./map/layers/icon-vector-layer/IconVectorLayer";
import { MainMenu } from "./main-menu/MainMenu";

export function InitialPage() {
	return (
		<div className="initial-page">
			<MainLayerMap>
				<Layers>
					<TileLayer />
					<IconVectorLayer />
				</Layers>
			</MainLayerMap>
			<MainMenu />
		</div>
	);
}
