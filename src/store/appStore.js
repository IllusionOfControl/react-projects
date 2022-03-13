import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
// import thunk from 'redux-thunk'
// import appReducer from '../reducers/appReducer'
// import weatherReducer from '../reducers/weatherReducer'


let reducers = combineReducers({
    // weather: weatherReducer,
    // app: appReducer,
})

let store = createStore(reducers)


export default store
