import { Spinner } from "@chakra-ui/react";
import "./styles.css"

export const Loading = ({ size }) => (
    <div className="loading">
        <Spinner size={size} speed="0.7s"/>
    </div>
)