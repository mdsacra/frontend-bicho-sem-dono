import React, { useState } from "react";
import './styles.css';
import { Stack, Textarea, Radio, RadioGroup, ButtonGroup } from '@chakra-ui/react';
import { VerticalSpace } from "../../../common-components/VerticalSpace";
import { CtaButton } from "../../../common-components/buttons/CtaButton";
import { GhostButton } from "../../../common-components/buttons/GhostButton";
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { InputWithGoogle } from "../../../common-components/input-with-google/InputWithGoogle";
import { createOwnerlessPetPost } from "../../../api/ownerless-pet-post-api";
import { Loading } from "../../../common-components/loading/Loading";

const OwnerlessPetPostForm = ({ onClose }) => {
    const [petLocalization, setPetLocalization] = useState({});
    const [situationDescription, setSituationDescription] = useState(String);
    const [petSpecies, setPetSpecies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const submitPost = async () => {
        setIsLoading(true);

        const ownerlessPetPost = {
            description: situationDescription,
            petSpecies: Number(petSpecies),
            localization: {
                latitude: "-52.331387745607046", 
                longitude: "-31.75265032803079",
                address: "Rua Gonçalves Chaves, 3797 - Centro, Pelotas - RS"
            }
        }
        await createOwnerlessPetPost(ownerlessPetPost);

        setIsLoading(false);
        onClose();
    }

    const handleSituationDescriptionChange = (e) => {
        var inputValue = e.target.value;
        setSituationDescription(inputValue);
    }

    return (
        <div className="ownerless-pet-post-form">
            {isLoading ? <Loading size="xl" /> : 
            <form>
                <InputWithGoogle
                    onChange={setPetLocalization}
                    placeholder='Qual o local em que o pet está?'/>
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
                        <GhostButton label="Cancelar" icon={<CloseIcon />} onClick={() => onClose()} />
                        <CtaButton label="Salvar" onClick={() => submitPost()} icon={<CheckIcon />}/>
                    </ButtonGroup>
                </div>
            </form>}
        </div>
        )
}

export { OwnerlessPetPostForm };