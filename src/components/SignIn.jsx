import React from 'react'
import {useState} from "react";
import { Link } from 'react-router-dom';
import { signIn } from '../utils/users.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// console.log("console", email, password);


const handleSignIn =async (e)=>{
    e.preventDefault();


    const data = {
        email, 
        password
    }

        try {

            const response = await signIn(data);
            console.log(response.data);
            toast.success(response.data.message);

            const token = response.data.token;

            localStorage.setItem("token", token)



            navigate("/");

           




            
        } catch (error) {
            console.error(error.response?.data ||error.message);
            toast.error(error.response?.data?.message ||"Sign In failed");
            
        }



}




  return (
   

    <div className = " w-full h-[calc(100vh-100px)] flex justify-center items-center overflow-y-hidden" >

        <div className = "  flex flex-col gap-5 justify-center items-start border border-white rounded-md px-5 py-10 shadow-md ">

            <div>
                <span className = "text-3xl text-white font-semibold">Welcome To the Sign In </span>
            </div>

            <div className = "w-full">
                <form className = "w-full flex flex-col gap-2" onSubmit = {handleSignIn}>
                    
                    <div className = "flex flex-col gap-2 w-full">
                        <label className = "text-white texxt-sm" htmlFor = "email">Email</label>
                        <input onChange ={ (e)=> setEmail(e.target.value)} className = "w-full border border-white text-white outline-none px-3 py-2 rounded-sm " type="email" placeholder = "Type your Email " id = "email" name = "email"/>
                    </div>
                    <div className = "flex flex-col gap-2 w-full">
                        <label className = "text-white texxt-sm" htmlFor = "password">Password</label>
                        <input onChange ={ (e)=> setPassword(e.target.value)} className = "w-full border border-white text-white outline-none px-3 py-2 rounded-sm " type="password" placeholder = "Type your Password " id = "password" name = "password"/>
                    </div>
                  

                    <div className = "flex justify-start mt-2">
                         <button className = "text-white text-sm px-8 py-3 rounded-md cursor-pointer  bg-[#3e44fe] " type="submit"> SignIn</button>
                    </div>

                    <div className = "flex justify-center gap-2 text-white text-sm mt-4">
                        <span> Haven't registered yet?</span>
                        <Link to = "/signUp"><span className = "text-blue-500 hover:text-blue-300">SignUp</span></Link>
                        
                    </div>

                    

                   

                </form>



            </div>


        </div>
  
    </div>

  )
}

export default SignIn