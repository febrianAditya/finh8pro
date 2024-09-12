const CHANGE_USER = "CHANGE_USER"

export const changeName = (payload) => {
    return {
        type: CHANGE_USER,
        payload
    };
}

export const changeEmail = (payload) => { 
    return {
        type: "CHANGE_EMAIL",
        payload
    }
}


const setLoginPending = (payload) => {
    return {
        type : "SET_LOGIN_PENDING",
        payload 
    }
}


const setLoginSuccess = (payload) => {
    return {
        type: "SET_LOGIN_SUCCESS",
        payload
    }
}

const setErrorLogin = (payload) => {
    console.log(payload, "==> apa sih penasaran");
    
    return {
        type: "SET_LOGIN_ERROR",
        payload
    }
}

const hitApiLogin = (email, password, cb) => {
    setTimeout(() => {
        if (email === "marcel@mail.com" && password === "admin1234") {
            cb(null)
        }else {
            cb(new Error("GAGAL LOGIN"))
        }
    }, 2000)
}

export function login(email, password) {
    return (dispatch) => {
        dispatch(setLoginPending(true))
        dispatch(setLoginSuccess(false))
        dispatch(setLoginSuccess(false))

        hitApiLogin(email, password, (err) => {
            if (err) {
                dispatch(setErrorLogin(err))
                dispatch(setLoginPending(true))
                dispatch(setLoginSuccess(false))
            }else {
                dispatch(setLoginSuccess(true))
                dispatch(setErrorLogin(null))
            }
        })
    }
}


export const hitApi = () => {
    return () => {
        setTimeout(() => {
            console.log("Febrian manis");
        }, 1000)
    }
}




export const hitDataUser = (dataResponse) => {
    console.log(dataResponse, "===> ini baru sampai action");
    
    return async(dispatch) => {
        dispatch(
            {
                type: "SET_DATA_USER",
                payload: dataResponse
            }
        )
    }
}


export const hitDetailData = (id) => {
    console.log("id ==> ", id);
    
    return async(dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
            const data = await res.json()
            // console.log(data, "===> FINAL DATA");
            dispatch({
                type: "SET_DATA_DETAIL",
                payload: data
            })
            
        } catch (error) {
            console.log(error, "===> INI ERRORNYA GUYS");     
        }   
    }
}