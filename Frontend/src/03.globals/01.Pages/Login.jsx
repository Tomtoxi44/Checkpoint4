import React,{useContext,useState,useEffect} from 'react';
import { NavLink,useNavigate } from "react-router-dom";
import UserContext from "../04.Context/UserContext";
import axios from "axios";


const Login = () => {

    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const { userContext,setUserContext }= useContext(UserContext)
    const navigate = useNavigate();


    const handleSubmit = (inscription) => {
        inscription.preventDefault();
         axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/login`, {pseudo, password})
        .then((res) => {

            setUserContext(res.data[0])
            console.log(userContext);
            navigate("/Salon");
        })
        .catch((err) => {
            console.warn("retour err", err);
        });
    }


 
    return (
        <div>
            <div className='h-screen bg-gray-800 overflow-y-hidden'>
                
                <div className='flex-1 h-full flex justify-center items-center'>

                    <div className='h-3/4 w-3/4 '>
                    <form action="" onSubmit={handleSubmit}>
                        <div  className='h-full w-full bg-gray-500 rounded-lg shadow-md shadow-black flex flex-col gap-8 p-10'>
                            <div className='flex flex-col justify-center items-center gap-5 h-full'>
                                <div>
                                    <label htmlFor="pseudo">
                                <p className='text-white'>Pseudo:</p></label>
                                <input  id='pseudo' type="text" placeholder='Pseudonyme'onChange={(event) => setPseudo(event.target.value)} className='rounded-full shadow-md shadow-black pl-5'/>
                                </div>
                                <div>
                                    <label htmlFor="password">
                                <p className='text-white'>Password:</p></label>
                                <input  id="password"type="password"onChange={(event) => setPassword(event.target.value)}  placeholder='Password1234' className='rounded-full shadow-md shadow-black pl-5' />
                                </div>
                                <div className='flex flex-col gap-10'>
                                <button type='submit' className=' text-white bg-blue-900 w-[150px] rounded-full shadow-md shadow-black'>
                                    Connexion
                                </button>

                                <NavLink to="/inscription">
                                    <p className='text-blue-900 text-center underline'>Inscription</p>
                                </NavLink>
                                </div>

                            </div>
                            
                            
                        </div></form>
                    </div>
        
                </div>
            </div>
        </div>
    );
};

export default Login;