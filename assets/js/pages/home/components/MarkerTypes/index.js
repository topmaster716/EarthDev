import React from "react";

//SVG Components
import ChildMarker from "../../../../components/images/markers/ChildMarker";
import PawMarker from "../../../../components/images/markers/PawMarker";
import PlusMarker from "../../../../components/images/markers/PlusMarker";
import HomeMarker from "../../../../components/images/markers/HomeMarker";
import LeafMarker from "../../../../components/images/markers/LeafMarker";
import HeartMarker from "../../../../components/images/markers/HeartMarker";

import {
    ContainerMarkers,
    Title,
    MarkersList,
    MarkersListItem
} from "./styles";

function MarkerTypes(props) {
    const { onClick, markerTypes } = props;

    function renderMarkerImg(markerName) {
        switch(markerName) {
            case "child": return <ChildMarker />
            break;
            case "paw": return <PawMarker />
            break;
            case "plus": return <PlusMarker />
            break;
            case "home": return <HomeMarker />
            break;
            case "leaf": return <LeafMarker />
            break;
            case "heart": return <HeartMarker />
            break;
        }
    }


    return (
        <ContainerMarkers>
            <Title>Choose the type of marker</Title>
            <MarkersList>
                {markerTypes.map(marker => {
                        return (
                            <MarkersListItem
                                key={marker.id}
                                name={marker.name}
                                onClick={onClick}
                            >
                            {renderMarkerImg(marker.name)}
                            </MarkersListItem>
                        );
                    })}

                
            </MarkersList>
        </ContainerMarkers>
    );
}

export default MarkerTypes;

// <MarkersListItem onClick={onClick} id="imageChild">
//                     <ChildMarker />
//                 </MarkersListItem>
//                 <MarkersListItem onClick={onClick} id="paw-marker">
//                     <PawMarker />
//                 </MarkersListItem>
//                 <MarkersListItem onClick={onClick} id="plus-marker">
//                     <PlusMarker />
//                 </MarkersListItem >
//                 <MarkersListItem onClick={onClick} id="home-marker">
//                     <HomeMarker />
//                 </MarkersListItem>
//                 <MarkersListItem onClick={onClick} id="leaf-marker">
//                     <LeafMarker />
//                 </MarkersListItem>
//                 <MarkersListItem onClick={onClick} id="heart-marker">
//                     <HeartMarker />
//                 </MarkersListItem>
