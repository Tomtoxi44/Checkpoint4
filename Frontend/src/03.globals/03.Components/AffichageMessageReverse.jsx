import React from 'react';

const AffichageMessageReverse = ({txt,pseudo,handlSupr}) => {
    const logo = pseudo[0]+pseudo[1]
    

    return (
        
        <div className='bg-white rounded-lg w-3/4 flex-wrap pl-24 flex flex-col  justify-center relative shadow-md shadow-black '>
             <div className='h-[50px] w-[50px] rounded-full bg-custom-gray absolute flex justify-center items-center m-[100%] left-0 -translate-x-5 -translate-y-5 '>
                
                <p> {logo}</p></div><p className='border border-l-0 border-r-0 border-t-0 border-b-black w-1/2'>{pseudo}:</p>
            
            
                <br />
           
            <button className='h-[50px] w-[150px] rounded-lg bg-black text-white absolute m-[100%] flex justify-center items-center left-0 -translate-x-52 ' onClick={handlSupr}>supprimer</button>
            <p className=' w-3/4 break-words mb-5 '>{txt}</p>
            
        </div>
    );
};

export default AffichageMessageReverse;