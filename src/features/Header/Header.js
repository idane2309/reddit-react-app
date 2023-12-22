import React, {useState, useEffect} from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { FaReddit } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <FaReddit className="logo-icon"/>
                <p>
                     Reddit <span> Minimal </span>
                </p>
            </div>
        </header>
    )
}

export default Header;