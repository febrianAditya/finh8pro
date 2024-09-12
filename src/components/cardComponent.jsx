import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function CardComponent() {
    const navigate = useNavigate()
    const [dataUsers, setDataUsers] = useState([])
    const dataUser = useSelector(state => state.dataUser)

    const handleManipulate = (inputStreer) => {
        // console.log(inputStreer, "aku terpanggil");
        
        const tampData = inputStreer
        if (inputStreer.length > 5) {
            let tampData =  inputStreer.substring(0,5) + "..." 
            return tampData
        }
        return tampData
    }


    return(
        <>
            {
                dataUser.length === 0 ? (
                    <h1>Loading...!</h1>
                ) : (
                    <div className="d-flex justify-content-center ms-auto">
                        <div className="row ms-4">
                            {
                                dataUser.map(el => (   
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