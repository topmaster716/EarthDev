import styled, { keyframes } from "styled-components";

export const Container = styled.div` 
	position: relative;
    background: #17233e;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
`

export const ContainerEarth = styled.div`
	flex-grow: 1;
    display: flex;
    width: 100%;
`

export const ContainerEarthOuter = styled.div`
	position: relative;
    width: 100%;
    margin: ${props => (props.isZoomed ? "0" : "10vh 5vh 10vh 0")};
`

export const ContainerButton = styled.div`
    position: absolute;
    bottom: 6.5vh;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`
