import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../state/middleware";
export const store = createStore(rootReducer, applyMiddleware(thunk));
