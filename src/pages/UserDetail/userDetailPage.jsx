import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function UserDetail() {
    const { id } = useParams(); // Mengambil id dari URL

    useEffect(() => {
        console.log(id, "==> ID NYA");
        
    }, [id])
    return(
        <h1>This is user detail</h1>
    )
}