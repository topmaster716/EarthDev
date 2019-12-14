import { push } from "react-router-redux";
import { Socket } from "../../../vendor/phoenix";
import Constants from "../constants";
import { httpGet, httpPost, httpDelete } from "../../../application/utils";

const Actions = {
  loadMarkers(dispatch) {
    const socket = new Socket("/socket", {
      params: {},
      logger: (kind, msg, data) => {
        console.log(`${kind}: ${msg}`, data);
      }
    });

    socket.connect();
    const channel = socket.channel(`markers`);

    // REMOVE LATER: Temporary markers
    const tmpMarkers = []

    if (channel.state != "joined") {
      channel.join().receive("ok", response => {
        dispatch({
          type: Constants.SET_MARKERS,
          socket: socket,
          channel: channel,
          markers: tmpMarkers
        });
      });

      // TODO: channel.on for new markers 
      //
    }
  }
};

export default Actions;
