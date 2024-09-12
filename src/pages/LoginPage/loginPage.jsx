// import { useSelector, useDispatch } from "react-redux"

import { useState } from "react"
import { login } from "../../store/action"
import { useDispatch, useSelector } from "react-redux"

export default function LoginPage() {
    // const nameUser = useSelector(state => state.name)

    // console.log(nameUser, "==> LOGIN");
    const [emailUser, setEmailUser] = useState("")
    const [passworUser, setPasswordUser] = useState("")
    const dispatch = useDispatch()
    const state = useSelector(state => state)


    const handleInputEmail = (e) => {
        let inputUser = e.target.value
        setEmailUser(inputUser)
    }


    const handlePasswordUser = (e) => {
        let inputPassword = e.target.value
        setPasswordUser(inputPassword)
    }


    const handleSubmitForm = (e) => {
        e.preventDefault()
        dispatch(login(emailUser, passworUser))
    }
    
    return(
        <>
            <div className="container">

                <h1>This is Login Page</h1>


                <form onSubmit={e => handleSubmitForm(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={handleInputEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={handlePasswordUser} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

                {
                    state.isLoginPending && (<h1>Lagi Proses Loh ....</h1>)
                }
                {
                    state.isLoginSuccess && (<h1>Berhasil login</h1>)
                }
                {
                    state.loginError && (<h1>{state.loginError}</h1>)
                }
            </div>

        </>
    )
}







// import React from "react";
// import {connect} from "react-redux"
// import {useDispatch} from "react-redux"

// class LoginPage extends React.Component {
    
    
//     constructor() {
//         super()
//         this.state = {
//             name: "febri"
//         }
//     }


//     handleChangeName = () => {
//         // console.log("Febrian");
//         // const { dispatch } = this.props;  
//         // dispatch({
//         //     type: "CHANGE_USER",
//         //     payload: "Ditra"
//         // })
//     }

//     render() {
//         return(
//             <>
                
//             </>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         username: state.username,
//         userEmail: state.userEmail
//     }
// }

// export default connect(mapStateToProps)(LoginPage)