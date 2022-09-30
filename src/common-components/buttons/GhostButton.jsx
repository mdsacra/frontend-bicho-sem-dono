import { React, useState } from 'react';
import { Button } from "@chakra-ui/react";

export const GhostButton = ({ label, onClick, icon }) => {
    const [isLoading, setIsLoading] = useState(false);

    
    return (<Button
        variant='ghost'
        textColor='#f2cc0c'
        fontWeight='normal'
        isLoading={isLoading}
        onClick={onClick}
        rightIcon={icon}
        >{label}</Button>)
}