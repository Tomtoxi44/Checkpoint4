import React,{useEffect,useState,useContext} from 'react';
import Navbar from '../03.Components/Navbar';
import axios from "axios";
import SalonContext from "../04.Context/SalonContext";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
const { setSalonContext } = useContext(SalonContext);
const navigate = useNavigate();


const handleChange = async (e) => {
    console.log(e);
    await setSalonContext(e.idsalon)
    await navigate("/message")
}

const [data,setData] = useState([])


useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/salon`)
    .then((res) => {
        setData(res.data)
    })
},[])




    return (
        <> 
            <div className='h-screen bg-gray-800 overflow-y-hidden'>
                <Navbar/>
                <div className='flex-1 h-full flex justify-center items-center'>

                    <div className='h-3/4 w-3/4 '>
                        <div  className='h-full w-full bg-gray-500 rounded-lg shadow-md shadow-black flex flex-col gap-8 p-10 justify-center items-center'>
                            {data.map((e)=>{ return(
                            <div key={e.idSalon} className='flex flex-row gap-10'>
                                <div key={e.idSalon} className='bg-white w-[350px] rounded-lg text-center shadow-md shadow-black flex flex-row gap-5 '>
                                    <p key={e.idSalon} className='m-auto'>{e.name_salon}</p> 
                                    <p key={e.idSalon} className='m-auto'>x messages</p>
                                </div>
                                <button key={e.idSalon} type='button' onClick={()=>handleChange(e)}  className='bg-blue-800 rounded-lg w-[150px] shadow-md shadow-black  text-white'>
                                    Rejoindre
                                </button>
                            </div>)
                            })}
                        </div>
                    </div>
        
                </div>
            </div>
        </>
    );
};

export default HomePage;