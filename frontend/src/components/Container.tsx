import React, {FC} from "react";

const Container: FC = ({children}) => (
    <div style={{ background: '#b3b3b3', padding: 0, margin: 80, }}>
        {children}
    </div>
);

export default Container;