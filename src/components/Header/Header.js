import React from 'react';
import { Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between bold'>
            <div className='hidden md:block'>
                <Link to="/" className='font-bold text-2xl'>crypto-market</Link>
            </div>
            <div className='flex gap-4 font-bold text-xl'>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/coins">Coins</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            </div>
        </div>
    );
};

export default Header;