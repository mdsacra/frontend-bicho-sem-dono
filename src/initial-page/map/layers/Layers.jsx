import React from "react";
import PropTypes from "prop-types";

const Layers = ({ children }) => {
	return <div>{children}</div>;
};
export { Layers };

Layers.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired
};