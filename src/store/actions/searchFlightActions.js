import axios from "axios";
import * as actionTypes from "../action-types/action-types";

export const searchFlights = (searchParams) => async (dispatch) => {
  const { to, from, date } = searchParams;
  let response;
  try {
    response = await axios.post(
      "https://backendflym.herokuapp.com/flights/getFlights",
      {
        to: to,
        from: from,
        date: date,
      }
    );
  } catch (err) {
    console.error(err);
  }

  dispatch({
    type: actionTypes.SEARCH_FLIGHTS,
    payload: response.data.responseData,
  });
};

export const filterFlights =
  ({ filterParams, flightData }) =>
  async (dispatch) => {
    let response;
    switch (filterParams) {
    
      case "Non Stop": {
        response = flightData.filter((x) => x.type === filterParams);
        dispatch({ type: actionTypes.FILTER_FLIGHTS, payload: response });
        break;
      }
      case "1 Stop": {
        response = flightData.filter((x) => x.type === filterParams);
        dispatch({ type: actionTypes.FILTER_FLIGHTS, payload: response });
        break;
      }

      case 'Air Asia':
      case 'Indigo':
      case 'Spicejet':
      case 'Go First':
      case 'Vistara': {
        response = flightData.filter((x) => x.airline === filterParams);
        dispatch({type: actionTypes.FILTER_FLIGHTS, payload: response});
      }

      case 'Price': {
         response = flightData.original.filter((x)=> x.price >= Math.round( flightData.data*100)) ;
         dispatch({type:actionTypes.FILTER_FLIGHTS, payload: response});
      }

      case 'Duration': {
        
        response = flightData.original.filter ((x) => parseInt(x.duration.substring(0,2)) <= flightData.data   );
        dispatch({type:actionTypes.FILTER_FLIGHTS, payload: response});
      }
      default: {
        return response;
      }
    }
  };

export const clearFlights = (flightData) => async (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_FILTER_FLIGHTS, payload: flightData });
};
