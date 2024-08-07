import baseUrl from "../utils/baseUrl";
import axios from "axios";
import { setCookie } from "../utils/cookieAction.utils";
export const loginUser=async(email,password,myState,navigate)=>{
    try {
         
        const api = await axios.post(`${baseUrl}/user/login`, {
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            
                withCredentials: true,
            
        });
     
        setCookie("UserAuth",api.data.loginToken,7);
       api.data.loginToken
        myState.setToast(true);
        myState.setToastMessage(api.data.message)
        myState.setIsAuthenticated(true);
       localStorage.setItem("token",api.data.loginToken);
        setTimeout(() => {
            navigate('/')
        }, 1000);

    } catch (error) {
        myState.setToast(true);
        myState.setToastMessage(error.response.data.message)
        myState.setIsAuthenticated(false);
    }
}

export const logoutUser = async (navigate,myState) => {
   
    const api = await axios.get(`${baseUrl}/user/logout`,{
        headers: {
            "Content-Type": "application/json",
            authorization: document.cookie,
        }
        
    });
    setCookie("UserAuth", document.cookie.split("=")[1], 0);
    myState.setIsAuthenticated(false);

    if (api.data && api.data.message) {
        myState.setToast(true);
        myState.setToastMessage(api.data.message)
    } else {
        myState.setToast(true);
        myState.setToastMessage("Logout Successfully")
    }



    setTimeout(() => {
        navigate('/');
    }, 100);

    localStorage.removeItem("token");
}