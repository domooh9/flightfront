import { InitialStateType } from ".";
import * as actionTypes from "../action-types/action-types";
const initialState = {
  isFlightDataLoading: true,
  flights: [],
  filteredFlights: [],
  lastAction: ''
};

export const searchFlightsReducer = (state = initialState, action)  => {
  switch (action.type) {
    case actionTypes.SEARCH_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        flights: [...action.payload],
        lastAction: 'Search Flights'
      };
    case actionTypes.FILTER_FLIGHTS:
      if(action.payload.length === 0){
        return {
          ...state,
          isFlightDataLoading: false,
          filteredFlights : [],
          lastAction: 'Filter Flights'
        }
      }
      else{
      return {
        ...state,
        isFlightDataLoading: false,
        filteredFlights: [...action.payload],
        lastAction: 'Filter Flights'
      }
    };
    case actionTypes.CLEAR_FILTER_FLIGHTS:
      return {
        ...state,
        isFlightDataLoading: false,
        filteredFlights: [...action.payload],
        lastAction: 'Clear Filter Flights'
      };
    default: {
      return state;
    }
  }
};
