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
        .then((res)=>console.info(res),handleScroll)
        .catch((err)=>{console.warn(err);}),
        setEnvoieTxt("")
    }

    const handlSupr = (supprMessage) =>{
        return axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}/salon/message/${supprMessage}`)
        .then(()=>handleScroll)
        .catch((err)=>{console.warn(err);})
        
    }


    const handleScroll = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }

    useEffect (()=>{
        axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/salon/${salonContext}/message`)
        .then((res) => {setData(res.data)
        
        }),
        handleScroll
        
       
        
    },[handleSubmit,handlSupr])


   
    return (
        <div className='h-screen bg-gray-800 pb-28'>
            
            <Navbar/>
                <div className='h-[calc(100%-56px)] hide-scrollbar overflow-y-scroll '>
                    <div className='flex flex-col gap-32 mt-12 w-full items-center '>

                    {data.map((e)=>{const utilisateur = e.user_id === userContext.idUser; return(utilisateur ? 
                        <div className=' flex flex-col gap-32 mt-24 w-full items-center '>
                            <AffichageMessageReverse supr={e.id} handlSupr={handlSupr}txt={e.messages} pseudo={e.pseudo}/>
                        </div> :
                        <div className=' flex flex-col gap-32 mt-12 w-full items-center  '> 
                            <AffichageMessage  txt={e.messages} pseudo={e.pseudo}/>
                        </div>
                    )
                    
                    })}
                    </div>
            
                </div>
            <EnvoieDeMessage envoieTxt={envoieTxt} handleSubmit={handleSubmit} setEnvoieTxt={setEnvoieTxt} />
        </div>
    );
};

export default Message;