import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../03.Components/Navbar';
import axios from "axios";
import SalonContext from "../04.Context/SalonContext";
import { useNavigate } from "react-router-dom";
import NewSalon from '../03.Components/NewSalon';
import Message from './Message';


const HomePage = () => {
    const { setSalonContext } = useContext(SalonContext);
    const navigate = useNavigate();
    const [popUp, setPopUp] = useState(false)
    const [nameSalon, setNameSalon] = useState("")
    const [filtre, setfiltre] = useState("")
  

    const handleChange = async (e) => {
        console.log(e);
        await setSalonContext(e.idsalon )
        await navigate("/message")
    }

    const handleSubmit = (newSalon) => {
        newSalon.preventDefault();
        return axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/salon`, { name_salon: nameSalon })
            .then((res) => console.info(res),
                setPopUp(false))
            .catch((err) => { console.warn(err); })
    }

    const [data, setData] = useState([])
    const [dataMessage, setDataMessage] = useState([])


    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_BACKEND_URL}/salon`)
            .then((res) => {
                setData(res.data)
            })
    }, [filtre, handleSubmit])

    
    
    
    useEffect (()=>{
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/salon/all`)
        .then((res) => {setDataMessage(res.data)
        
        })

        
       
        
    },[])
   
    return (
        <>
            <div className='h-screen bg-gray-800 overflow-y-hidden'>

                {popUp ? <NewSalon setNameSalon={setNameSalon} setPopUp={setPopUp} handleSubmit={handleSubmit} /> : ""}
                <Navbar />
                <div className='flex-1 h-full flex justify-center items-center'>

                    <div className='h-3/4 w-3/4 '>
                        <button type='button' onClick={() => setPopUp(true)} className='text-white underline'>Créer un nouveau salon</button>
                        <div className='h-full w-full bg-gray-500 rounded-lg shadow-md shadow-black flex flex-col gap-8  items-center'>
                            <p className='mt-10'>Recherche</p>
                            <input onChange={(event) => setfiltre(event.target.value)} className='mb-10  pl-5 rounded-full shadow-md shadow-black' type='text' />

                            {data.filter(e => filtre ? e.name_salon.toLowerCase().includes(filtre.toLowerCase()) : true)
                                .map((e) => {
                                    console.log();
                                    return (
                                        <div key={e.idsalon } className='flex flex-row gap-10'>
                                            <div key={e.idsalon } className='bg-white w-[350px] rounded-lg text-center shadow-md shadow-black flex flex-row gap-5 '>
                                                
                                                <p key={e.idsalon } className='m-auto'>{e.name_salon}</p>
                                                <p key={e.idsalon } className='m-auto'>{dataMessage.filter(message => message.salon_id === e.idsalon ).length} messages</p>
                                            </div>
                                            <button key={e.idsalon } type='button' onClick={() => handleChange(e)} className='bg-blue-800 rounded-lg w-[150px] shadow-md shadow-black  text-white'>
                                                Rejoindre
                                            </button>
                                        </div>)
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HomePage;