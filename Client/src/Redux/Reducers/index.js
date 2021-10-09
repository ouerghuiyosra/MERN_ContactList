import { combineReducers } from "redux";
import authReducer from './authReducer'
import contactReducer from './contactReducer'
import alertReducer from './alertReducer'
const rootReducer = combineReducers({authReducer,contactReducer,alertReducer});

export default rootReducer;