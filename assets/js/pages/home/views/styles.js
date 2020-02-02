import styled, { keyframes } from "styled-components";

import { device } from "../../../components/styles";

const AppearAnimation = keyframes`
  0% { max-width: 60%; }
  100% { max-width: 100%; }
`;

const DisppearAnimation = keyframes`
    0% { max-width: 100%; }
  100% { max-width: 60%; }
`;

export const Container = styled.div`
    position: relative;
    background: #17233e;
    flex-direction: row;
    max-width: ${props => (props.isZoomed ? "100%" : "1200px")};
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media ${device.tillLaptop} {
        flex-flow: row wrap;
    }
`;

export const ContainerEarth = styled.div`
    // max-width: ${props => (props.isZoomed ? "100%" : "60%")};
    animation: ${props =>
            props.isZoomed ? AppearAnimation : DisppearAnimation}
        2s ease-in-out;
    width: 100%;
    height: ${props => (props.isZoomed ? "100%" : "70%")};
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
