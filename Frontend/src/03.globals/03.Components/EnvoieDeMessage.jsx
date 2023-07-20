import React from 'react';

const EnvoieDeMessage = ({handleSubmit,setEnvoieTxt}) => {

    





    return (
    <form action="" onSubmit={handleSubmit}>
        <div className='flex justify-center bottom-0 w-full fixed'>
             <div className='w-3/4 bg-gray-500 h-24 flex items-center justify-center gap-10 shadow-md shadow-black  rounded-t-lg'>

               

                    <input required type="text" onChange={(event) => setEnvoieTxt(event.target.value)} className=' w-1/2 h-10 rounded-full p-5 focus:ring-blue-700 shadow-md shadow-black ' />
                     <button onSubmit={handleSubmit} type='submit' className='bg-blue-600'>envoie</button>
                
            </div>
            
        </div>
    </form>
    );
};

export default EnvoieDeMessage;