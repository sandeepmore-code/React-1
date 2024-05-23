
import counterReducer from "./Counter.Reducer";
import { combineReducers } from "redux";

const rootReducer =combineReducers({
    counter : counterReducer
})
export default rootReducer;
