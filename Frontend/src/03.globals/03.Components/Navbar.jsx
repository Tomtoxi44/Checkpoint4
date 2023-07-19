import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='flex justify-center top-0'>
        <div className='w-3/4 h-14 bg-blue-800 rounded-b-lg flex justify-center items-center shadow-lg'>
            <div className='flex justify-around w-full'>
            <NavLink to="/salon">
            <button className='bg-white rounded-lg w-[150px] shadow-lg font-texts'>Les Salons</button></NavLink>
            <button className='bg-red-400 rounded-lg w-[150px] shadow-lg font-texts'>Déconnexion</button></div>
            
        </div></div>
    );
};

export default Navbar;