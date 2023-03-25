

import { combineReducers } from "redux";
import {searchFlightsReducer} from "./searchFlightReducer"


const reducers = combineReducers({
    flights: searchFlightsReducer,
})

export default reducers;