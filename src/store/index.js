import { createStore } from "redux"

const initialState = {
    dataUsers: [],
    name: "Febrian"
}

const reducers = (state = initialState, action) => {
    console.log(action, "==> PERIKSA");
    
    switch (action.type) {
        case "FETCH_USER":
            return {...state, dataUsers: action}
        case "CHANGE_NAME":
            return {...state, name: action.payload}
        default:
            return state;
    }
}

const store = createStore(reducers)

export default store