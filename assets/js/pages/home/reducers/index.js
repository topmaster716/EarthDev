import Constants from "../constants";
import { createStore } from "redux";
import {
  initalMarkers,
} from "./tmp_data";

const initialState = {
  socket: null,
  channel: null,
  markers: initalMarkers,
  currentUser: null,
  currentMarker: {
    id: null,
    type: null,
    name: null,
    image: "./images/markers/heart.svg",
    longitude: null,
    latitude: null,
  }, 

markerTypes: [
  {   
    id: 1,
    name: "child",
    value: "./images/markers/child.svg"
  },
  { 
    id: 2,
    name: "paw",
    value: "./images/markers/paw.svg"
  },
  { 
    id: 3,
    name: "plus",
    value: "./images/markers/plus.svg"
  },
  {   
    id: 4,
    name: "home",
    value: "./images/markers/home.svg"
  },
  { 
    id: 5,
    name: "leaf",
    value: "./images/markers/leaf.svg"
  },
  { 
    id: 6,
    name: "heart",
    value: "./images/markers/heart.svg"
  }]
} 

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_MARKERS:
      return Object.assign({}, state, {
        socket: action.socket,
        channel: action.channel,
        markers: action.markers
      });

    case Constants.RESET_MARKERS:
      return initialState;

  
    case Constants.SET_NEW_MARKER_TYPE:
      return {
        ...state,
        currentMarker: {...state.currentMarker, typeId: action.typeId}
      };   

    case Constants.SET_NEW_MARKER_COORDS: 
      return {
        ...state,
        currentMarker: {...state.currentMarker, latitude: action.latitude, longitude: action.longitude}
      };    

    case Constants.ADD_NEW_MARKER: 
      return {
        ...state,
        currentMarker: currentMarker,
      };    

    default:
      return state;
  }
}

const store = createStore(reducer, initialState);
