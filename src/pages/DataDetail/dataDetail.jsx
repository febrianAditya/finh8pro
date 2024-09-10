import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function DataDetail() {
    const { id } = useParams()
    const [dataUsers, setDataUsers] = useState([])

    useEffect(() => {
        fetchData()
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