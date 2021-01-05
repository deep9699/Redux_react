import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import cookieReducer from "./cookies/cookiesReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";


 

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    cookie:cookieReducer,
    user:userReducer
})

export default rootReducer;