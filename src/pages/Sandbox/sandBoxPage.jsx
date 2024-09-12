import { useSelector, useDispatch } from "react-redux"
import { useState } from 'react';
// import { changeName, changeEmail, fetchData } from "../../store/action"
// import { login } from "../../store/action"
import { hitApi } from "../../store/action";

export default function SandBoxPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userName = useSelector(state => state.username)
    const userEmail = useSelector(state => state.userEmail)
    const users = useSelector(state => state.users)
    const state = useSelector((state) => state);

    // console.log(userName, "==> Sanbox state Global");
    
    const dispatch = useDispatch()
    
    // const handleChangeName = () => {
    //     dispatch(changeName("FEFEB"))
    // }

    // const handleChangeEmail = () => {
    //     dispatch(changeEmail("danta@mail.com"))  
    // }

    // const handleAsync = () => {
    //     // console.log("febri"); 
        
    //     // return (dispatch) => {
    //     //     const counter = 3
    //     //     console.log("before");
            

    //     //     if (counter == 2) {
    //     //        return
    //     //     }

    //     //     console.log("after");
            
    //     //     dispatch(changeEmail("danta@mail.com"))
    //     // }

    //     // dispatch(fetchData())
    // }

    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const doSubmit = (event) => {
        event.preventDefault();
        // dispatch(login(email, password));
        setEmail('');
        setPassword('');
    };

    const handleOnClick = () => {
        // dispatch({
        //     type: "CHANGE_USER",
        //     payload: "adam"
        // })
        dispatch(hitApi())
    }
    
    return(
        <>
            <h1>This is Sandbox Page</h1>
            <h4>{userName}</h4>
            <h4>{userEmail}</h4>
            <p>{JSON.stringify(users)}</p>
            {/* <button onClick={handleChangeName}>Rubah username</button>
            <button onClick={handleChangeEmail}>Rubah useremail</button> */}
            {/* <button onClick={handleAsync}>Rubah</button> */}
            <button onClick={handleOnClick}>Cek State</button>




            <form name="loginForm" onSubmit={doSubmit}>
                <div className="form-group-collection">
                    <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        onChange={emailChange}
                        value={email}
                    />
                    </div>
                    
                    <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        onChange={passwordChange}
                        value={password}
                    />
                    </div>
                </div>

                <input type="submit" value="Login" />

                <div className="message">
                    {state.isLoginPending && <div>Pending...</div>}
                    {state.isLoginSuccess && <div>Success...</div>}
                    {state.loginError && <div>{state.loginError.message}</div>}
                </div>
            </form> 
        </>
    )
}