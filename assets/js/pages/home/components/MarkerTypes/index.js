import React, {Component} from "react";

//SVG Components
import ChildMarker from "../../../../components/images/markers/ChildMarker"
import PawMarker from "../../../../components/images/markers/PawMarker"
import PlusMarker from "../../../../components/images/markers/PlusMarker"
import HomeMarker from "../../../../components/images/markers/HomeMarker"
import LeafMarker from "../../../../components/images/markers/LeafMarker"
import HeartMarker from "../../../../components/images/markers/HeartMarker"


import { ContainerMarkers, Title, MarkersList, MarkersListItem } from "./styles"

class MarkerTypes extends Component {
    render() {
        return (
            <ContainerMarkers>
                <Title>Choose the type of marker</Title>
                <MarkersList>
                    <MarkersListItem>
                        <ChildMarker />
                    </MarkersListItem>
                    <MarkersListItem >
                        <PawMarker />
                    </MarkersListItem>
                    <MarkersListItem>
                       <PlusMarker />
                    </MarkersListItem>
                    <MarkersListItem>
                        <HomeMarker />
                    </MarkersListItem>
                    <MarkersListItem>
                        <LeafMarker />
                    </MarkersListItem>
                    <MarkersListItem>
                        <HeartMarker />
                    </MarkersListItem>
                </MarkersList>
            </ContainerMarkers>
        )
    }
}

export default MarkerTypes
