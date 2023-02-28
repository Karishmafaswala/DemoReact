import changeNumber from "./incDec";
import uersReducer from "./nameReducer"

import { combineReducers } from "redux";

//create root reducer

const rootReducer = combineReducers({
    changeNumber,uersReducer
})  // can multiple reducer

export default rootReducer