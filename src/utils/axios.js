import axios from 'axios'
import { SiCoronaengine } from 'react-icons/si';

const api = axios.create({
    baseURL : "http://localhost:9000/api/v1",
    timeout:8000
    // withCredentials:true,

})


api.interceptors.request.use((config)=>{

    try {

        const token = localStorage.getItem("token");

        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;

        
    } catch (error) {

       return Promise.reject(error);
        
    }

},

    (error)=>{
        return Promise.reject(error);
    }

)


api.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if(error.response?.status === 401){   
             alert('Unauthorized');
        window.location.href="/login"
    }
    return Promise.reject(error);
        
    }
    
)


export default api;