import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import {thunk} from "redux-thunk"

const initialState = {
    username: "febri",
    userEmail: "febri@mail.com",
    myCar: ["kijang inova", "karimun"],
    users: [],
    dataUser: [],
    detailData: [],
    isLoginPending: false,
    isLoginSuccess: false,
    loginError: null
}

const reducer = (state = initialState, action) => {
    console.log(action, "==> MASUK GA BOSS 2");
    switch (action.type) {
        case "CHANGE_USER":
            return {...state, username: action.payload}
        case "CHANGE_EMAIL":
            return {...state, userEmail: action.payload}
        case "CHANGE_USERS":
            return {...state, users: action.payload}
        case "SET_DATA_USER":
            return {...state, dataUser: action.payload}
        case "SET_DATA_DETAIL":
            return {...state, detailData: action.payload}
        case "SET_LOGIN_PENDING":
            return {...state, isLoginPending: action.payload}
        case "SET_LOGIN_SUCCESS":
            return {...state, isLoginSuccess: action.payload}
        case "SET_LOGIN_ERROR":
            return {...state, loginError: action.payload.message}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store