import { days, months } from '../variables/dateVars'
import { getForecast, getWeather } from '../reducers/weatherReducer'
import { checkauthorizedGeoLocation } from '../utils/geolocation'


const SET_DATE = 'SET_DATE'
const SET_LOCATION = 'SET_LOCATION'
const SET_SEARCHING = 'SET_SEARCHING'
const SET_INITIALIZED = 'SET_INITIALIZED'
const SET_COORDINATES = 'SET_COORDINATES'
const SET_CITY = 'SET_CITY'


let initialState = {
    position: {
        address: {},
        coordinates: {
            lon: null,
            lat: null,
        },
        city: null,
    },
    date: {
        year: null,
        month: null,
        day: null,
        daysInMonth: null,
    },
    initialized: false,
    searching: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                position: action.payload,
            }

        case SET_DATE:
            return {
                ...state,
                date: {
                    ...action.payload,
                },
            }

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: action.payload,
            }

        case SET_SEARCHING:
            return {
                ...state,
                searching: action.payload,
            }

        case SET_COORDINATES:
            return {
                ...state,
                position: {
                    ...state.position,
                    coordinates: {
                        lon: action.payload.lon,
                        lat: action.payload.lat,
                    },
                },
            }

        case SET_CITY:
            return {
                ...state,
                position: {
                    ...state.position,

                    city: action.payload,
                },
            }

        default:
            return state
    }
}


export const setDateSuccess = payload => ({ type: SET_DATE, payload })
export const setLocation = payload => ({ type: SET_COORDINATES, payload })
export const setCity = payload => ({ type: SET_CITY, payload })
export const setInitialized = payload => ({ type: SET_INITIALIZED, payload })
export const setSearching = payload => ({ type: SET_SEARCHING, payload })


export const getPosition = (resolve, city = null) => {
    return async dispatch => {
        let isAllow = checkauthorizedGeoLocation()

        if (isAllow === true) {
            navigator.geolocation.getCurrentPosition(position => {
                let scoForApi
                let positionForApi

                if (!city) {
                    positionForApi = `${position.coords.longitude},${position.coords.latitude}`
                    scoForApi = {
                        lon: position.coords.longitude,
                        lat: position.coords.latitude,
                    }
                } else {
                    positionForApi = city
                }

                callPositionAPI(positionForApi).then(() => {
                    if (resolve && scoForApi) {
                        resolve(dispatch(setSco(scoForApi)))
                    } else if (scoForApi) {
                        dispatch(setSco(scoForApi))
                    } else {
                        resolve()
                    }
                })
            })
        } else if (city) {
            callPositionAPI(city).then(address => {
                resolve(dispatch(setPositionSuccess(address)))
            })
        } else {
            resolve ? resolve() : resolve(dispatch(setSco({})))
        }
    }
}

export const getDate = resolve => {
    return async dispatch => {
        let d = new Date()
        let day = days[d.getDay() - 1]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()
        let daysInMonth = new Date(year, d.getMonth(), 0).getDate()

        resolve
            ? resolve(
                dispatch(setDateSuccess({ year, month, date, day, daysInMonth }))
            )
            : dispatch(setDateSuccess({ year, month, date, day, daysInMonth }))
    }
}

export const getInf = (city = null) => {
    return async dispatch => {
        new Promise((resolve, reject) => {
            dispatch(getPosition(resolve, city))
        })
            .then(() => {
                return new Promise((resolve, reject) => {
                    dispatch(getWeather(resolve, city))
                })
            })
            .then(() => {
                return new Promise((resolve, reject) => {
                    dispatch(getForecast(resolve, 16, city))
                })
            })
            .then(() => {
                return new Promise((resolve, reject) => {
                    dispatch(getDate(resolve))
                })
            })
            .then(() => {
                dispatch(setSearching(false))
                dispatch(setInitialized(true))
            })
    }
}


export default appReducer
