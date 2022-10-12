import { extendTheme } from "@chakra-ui/react";
import { TextAreaStyles as TextArea } from "./styles/TextAreaStyles";
import { InputStyles as Input } from "./styles/InputStyles";
export const BichoSemDonoTheme = extendTheme({
	components: {
		TextArea,
		Input
	}
});

