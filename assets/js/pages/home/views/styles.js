import styled, { keyframes } from "styled-components";

const AppearAnimation = keyframes`
  0% { width: 60%; }
  100% { width: 100%; }
`;

const DisppearAnimation = keyframes`
    0% { width: 100%; }
  100% { width: 60%; }
`;

export const Container = styled.div`
    position: relative;
    background: #17233e;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    height: 100%;
    width: 100%;
`;

export const ContainerEarth = styled.div`
    position: absolute;
    right: 0;
    height: 100%;
    width: ${props => (props.isZoomed ? "100%" : "60%")};
    animation: ${props =>
            props.isZoomed ? AppearAnimation : DisppearAnimation}
        2s ease-in-out;
`;

export const ContainerButton = styled.div`
    position: absolute;
    bottom: 6.5vh;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;
