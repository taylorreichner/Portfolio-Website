import React from 'react';
import './header.css'
import { useNavigate } from 'react-router-dom';
import linkedin from '../assets/linkedin.png'



const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/about');

    return (
        <div className='Nav'>
            
            <button class="button-48" onClick={handleClick}><span class="text">About</span></button>
            <button class="button-48"><span class="text">Projects</span></button>
            <button class="button-48"><span class="text">Personal</span></button>
            <button class="button-48"><span class="text">Contact</span></button>
      
            <button class="button-6"><img src={linkedin} alt="linkedin"/></button>
            <div>Linked IN</div>
            <div>Git Hub</div>
        </div>
        )
}

export default Header;