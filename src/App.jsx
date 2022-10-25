import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { InitialPage } from "./initial-page/InitialPage";
import { BichoSemDonoTheme } from "./theme/bicho-sem-dono-theme/BichoSemDonoTheme";
import { MapProvider } from "./initial-page/map/context/MapContext";

const App = () => {
	return (
		<div className="App">
			<ChakraProvider theme={BichoSemDonoTheme} >
				<MapProvider>
					<InitialPage />
				</MapProvider>
			</ChakraProvider>
		</div>
	);
};

export default App;
