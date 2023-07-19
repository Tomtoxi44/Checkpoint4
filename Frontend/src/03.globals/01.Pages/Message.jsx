import React,{useEffect,useState,useContext} from 'react';
import Navbar from '../03.Components/Navbar';
import axios from "axios";
import AffichageMessage from '../04.Context/AffichageMessage';


const Message = () => {

    const [data,setData] = useState([])

    console.log(data);

useEffect (()=>{
    axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/salon/1/message`)
    .then((res) => {
        setData(res?.data)
    })
},[])


    return (
        <div className='h-screen bg-gray-800 overflow-y-hidden'>
            <Navbar/>
            <AffichageMessage txt={data.messages}/>
        </div>
    );
};

export default Message;