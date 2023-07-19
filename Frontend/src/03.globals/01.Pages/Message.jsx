import React,{useEffect,useState,useContext} from 'react';
import Navbar from '../03.Components/Navbar';
import axios from "axios";
import AffichageMessage from '../03.Components/AffichageMessage';
import EnvoieDeMessage from '../03.Components/EnvoieDeMessage';
import SalonContext from "../04.Context/SalonContext";


const Message = () => {

    const [data,setData] = useState([])
    const { salonContext } = useContext(SalonContext);
    const [envoieTxt,setEnvoieTxt] = useState("")

    const handleSubmit = (envoieMessage) => {
        envoieMessage.preventDefault();
        return axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/salon/1/user/1/message`, {messages : envoieTxt})
        .then((res)=>console.info(res))
        .catch((err)=>{console.warn(err);})
    }


    useEffect (()=>{
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/salon/${salonContext}/message`)
        .then((res) => {
            setData(res.data)
        })
    },[handleSubmit])


    return (
        <div className='h-screen bg-custom-body pb-28'>
            
            <Navbar/>
                <div className='h-[calc(100%-56px)] hide-scrollbar overflow-y-scroll '>
                    <div className='flex flex-col gap-32 mt-24 w-full items-center '>
                    {data.map((e)=>{ return(<AffichageMessage txt={e.messages} pseudo={e.pseudo}/>)
                    
                    })}
                    </div>
            
                </div>
            <EnvoieDeMessage handleSubmit={handleSubmit} setEnvoieTxt={setEnvoieTxt} />
        </div>
    );
};

export default Message;