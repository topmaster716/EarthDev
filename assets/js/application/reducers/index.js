import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import home from "../../pages/home/reducers/index";

// Root reducers which contains reducers from all pages
export default combineReducers({
	// router reducer, so that we can manipulate URL in the browser 
	routing: routerReducer,
	home: home,

});
