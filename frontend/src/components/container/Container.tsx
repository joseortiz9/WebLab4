import React, {FC} from "react";
import {ContainerStyled} from "./Container.styles";

const Container: FC = ({children}) => (
    <ContainerStyled>
        {children}
    </ContainerStyled>
);

export default Container;