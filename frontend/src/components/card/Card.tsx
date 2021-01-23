import React, {FC} from "react";
import {CardContainer} from "./Card.styles";

type ICardProps = {
    title?: string
}

const Card: FC<ICardProps> = ({children, title}) => {
    return (
        <CardContainer>
            {title ? <h1 className="text-align-center">{title}</h1> : "" }
            {children}
        </CardContainer>
    );
};

export default Card;