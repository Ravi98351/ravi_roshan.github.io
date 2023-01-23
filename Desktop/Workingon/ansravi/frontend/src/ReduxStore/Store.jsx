import {legacy_createStore , combineReducers , applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import SignupReducer from "../pages/SignUp/signup.reducer";
// import { LoginReducer } from "../pages/login/login.reducer";

let rootReducer = combineReducers({
 userSignup:SignupReducer
});

export const Store = legacy_createStore(rootReducer , applyMiddleware(thunk))

