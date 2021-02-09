
import {createStore, applyMiddleware} from "redux";
import covid from "./reducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
  covid,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
