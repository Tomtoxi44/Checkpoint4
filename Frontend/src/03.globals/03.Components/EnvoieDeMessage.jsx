import axios from 'axios';
import React,{useState} from 'react';

const EnvoieDeMessage = () => {

    const [envoieTxt,setEnvoieTxt] = useState("")

    const handleSubmit = (envoieMessage) => {
        envoieMessage.preventDefault();
        return axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/salon/1/user/1/message`, {messages : envoieTxt})
        .then((res)=>console.info(res))
        .catch((err)=>{console.warn(err);})
    }



    return (
    <form action="" onSubmit={handleSubmit}>
        <div className='flex justify-center bottom-0 w-full fixed'>
             <div className='w-3/4 bg-custom-gray h-24 flex items-center justify-center gap-10 shadow-lg rounded-t-lg'>

               

                    <input type="text" onChange={(event) => setEnvoieTxt(event.target.value)} className=' w-1/2 h-10 rounded-full p-5 focus:ring-blue-700 shadow-lg' />
                     <button onSubmit={handleSubmit} type='submit' className='bg-blue-600'>envoie</button>
                
            </div>
            
        </div>
    </form>
    );
};

export default EnvoieDeMessage;