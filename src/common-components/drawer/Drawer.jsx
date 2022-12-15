import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Drawer = (props) => {
    
	return (
		<div className="drawer-overlay-container">
			<div className="drawer-content">
				{ props.children }
			</div>
		</div>
	);
};

export { Drawer };

Drawer.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element).isRequired
};