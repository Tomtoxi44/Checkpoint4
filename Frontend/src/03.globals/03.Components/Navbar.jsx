import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='flex justify-center top-0'>
        <div className='w-3/4 h-14 bg-gray-500 rounded-b-lg flex justify-center items-center shadow-md shadow-black'>
            <div className='flex justify-around w-full'>
            <NavLink to="/salon">
            <button className='bg-blue-800 text-white rounded-lg w-[150px] shadow-md shadow-black font-texts'>Les Salons</button></NavLink>
            <NavLink to="/">
            <button className='bg-black text-white rounded-lg w-[150px] shadow-md shadow-black font-texts'>Déconnexion</button></NavLink></div>
            
        </div></div>
    );
};

export default Navbar;