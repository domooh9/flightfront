import reducers from "./reducers/index";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }

const initialState = {};
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, initialState, 
    composeEnhancers(applyMiddleware(thunk)));
let persistor = persistStore(store)
export {store, persistor};
