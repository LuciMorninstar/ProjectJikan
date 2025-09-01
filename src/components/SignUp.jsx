import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../utils/users.js"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"

const SignUp = () => {


const navigate = useNavigate();

const [username, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");

// console.log(name,email, password);





const handleSubmit = async (e)=>{

    e.preventDefault();


    const data = {
        username,
        email,
        password,
        role
    }
    

    try {

        const response = await signUp(data);
        console.log("Sign up success", response.data);
        toast.success(response.data.message);
        setUserName("");
        setEmail("");
        setPassword("");
        setRole("");

        


    } catch (error) {



        console.error(error.response?.data || error.message);
        toast.error(error.message);
        navigate("/signIn");

        
    }

}



  return (



    <div className = " w-full h-[calc(100vh-100px)] flex justify-center items-center overflow-y-hidden" >

        <div className = "  flex flex-col gap-5 justify-center items-start border border-white rounded-md px-8 py-10 ">

            <div>
                <span className = "text-3xl text-white font-semibold">Welcome To the Sign Up </span>
            </div>

            <div className = "w-full">
                <form className = "w-full flex flex-col gap-2" onSubmit = {handleSubmit}>
                    <div className = "flex flex-col gap-2 w-full">
                        <label className = "text-white texxt-sm" htmlFor = "username">UserName</label>
                        <input onChange ={ (e)=> setUserName(e.target.value)} className = "w-full border border-white text-white outline-none px-3 py-2 rounded-sm " type="text" placeholder = "Type your Full UserName " id = "username" name = "username"/>
                    </div> 
                    <div className = "flex flex-col gap-2 w-full">
                        <label className = "text-white texxt-sm" htmlFor = "email">Email</label>
                        <input onChange ={ (e)=> setEmail(e.target.value)} className = "w-full border border-white text-white outline-none px-3 py-2 rounded-sm " type="email" placeholder = "Type your Email " id = "email" name = "email"/>
                    </div>
                    <div className = "flex flex-col gap-2 w-full">
                        <label className = "text-white texxt-sm" htmlFor = "password">Password</label>
                        <input onChange ={ (e)=> setPassword(e.target.value)} className = "w-full border border-white text-white outline-none px-3 py-2 rounded-sm " type="password" placeholder = "Type your Password " id = "password" name = "password"/>
                    </div>
                    <div className = "flex flex-col gap-2 w-full">
                        <label className = "text-white texxt-sm" htmlFor = "role">Role</label>
                        <input onChange ={ (e)=> setRole(e.target.value)} className = "w-full border border-white text-white outline-none px-3 py-2 rounded-sm " type="text" placeholder = "Type your role " id = "role" name = "role"/>
                    </div>

                    <div className = "flex justify-start mt-2">
                         <button className = "text-white text-sm px-8 py-3 rounded-md cursor-pointer  bg-[#3e44fe] " type="submit"> SignUp</button>
                    </div>

                       <div className = "flex justify-center gap-2 text-white text-sm mt-4">
                        <span> Already Have An Account?</span>
                        <Link to = "/signIn"><span className = "text-blue-500 hover:text-blue-300">Sign In</span></Link>
                        
                    </div>

                   

                </form>



            </div>


        </div>
  
    </div>


   

  )
}

export default SignUp