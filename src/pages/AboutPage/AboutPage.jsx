
import {Link, Outlet} from "react-router-dom"

export default function AboutPage() {

    return(
        <>
            <h1>About Us</h1>
            <p>This is my about us</p>
            <Link to={'about-company'}>
                About Company
            </Link>
            <span>{" || "}</span>
            <Link to={'about-me'}>
                About Me
            </Link>
            <Outlet/>
        </>
    )
}