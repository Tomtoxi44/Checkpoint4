import React from 'react';

const EnvoieDeMessage = () => {
    return (
        <div className='flex justify-center bottom-0 w-full fixed'>
            <div className='w-3/4 bg-custom-gray h-24 flex items-center justify-center gap-10 shadow-lg rounded-t-lg'>
                <input type="text" className=' w-1/2 h-10 rounded-full p-5 focus:ring-blue-700 shadow-lg' /><button className='bg-blue-600'>envoie</button>
            </div>
            
        </div>
    );
};

export default EnvoieDeMessage;