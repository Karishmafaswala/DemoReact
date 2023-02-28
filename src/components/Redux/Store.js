import {createStore,applyMiddleware} from 'redux'
//import userReducer from './Reducer'
import rootReducer from "./Reducer/index2";
import { composeWithDevTools } from 'redux-devtools-extension';
import {incNumber} from './Action/index'

// const logger = store => {

//     return next => {
//         return action=> {
//             const result = next(incNumber)
//             console.log("Middleware Log", result)
//             return result
//         }
//     }
// }

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware()))

export default store