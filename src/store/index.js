import { createStore, combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";
import cartReducer from "./reducers/cartReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
const root = combineReducers({
    ProductReducer,
    cartReducer
})
const store = createStore(root, composeWithDevTools());
export default store;