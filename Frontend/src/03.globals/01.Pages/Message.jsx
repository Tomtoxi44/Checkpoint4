import React,{useEffect,useState,useContext} from 'react';
import Navbar from '../03.Components/Navbar';
import axios from "axios";
import AffichageMessage from '../03.Components/AffichageMessage';
import EnvoieDeMessage from '../03.Components/EnvoieDeMessage';

const Message = () => {

    const [data,setData] = useState([])

console.log(data);

useEffect (()=>{
    axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/salon/1/message`)
    .then((res) => {
        setData(res.data)
    })
},[])


    return (
        <div className='h-screen bg-custom-body pb-28'>
            
            <Navbar/>
                <div className='h-[calc(100%-56px)] hide-scrollbar overflow-y-scroll '>
                    <div className='flex flex-col gap-32 mt-24 w-full items-center '>
                    {data.map((e)=>{ return(<AffichageMessage txt={e.messages} pseudo={e.pseudo}/>)
                    
                    })}
                    </div>
            
                </div>
            <EnvoieDeMessage/>
        </div>
    );
};

export default Message;