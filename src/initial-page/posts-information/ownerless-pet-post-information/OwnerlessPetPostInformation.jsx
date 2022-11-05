import React, { useState } from "react";
import "./styles.css";
import { Text } from "@chakra-ui/react";
import { GhostButton } from "../../../common-components/buttons/GhostButton";
import { CloseIcon } from "@chakra-ui/icons";
import { VerticalSpace } from "../../../common-components/VerticalSpace";
import { Drawer } from "../../../common-components/drawer/Drawer";
import { IconVectorLayer } from "../../map/layers/icon-vector-layer/IconVectorLayer";

const OwnerlessPetPostInformation = () => {
	const [postIconInformation, setPostIconInformation] = useState({});
	const [isShowingPostInformation, setIsShowingPostInformation] = useState(false);
    
	IconVectorLayer((values) => {
		setPostIconInformation(values);
		setIsShowingPostInformation(true);
	});
    
	return (
		<>
			{
				isShowingPostInformation &&
			<Drawer>
				<div className="post-information-header">
					<Text fontSize="2xl" color="bsd.blue">Pet abandonado</Text>
					<Text 
						fontSize="sm" 
						fontWeight={400}
						color="bsd.blue"
					>
						{postIconInformation.localization.address}
					</Text>
				</div>
				<div className="post-information-body">
					<Text fontSize="xl" color="bsd.blue">{postIconInformation.description}</Text>
					<VerticalSpace />
					<div className="post-information-close-button">
						<GhostButton textColor="bsd.blue" icon={<CloseIcon />} onClick={() => setIsShowingPostInformation(false)} />
					</div>
				</div>
			</Drawer>
			}
		</>
	);
};

export { OwnerlessPetPostInformation };