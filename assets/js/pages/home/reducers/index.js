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
    typeId: null,
    name: null,
    image: null,
    longitude: null,
    latitude: null,
  },
};

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

  
    case Constants.SET_NEW_MAKER_TYPE:
      return {
        ...state,
        currentMarker: {...state.currentMarker, typeId: action.typeId}
      };   

    case Constants.SET_NEW_MARKER_COORDS: 
      return {
        ...state,
        currentMarker: {...state.currentMarker, longitude: action.longitude, latitude: action.latitude}
      };     
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);
