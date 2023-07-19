import React from 'react';

const AffichageMessage = ({txt,pseudo}) => {
    const logo = pseudo[0]+pseudo[1]
    

    return (
        <div className='bg-white rounded-lg w-3/4 min-h-[50px] pl-24 flex flex-col justify-center relative shadow-md shadow-black '>
            <p className='border border-l-0 border-r-0 border-b-black w-1/2'>{pseudo}:</p>
            <br />
            <div className='h-[50px] w-[50px] rounded-full bg-custom-gray absolute flex justify-center items-center left-0 -translate-x-5 -translate-y-5 '><p> {logo}</p></div>
            <p className='mb-5'>{txt}</p>
            
        </div>
    );
};

export default AffichageMessage;