import { createContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axiosInstance from '../axios';


const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null)
    let [user, setUser] = useState(()=> localStorage.getItem('access_token') ? jwt_decode(localStorage.getItem('access_token')) : null)
    let [err , setErr] = useState(null)
    

    let navigate = useNavigate();

    const login = (formData) =>{
        axiosInstance
			.post(`token/`, {
				email: formData.email,
				password: formData.password,
			})
            .then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
                setAuthTokens(res.data)
                setUser(jwt_decode(res.data.access))
                setErr(null)
                navigate("", { replace: true });
            })
            .catch((err)=>{
                setErr(err.response.data);
                console.log(err.response.data);
                alert(err.response.data)
            })
                
                
    }

    const logout = () =>{
        console.log('auth logout clicked')
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        axiosInstance.defaults.headers['Authorization'] = null
        navigate("", { replace: true });
    }

    let contextData = {
        user:user,
        setUser: setUser,
        authTokens:authTokens,
        login:login,
        logout:logout,
        err:err,
        setErr:setErr,
    }

    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )

}
