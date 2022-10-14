import { React, useState } from "react";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const CtaButton = ({ label, onClick, icon, isDisabled }) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
		onClick();
		setIsLoading(false);
	};

	return (<Button
		isDisabled={isDisabled}
		backgroundColor='#344459'
		textColor='#f2cc0c'
		fontWeight='normal'
		isLoading={isLoading}
		onClick={handleClick}
		rightIcon={icon}
	>{label}</Button>);
};

CtaButton.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.element,
	isDisabled: PropTypes.bool
};