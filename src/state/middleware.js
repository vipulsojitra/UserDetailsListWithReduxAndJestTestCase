import { combineReducers } from "redux";

import userListReducer from "../state/userDetails/userReducer";

const rootReducer = combineReducers({
  usersList: userListReducer,
});
export default rootReducer;
