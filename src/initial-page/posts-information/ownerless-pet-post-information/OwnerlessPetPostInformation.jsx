import React from "react";
import "./styles.css";
import { Text } from "@chakra-ui/react";
import { GhostButton } from "../../../common-components/buttons/GhostButton";
import { CloseIcon } from "@chakra-ui/icons";
import { VerticalSpace } from "../../../common-components/VerticalSpace";
import { Drawer } from "../../../common-components/drawer/Drawer";
import PropTypes from "prop-types";

const OwnerlessPetPostInformation = ({ postInformation, onClose }) => (
	<>
		<Drawer>
			<div className="post-information-header">
				<Text fontSize="2xl" color="bsd.blue">Pet abandonado</Text>
				<Text 
					fontSize="sm" 
					fontWeight={400}
					color="bsd.blue"
				>
					{postInformation.localization.address}
				</Text>
			</div>
			<div className="post-information-body">
				<Text fontSize="xl" color="bsd.blue">{postInformation.description}</Text>
				<VerticalSpace />
				<div className="post-information-close-button">
					<GhostButton textColor="bsd.blue" icon={<CloseIcon />} onClick={onClose} />
				</div>
			</div>
		</Drawer>
	</>
);

export { OwnerlessPetPostInformation };

OwnerlessPetPostInformation.propTypes = {
	postInformation: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
};