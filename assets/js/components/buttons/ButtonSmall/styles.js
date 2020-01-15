import styled from "styled-components";

export const Button = styled.button`
	width: 296px;
	height: 56px;
	margin: 3vh 0 0 0;
	background: #ffffff;
	border-radius: 40px;
	border: 0;
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: #0a2b72;

	&:hover {
		box-shadow: 0 4px 56px #4c91fa;
	}

	&:active {
		transform: translateY(1px);
		box-shadow: 0 0 0;
	}
`;
