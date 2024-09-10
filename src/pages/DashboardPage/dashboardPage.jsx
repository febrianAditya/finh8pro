import "./dashboardpage.css"
// import styles from "./dashboard.module.css"
// import titleHeading from "../../allStyle"
// import styled from "styled-components"

import {
    // NavbarComponent,
    CardComponent
} from "../../components"

// const HeadingMan = styled.h1`
//     color: yellow;
//     display: inline
// `

// const styleForHeading = {
//     color: "red",
//     display: "inline"
// }

export default function DashboardPage() {

    return(
        <>
            {/* <button type="button" class="btn btn-primary">Primary</button>
            <p className="try-class">Cobacobi</p> */}
            {/* <h1 style={titleHeading}> this is Dashboard Page </h1> */}
            {/* <HeadingMan>Febria</HeadingMan>
            <h3 style={{ display: "inline"}}>Bflp x Hacktiv</h3> */}

            {/* <NavbarComponent/> */}
            <CardComponent/>
        </>
    )
}