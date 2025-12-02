import React from "react";
import Template from "../components/Template";

function Login({setIsLoggedIn, setCurrentpage}){
    return(
        <div className="mb-[200px] mt-10">
            <Template 
                title="Welcome Back"
                formtype="login"
                setIsLoggedIn={setIsLoggedIn}
                setCurrentpage={setCurrentpage}
            />
        </div>
    )
}

export default Login;