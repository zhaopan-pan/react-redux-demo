import { combineReducers } from 'redux';
import reducerApp from "./reducer-app";
import reducersTest from "@/component/reducers-test"
export default combineReducers({
    reducerApp,
    reducersTest
})