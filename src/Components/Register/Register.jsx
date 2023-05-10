import "./register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
async function Submit(information)
{
};
const Register = () => {
    const [information, setInformation] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    return ( 
        <section className="register-container">
              <div className="register-title"> Sign up </div>
            <form>
                <label>EMAIL</label>
                <input type="text" placeholder="Enter your email" value={information.email} onChange={(e)=>setInformation({...information,email:e.target.value})}/>
                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username" value={information.username} onChange={(e)=>setInformation({...information,username:e.target.value})}/>
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" value={information.password} onChange={(e)=>setInformation({...information,password:e.target.value})} />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    Submit(information)
                    .then(()=>{
                        console.log("Success");
                        navigate(`/login`,{state:{success:true}});
                    });
                    
                }}> Create account </button>
            </form>
        </section>
        
     );
}
 
export default Register;