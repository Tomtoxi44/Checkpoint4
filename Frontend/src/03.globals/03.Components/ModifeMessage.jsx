import React from 'react';

const ModifeMessage = ({handleModif,}) => {






    return (
        <div className='h-full w-full flex justify-center items-center'>
                <form action="" onSubmit={handleModif} className='flex flex-col justify-center items-center rounded-lg w-1/4 h-1/      4 bg-gray-500 gap-5'>            
                <p>Nom du salon</p>
                <input required value={"truc"} onChange={(event) => setNameSalon(event.target.value)} className=' pl-5 rounded-full shadow-md shadow-black' type="text" />
                <button onSubmit={handleModif} type='submit' className='bg-blue-800 rounded-lg w-[150px] shadow-md shadow-black  text-white' >Créer</button>
            </form>
        </div>
    );
};

export default ModifeMessage;