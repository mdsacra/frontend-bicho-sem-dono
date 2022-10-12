import { extendTheme } from "@chakra-ui/react";
import { TextAreaStyles as TextArea } from "./styles/TextAreaStyles";
import { InputStyles as Input } from "./styles/InputStyles";

export const BichoSemDonoTheme = extendTheme({
	colors: {
		bsd: {
			red: "#FF3936",
			yellow: "#F2CC0C",
			brown: "#A66E4E",
			blue: "#344459",
			gray: "#F0F0F2",
		}
	},

	components: {
		TextArea,
		Input
	}
});

