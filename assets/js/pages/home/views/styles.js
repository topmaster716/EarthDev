import styled, { keyframes } from "styled-components";

import { device } from "../../../components/styles";

// const AppearAnimation = keyframes`
//   0% { width: 55%; }
//   100% { width: 100%; }
// `;

// const DisppearAnimation = keyframes`
//     0% { width: 100%; }
//   100% { width: 55%;  }
// `;

const AppearAnimation = keyframes`
    0% { opacity: 0 };
    90% { opacity: 0 };
    100% { opacity: 1 };
`;

const DisppearAnimation = keyframes`
    0% { opacity: 0 };
    70% { opacity: 0 };
    100% { opacity: 1 };
`;

export const Container = styled.div`
    position: relative;
    background: #17233e;
    flex-direction: row;
    max-width: ${props => (props.isZoomed ? "100%" : "1200px")};
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media ${device.tillLaptop} {
        flex-flow: row wrap;
    }
`;

export const ContainerEarth = styled.div`
    animation: ${props =>
            props.isZoomed ? AppearAnimation : DisppearAnimation}
        1s ease-in-out;
    width: 100%;
    height: 100%;
`;

export const ContainerButton = styled.div`
    position: absolute;
    bottom: 6.5vh;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%);
`;
// width: ${props => (props.isZoomed ? "100%" : "60%")};
//     animation: ${props =>
//             props.isZoomed ? AppearAnimation : DisppearAnimation}
//         2s ease-in-out;

export const ContainerCentered = styled.div`
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;
