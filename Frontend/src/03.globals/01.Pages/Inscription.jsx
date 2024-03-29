import React,{useState,useEffect} from 'react';
import { NavLink,useNavigate } from "react-router-dom";
import axios from "axios";


const Inscription = () => {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [dataPseudo, setDataPseudo] = useState();
    const [error, setError] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/user`)
          .then((res) => {
            setDataPseudo(res.data);
          })
          .catch((err) => console.error(err));
      }, []);

    const handleSubmit = (inscription) => {
        inscription.preventDefault();

        const userExists = dataPseudo.find(
            (data) => data.pseudo.toLowerCase() === pseudo.toLowerCase()
          );
      
          if (userExists) {
            return setError(false);
          }
        return axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/user`, {pseudo : pseudo,password: password })
        .then((res)=>console.info(res), navigate("/"))
        .catch((err)=>{console.warn(err);})
    }


    return (
        <div>
            <div className='h-screen bg-gray-800 overflow-y-hidden'>
                
                <div className='flex-1 h-full flex justify-center items-center'>

                    <div className='h-3/4 w-3/4 '>
                        <form action="" onSubmit={handleSubmit}>
                        <div  className='h-full w-full bg-gray-500 rounded-lg shadow-md shadow-black flex flex-col gap-8 p-10'>
                            
                            <div className='flex flex-col justify-center items-center gap-5 h-full'>
                                <div><label htmlFor="pseudo">
                                <p className='text-white'>Pseudo:</p>
                                </label>
                                <input id="pseudo" onChange={(event) => setPseudo(event.target.value)} required type="text" placeholder='Pseudonyme' className={`rounded-full shadow-md shadow-black pl-5 ${error ? "text-black" :"text-red-600"}`} />
                                {error ? "" :<p className='text-red-900 mt-3 underline text-center'>Pseudo déjà utilisé</p>}
                                </div>
                                <div>
                                <label htmlFor="password">
                                <p className='text-white'>Password:</p>
                                </label>
                                <input id='password' name="password"
                                type="password" onChange={(event) => setPassword(event.target.value)} required placeholder='Password1234' className='rounded-full shadow-md shadow-black pl-5' />
                                
                                </div>
                                <div className='flex flex-col gap-10'>
                                <button onSubmit={handleSubmit} type='submit'className=' text-white bg-blue-900 w-[150px] rounded-full shadow-md shadow-black'>
                                    Inscription
                                </button>
                                <NavLink to="/">
                                    <p className='text-blue-900 text-center underline'>Retour</p>
                                </NavLink>

                                </div>

                            </div>
                            
                            
                        </div>
                        </form>
                    </div>
        
                </div>
            </div>
        </div>
    );
};

export default Inscription;