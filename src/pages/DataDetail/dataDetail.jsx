import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hitDetailData } from "../../store/action"
import { useDispatch, useSelector } from "react-redux"


export default function DataDetail() {
    const { id } = useParams()
    const [dataUsers, setDataUsers] = useState([])
    const dispatch = useDispatch()
    const [scholl, setScholl] = useState()
    const dataDetailAja = useSelector(state => state.detailData)

    useEffect(() => {
        // fetchData()
        hitData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            // console.log(data);

            const resultData = await data.json()
            console.log(resultData, "==> FINAL");
            // console.log(id, "==> Final 2");
            
            console.log();
            
            setDataUsers(resultData)
        } catch (error) {
            console.log(error);
            
        }
    }

    const hitData = async () => {
        dispatch(hitDetailData(id))
    }   

    let findData = dataUsers.find(el => {
        return el.id === Number(id)
    })


    return(
        <>
            this is data detail
            {/* <p>{JSON.stringify(findData)}</p> */}
            <h3>{findData?.name}</h3>
        </>
    )
}