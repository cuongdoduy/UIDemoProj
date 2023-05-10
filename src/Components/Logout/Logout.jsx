import { useEffect } from "react";

const Logout=()=> {
    
    useEffect(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshtoken");
        window.location.href="/login";
},[]);
    return ( 
        <div className=""></div>
     )
}

export default Logout;