import React, { useState } from "react";

import { Button } from "./styles"

function ButtonBig(props) {

    const { btnTitle, onClick } = props;

    return (
       <Button onClick={onClick}>{btnTitle}</Button>
    )
}

export default ButtonBig