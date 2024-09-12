import "./dashboardpage.css"

import {
    CardComponent
} from "../../components"

import { hitDataUser } from "../../store/action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function DashboardPage() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        handleHitApi()
    }, [])


    const handleHitApi = async() => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            const resultData = await data.json()
            dispatch(hitDataUser(resultData))
        } catch (error) {
            console.log(error);
        }
    }


    return(
        <>
            <CardComponent/>
        </>
    )
}