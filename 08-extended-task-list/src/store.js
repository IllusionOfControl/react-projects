import todoReducer from "./todoReducer";
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(todoReducer, applyMiddleware(thunk));

export default store;
