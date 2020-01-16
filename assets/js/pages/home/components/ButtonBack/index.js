import React from "react";

import { ContainerBtnBack, BtnBack, ArrowBack, BtnBackText } from "./styles";

function ButtonBack(props) {
    const { onClick } = props;

    return (
        <ContainerBtnBack onClick={onClick}>
            <BtnBack>
                <ArrowBack>
                    <svg
                        width="49"
                        height="20"
                        viewBox="0 0 49 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M49 9.8H2M2 9.8L10.5 1M2 9.8L10.5 19"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </ArrowBack>
                <BtnBackText>Go back</BtnBackText>
            </BtnBack>
        </ContainerBtnBack>
    );
}

export default ButtonBack;
