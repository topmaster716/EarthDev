import styled from "styled-components";

export const ContainerMarkers = styled.div`
	position: absolute;
	top: 3vh;
	left: 50%;
	transform: translate(-50%);
	z-index: 10;
	background: rgba(32, 31, 62, 0.9);
	border-radius: 6px;
	width: 357px;
	height: 119px;
`;

export const Title = styled.h3`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: 800;
	font-size: 20px;
	line-height: 32px;
	color: #ffffff;
	text-align: center;
	margin-top: 16px;
`;

export const MarkersList = styled.ul`
	position: absolute;
	left: 40px;
	right: 40px;
	bottom: 22px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

export const MarkersListItem = styled.li`
	position: relative;
	transition: 0.3s;
	opacity: 0.5;
	cursor: pointer;

    &:hover {
	  	opacity: 1;
	  	padding-bottom: 10px;
	}
	
	&:active::after {
		content: "";
		height: 4px;
		width: 4px;
		background-color: #ffffff;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -50%);
	}
`;



