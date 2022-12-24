import axios from "axios";
import { useEffect } from "react";
import "./style.scss"

function HomePage() {
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}`).then((res)=>console.log(res))
    },[])
    return <div className="text">Home</div>;
}

export default HomePage;