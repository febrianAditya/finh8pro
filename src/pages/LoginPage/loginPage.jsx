import { useSelector, useDispatch } from "react-redux"

export default function LoginPage() {
    const nameUser = useSelector(state => state.name)

    console.log(nameUser, "==> LOGIN");
    
    return(
        <>
            <h1>This is Login Page</h1>
        </>
    )
}