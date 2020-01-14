import React, {Component} from "react";
import ButtonBig from '../../../../components/buttons/ButtonBig'
import {
    ContainerHeader,
    Title,
    Content 
} from "./styles";


class ContainerRight extends Component {
    render() {
        return (
            <ContainerHeader>
                <Title>Leave your mark</Title>
                <Content>Choose your marker</Content>
                <Content>Tell your story about helping this World.</Content>
                <Content>Be the one in a million.</Content>
                <ButtonBig btnTitle="Proceed" btnId="proceed-btn" />
            </ContainerHeader>
        )
    }
}

export default ContainerRight