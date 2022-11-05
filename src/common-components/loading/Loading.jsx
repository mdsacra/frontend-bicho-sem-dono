import React, { Spinner } from "@chakra-ui/react";
import "./styles.css";
import PropTypes from "prop-types";

export const Loading = ({ size }) => (
	<div className="loading">
		<Spinner size={size} speed="0.7s"/>
	</div>
);

Loading.propTypes = {
	size: PropTypes.string
};

Loading.defaultProps = {
	size: "3"
};