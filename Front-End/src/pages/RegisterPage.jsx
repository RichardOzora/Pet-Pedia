import { assets } from "../assets/frontend_assets/assets";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios"
import { toast } from "react-toastify";

function RegisterPage(){

    const {token, setToken, navigate, backendUrl} = useContext(ShopContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post(backendUrl + "/api/user/register", {name, email, password});
            if(response.data.success){
                setToken(response.data.token);
                localStorage.setItem('token', response.data.token);
            }else{
                toast.error(response.data.message);
            }
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
    }

    return(
        <motion.div 
        className="h-screen flex"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}>
            <div className="w-1/2 flex flex-col justify-center items-center">
                <NavLink to="/">
                    <img className="w-36 mb-5" src={assets.logo} alt="" />
                </NavLink>
                <h2 className="text-2xl font-bold mb-1">Register for new account</h2>
                <p className="mb-8">
                    Already have an account?{' '}
                    <NavLink to="/login " className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Login
                    </NavLink>
                </p>
                <form onSubmit={onSubmitHandler} className="w-full max-w-lg">
                    {/* Name Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-md font-medium mb-2">Name</label>
                        <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-md font-medium mb-2">Email</label>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-md font-medium mb-2">Password</label>
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"/>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-lg bg-indigo-600 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition duration-300">
                        Register
                        </button>
                    </div>
                </form>

                <div className="my-6">
                    <span id="line" className=" text-gray-500 text-sm">Or Register With</span>
                </div>

                <div className="flex justify-between gap-12 w-[65%]">
                    {/* Google Button */}
                    <button
                        className="w-[60%] flex items-center justify-center bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg transition duration-300 border border-black"
                        >
                        <img src={assets.google} alt="" className="w-7"/>
                        <i className="fab fa-google mr-2"></i> Google
                    </button>
                    {/* GitHub Button */}
                    <button
                        className="w-[60%] flex items-center justify-center bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-lg transition duration-300 border border-black"
                        >
                        <img src={assets.github} alt="" className="w-8"/>
                        <i className="fab fa-github mr-2"></i> GitHub
                    </button>
                </div>
            </div>

            <div className="w-1/2 relative">
                <img className="object-cover w-full h-full" src="https://img.freepik.com/free-photo/adorable-brown-white-basenji-dog-smiling-giving-high-five-isolated-white_346278-1657.jpg?t=st=1728273560~exp=1728277160~hmac=8e05df45cc1af0f42c3590579ba4f824aca94e9c4b20e1fa77f5379a1d791160&w=1060" alt=""></img>
            </div>
        </motion.div>
    )
}

export default RegisterPage;