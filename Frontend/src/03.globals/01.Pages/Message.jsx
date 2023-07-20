import React,{useEffect,useState,useContext} from 'react';
import Navbar from '../03.Components/Navbar';
import axios from "axios";
import AffichageMessage from '../03.Components/AffichageMessage';
import EnvoieDeMessage from '../03.Components/EnvoieDeMessage';
import SalonContext from "../04.Context/SalonContext";
import UserContext from "../04.Context/UserContext";
import AffichageMessageReverse from "../03.Components/AffichageMessageReverse"

const Message = () => {

    const [data,setData] = useState([])
    const { salonContext } = useContext(SalonContext);
    const { userContext } = useContext(UserContext);
    const [envoieTxt,setEnvoieTxt] = useState("")
    const [dataLoaded, setDataLoaded] = useState(false);

    const handleSubmit = (envoieMessage) => {
        envoieMessage.preventDefault();
        return axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/salon/${salonContext}/user/${userContext.idUser}/message`, {messages : envoieTxt})
        .then((res)=>console.info(res))
        .catch((err)=>{console.warn(err);})
    }

    const handlSupr = (supprMessage) =>{
        supprMessage.preventDefault();
        return axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/salon/${salonContext}/user/${userContext.idUser}/message`, {messages : envoieTxt})
        .then((res)=>console.info(res))
        .catch((err)=>{console.warn(err);})
    }




    useEffect (()=>{
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/salon/${salonContext}/message`)
        .then((res) => {setData(res.data)
        
        })
        
       
        
    },[handleSubmit])



   
    return (
        <div className='h-screen bg-gray-800 pb-28'>
            
            <Navbar/>
                <div className='h-[calc(100%-56px)] hide-scrollbar overflow-y-scroll '>
                    <div className='flex flex-col gap-32 mt-12 w-full items-center '>

                    {data.map((e)=>{const utilisateur = e.user_id === userContext.idUser; return(utilisateur ? 
                        <div className=' flex flex-col gap-32 mt-24 w-full items-center '>
                            <AffichageMessageReverse handlSupr={handlSupr}txt={e.messages} pseudo={e.pseudo}/>
                        </div> :
                        <div className=' flex flex-col gap-32 mt-12 w-full items-center  '> 
                            <AffichageMessage txt={e.messages} pseudo={e.pseudo}/>
                        </div>
                    )
                    
                    })}
                    </div>
            
                </div>
            <EnvoieDeMessage handleSubmit={handleSubmit} setEnvoieTxt={setEnvoieTxt} />
        </div>
    );
};

export default Message;