import { React, useState } from 'react';
import { Button } from "@chakra-ui/react";

export const CtaButton = ({ label, onClick, icon }) => {
    const [isLoading, setIsLoading] = useState(false);


    return (<Button
        backgroundColor='#344459'
        textColor='#f2cc0c'
        fontWeight='normal'
        isLoading={isLoading}
        onClick={onClick}
        rightIcon={icon}
        >{label}</Button>)
}