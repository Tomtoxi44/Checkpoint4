import React from 'react';

const AffichageMessage = ({txt}) => {
    console.log(txt);
    return (
        <div className='bg-white'>
            <p>{txt}</p>
            
        </div>
    );
};

export default AffichageMessage;