import {createStore} from "redux"
// import Reducer from './Reducer'
import rootReducer from "../Reducers/Index"
const store= createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store