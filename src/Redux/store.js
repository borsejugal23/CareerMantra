import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as credentialReducer } from "./CredentialReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";
import { reducer as adminReducer } from "./AdminReducer/reducer";

const rootReducer = combineReducers({productReducer,credentialReducer,cartReducer,adminReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
