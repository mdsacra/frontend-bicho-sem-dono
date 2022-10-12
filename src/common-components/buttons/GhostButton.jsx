import { React, useState } from "react";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const GhostButton = ({ label, onClick, icon }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
		onClick();
		setIsLoading(false);
	};

	return (<Button
		variant='ghost'
		textColor='#f2cc0c'
		fontWeight='normal'
		isLoading={isLoading}
		onClick={handleClick}
		rightIcon={icon}
	>{label}</Button>);
};

GhostButton.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.element
};