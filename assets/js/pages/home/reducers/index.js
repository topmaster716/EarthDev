import Constants from "../constants";
import { createStore } from "redux";

const initialState = {
  socket: null,
  channel: null,
  markers: [
    {
      minZoomLevel: 1,
      latitude: 48.856614,
      longitude: 2.352222,
      title: "Paris",
      flag: "./images/markers/paw.svg"
    },
    {
      minZoomLevel: 2,
      latitude: 40.712775,
      longitude: -74.005973,
      title: "New York",
      flag: "./images/markers/child.svg"
    },
    {
      minZoomLevel: 1,
      latitude: 49.282729,
      longitude: -123.120738,
      title: "Vancouver",
      flag: "./images/markers/paw.svg"
    },
    {
      minZoomLevel: 2,
      latitude: 48.138662613601866,
      longitude: 33.70549553531656,
      title: "Ukraine",
      flag: "./images/markers/heart.svg"
    },
    {
      minZoomLevel: 3,
      latitude: 46.07977373604239,
      longitude: 25.37655752967514,
      title: "Romania",
      flag: "./images/markers/plus.svg"
    },
    {
      minZoomLevel: 1,
      latitude: 24.564732817331784,
      longitude: 49.07977373604239,
      title: "Ukraine",
      flag: "./images/markers/paw.svg"
    },
    {
      minZoomLevel: 4,
      latitude: 53.869652974559195,
      longitude: 26.77797047369667,
      title: "Belarus",
      flag: "./images/markers/plus.svg"
    },
    {
      minZoomLevel: 1,
      latitude: 58.869652974559195,
      longitude: 22.77797047369667,
      title: "Vancouver",
      flag: "./images/markers/leaf.svg"
    },
    {
      minZoomLevel: 4,
      latitude: 52.869652974559195,
      longitude: 26.77797047369667,
      title: "Vancouver",
      flag: "./images/markers/plus.svg"
    },
    {
      minZoomLevel: 1,
      latitude: 49.869652974559195,
      longitude: 18.77797047369667,
      title: "Vancouver",
      flag: "./images/markers/paw.svg"
    },
    {
      minZoomLevel: 1,
      latitude: 49.282729,
      longitude: -123.120738,
      title: "Vancouver",
      flag: "./images/markers/leaf.svg"
    }
  ],
  currentMarker: null
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

    default:
      return state;
  }
}

const store = createStore(reducer, initialState);
