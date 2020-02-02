import React, { Component } from "react";
import ButtonBig from "../../../../components/buttons/ButtonBig";
import { ContainerTitle, Title, Content } from "./styles";

function ContainerLeft(props) {
	const { onClick } = props;

	return (
		<ContainerTitle>
			<Title>Leave your mark</Title>
			<Content>Choose your marker</Content>
			<Content>Tell your story about helping this World.</Content>
			<Content>Be the one in a million.</Content>
			<ButtonBig
				btnTitle="Proceed"
				btnId="proceed-btn"
				onClick={onClick}
			/>
		</ContainerTitle>
	);
}

export default ContainerLeft;
