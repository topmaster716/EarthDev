import React from "react";

import { Button } from "./styles";

function ButtonSmall(props) {
    const { btnTitle, onClick } = props;

    return <Button onClick={onClick}>{btnTitle}</Button>;
}

export default ButtonSmall;


