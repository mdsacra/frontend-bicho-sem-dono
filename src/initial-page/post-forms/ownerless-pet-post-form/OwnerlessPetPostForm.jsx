import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { Stack, Textarea, Radio, RadioGroup, ButtonGroup, Input } from "@chakra-ui/react";
import { VerticalSpace } from "../../../common-components/VerticalSpace";
import { CtaButton } from "../../../common-components/buttons/CtaButton";
import { GhostButton } from "../../../common-components/buttons/GhostButton";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { createOwnerlessPetPost } from "../../../api/ownerless-pet-post-api";
import { Loading } from "../../../common-components/loading/Loading";
import PropTypes from "prop-types";

const OwnerlessPetPostForm = ({ onClose }) => {
	const [petLocalization, setPetLocalization] = useState({});
	const [situationDescription, setSituationDescription] = useState(String);
	const [petSpecies, setPetSpecies] = useState("1");
	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef();
	const autoCompleteRef = useRef();
    
	useEffect(() => {
		const injectAutoComplete = (defaultBounds) => {
			if (window.google){
				const autoCompleteOptions = {
					componentRestrictions: { country: "br" },
					fields: ["formatted_address", "geometry"],
					types: ["address"],
					bounds: defaultBounds
				};
               
				autoCompleteRef.current = new window.google.maps.places.Autocomplete(
					inputRef.current,
					autoCompleteOptions
				);
			}
		};

		if (!autoCompleteRef.current) {
			navigator.geolocation.getCurrentPosition(position => {
				const defaultBounds = {
					north: position.coords.latitude + 0.1,
					south: position.coords.latitude - 0.1,
					east: position.coords.longitude + 0.1,
					west: position.coords.longitude - 0.1
				};

				console.log(defaultBounds);
				injectAutoComplete(defaultBounds);


			});
		}
	}, []);

	const submitPost = async () => {
		setIsLoading(true);

		await handleLocalization();

		const ownerlessPetPost = {
			description: situationDescription,
			petSpecies: Number(petSpecies),
			localization: petLocalization
		};

		await createOwnerlessPetPost(ownerlessPetPost);

		setIsLoading(false);
		onClose();
	};

	const handleLocalization = async () => {
		var place = await autoCompleteRef.current.getPlace();
		var latitude = await place.geometry.location.lat();
		var longitude = await place.geometry.location.lng();
		var address = place.formatted_address;

		setPetLocalization(petLocalization => (
			petLocalization.latitude = latitude,
			petLocalization.longitude = longitude,
			petLocalization.address = address
		));
	};

	const handleSituationDescriptionChange = (e) => {
		var inputValue = e.target.value;
		setSituationDescription(inputValue);
	};

	return (
		<div className="ownerless-pet-post-form">
			{isLoading ? <Loading size="xl" /> : 
				<form>
					<Input variant="bsd" placeholder='Qual o local em que o pet está?' ref={inputRef}/>
					<VerticalSpace />
					<Textarea 
						value={situationDescription}
						onChange={handleSituationDescriptionChange}
						variant="bsd" 
						placeholder="Fique a vontade para dar mais detalhes sobre a situação..." />
					<VerticalSpace />
					<RadioGroup onChange={setPetSpecies} value={petSpecies}>
						<Stack direction="column">
							<Radio value="1">Cachorro</Radio>
							<Radio value="2">Gato</Radio>
						</Stack>
					</RadioGroup>
					<VerticalSpace />
					<div className="form-buttons">
						<ButtonGroup spacing={10}>
							<GhostButton textColor="bsd.yellow" label="Cancelar" icon={<CloseIcon />} onClick={() => onClose()} />
							<CtaButton label="Salvar" onClick={() => submitPost()} icon={<CheckIcon />}/>
						</ButtonGroup>
					</div>
				</form>}
		</div>
	);
};

export { OwnerlessPetPostForm };

OwnerlessPetPostForm.propTypes = {
	onClose: PropTypes.func.isRequired
};