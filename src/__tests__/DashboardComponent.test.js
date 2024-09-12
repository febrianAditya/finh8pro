import {render, screen, fireEvent} from "@testing-library/react"
// import DashboardPage from "../pages/DashboardPage/dashboardPage"
import AboutPage from "../pages/AboutPage/AboutPage"

test("Testing Dashboard", () => {
    render(<AboutPage/>)

    const title = screen.getByText(/This is About Company/i)
    expect.title().toBeInTheDocument()
})