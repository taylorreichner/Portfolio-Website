import React from 'react';
import './header.css'




const Header = () => {

    return (
        <div className='Nav'>
            
            <button class="button-48"><span class="text">Projects</span></button>
            <button class="button-48"><span class="text">Contact</span></button>
            <button class="button-48"><span class="text">Personal</span></button>
            <button class="button-48"><span class="text">About Me</span></button>
      
            
            <div>Linked IN</div>
            <div>Git Hub</div>
        </div>
        )
}

export default Header;