import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function CardComponent() {
    const navigate = useNavigate()
    const [dataUsers, setDataUsers] = useState([])

    // if(string.length > limit)
    //     {
    //       // you can also use substr instead of substring
    //       string = string.substring(0,limit) + dots;
    //     }
      
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://jsonplaceholder.typicode.com/users")
            // console.log(data);

            const resultData = await data.json()
            // console.log(resultData, "==> FINAL");
            setDataUsers(resultData)
        } catch (error) {
            console.log(error);
        }
    }


    const handleManipulate = (inputStreer) => {
        // console.log(inputStreer, "aku terpanggil");
        
        const tampData = inputStreer
        if (inputStreer.length > 5) {
            let tampData =  inputStreer.substring(0,5) + "..." 
            return tampData
        }
        // console.log(tampData," ==> FINAL MANIPULATE");   

        return tampData
    }


    return(
        <>
            {
                dataUsers.length === 0 ? (
                    <h1>Loading...!</h1>
                ) : (
                    <div className="d-flex justify-content-center ms-auto">
                        <div className="row ms-4">
                            {
                                dataUsers.map(el => (   
                                    <div key={el.id}  className="col-3 gap-3">
                                        <div className="card mt-5 mb-5" style={{"width": "18rem"}}>
                                            <img src="https://picsum.photos/100" className="card-img-top" alt="gambar-orang" height={150} width={30}/>
                                            <div className="card-body">
                                                <h5 className="card-title">{el.name}</h5>
                                                <p className="card-text">{el.email}</p>
                                                <p>{handleManipulate(el.address.street)} - {el.address.city} </p>
                                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                                <Link to={`/user/${el.id}`} className="btn btn-primary">
                                                    View Details
                                                </Link> {" || "}
                                                <button className="btn btn-primary" onClick={() => navigate(`/data/${el.id}`)}> Show Detail </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}