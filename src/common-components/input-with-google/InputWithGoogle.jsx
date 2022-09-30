import React, { useRef, useEffect } from "react";
import { Input } from '@chakra-ui/react';

const InputWithGoogle = ({ placeholder, onChange }) => {
    const inputRef = useRef();
    const autoCompleteRef = useRef();

    useEffect(() => {
        const autoCompleteOptions = {
            componentRestrictions: { country: 'br' },
            fields: ['address_components', 'geometry', 'icon', 'name'],
            types: ['establishment']
        };

        if (window.google) {
            autoCompleteRef.current = new window.google.maps.places.Autocomplete(
                inputRef.current,
                autoCompleteOptions
            );
        }

    }, [])

    const handleValue = (e) => {
        var inputValue = e.target.value;
        onChange({ address: inputValue })
    }
    
    return (
        <Input variant="bsd" placeholder={placeholder} ref={inputRef} onChange={handleValue} />
    )
}

export { InputWithGoogle };