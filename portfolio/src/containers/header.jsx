import React from 'react';
import './header.css'
import { useNavigate } from 'react-router-dom';




const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/about');

    return (
        <div className='Nav'>
            
            <button class="button-48" onClick={handleClick}><span class="text">About</span></button>
            <button class="button-48"><span class="text">Projects</span></button>
            <button class="button-48"><span class="text">Personal</span></button>
            <button class="button-48"><span class="text">Contact</span></button>
      
            <button class="button-6">Linked in</button>
            <button class="button-6">github</button>
            
        </div>
        )
}

export default Header;