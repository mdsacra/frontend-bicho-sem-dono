import { React, useState } from "react";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const GhostButton = ({ label, onClick, icon, textColor }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
		onClick();
		setIsLoading(false);
	};

	if (!label && !icon){
		return;
	}
	
	return (<Button
		variant='ghost'
		textColor={textColor}
		fontWeight='normal'
		isLoading={isLoading}
		onClick={handleClick}
		rightIcon={label ? icon : null}
	>{label ? label : icon}</Button>);
};

GhostButton.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.element,
	textColor: PropTypes.string.isRequired
};