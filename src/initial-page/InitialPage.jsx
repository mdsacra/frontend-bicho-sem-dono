import React from "react";
import { MainMenu } from "./main-menu/MainMenu";
import { Map } from "./map/Map";

const InitialPage = () => (
	<div className="initial-page">
		<Map />
		<MainMenu />
	</div>
);

export { InitialPage };
