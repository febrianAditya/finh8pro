import "./dashboardpage.css"
// import styles from "./dashboard.module.css"
// import titleHeading from "../../allStyle"
// import styled from "styled-components"

import {
    // NavbarComponent,
    CardComponent
} from "../../components"

import { useSelector, useDispatch } from "react-redux"

// const HeadingMan = styled.h1`
//     color: yellow;
//     display: inline
// `

// const styleForHeading = {
//     color: "red",
//     display: "inline"
// }

export default function DashboardPage() {
    const dataUser = useSelector(state => state.dataUsers)
    const nameUser = useSelector(state => state.name)

    console.log(nameUser, "==> FINAL");
    
    const dispatch = useDispatch()

    const tryChange = () => {
        dispatch({
            type: "CHANGE_NAME",
            payload: "Aditya"
        })
    }


    return(
        <>
            {/* <button type="button" class="btn btn-primary">Primary</button>
            <p className="try-class">Cobacobi</p> */}
            {/* <h1 style={titleHeading}> this is Dashboard Page </h1> */}
            {/* <HeadingMan>Febria</HeadingMan>
            <h3 style={{ display: "inline"}}>Bflp x Hacktiv</h3> */}

            {/* <NavbarComponent/> */}
            <button onClick={tryChange}>Coba</button>
            <CardComponent/>
        </>
    )
}