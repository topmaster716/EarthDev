import React from "react";

import { Button } from "./styles";

function PopupButton(props) {
    const { onClick, text } = props;

    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            {text}
        </Button>
    );
}

export default PopupButton;
