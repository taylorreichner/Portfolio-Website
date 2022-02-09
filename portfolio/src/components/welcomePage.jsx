import React from 'react';
import './welcome.css'
import { useNavigate } from 'react-router-dom';
import Header from '../containers/header';


const WelcomePage = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/about');
    
    return (
        <>
        <div className='background'>
        <Header />
        
        <div className="Spacing">
            <div className='Split'>
            <div className='Taylor'>Hello, I'm Taylor Reichner</div>
            <div className='Welcome'>I'm a full-stack web developer. I enjoy creating practical projects that help the world run effeciently.</div>
            <div className='buttons'>
            <button class="button-78" >Contact</button>
            <button class="button-78" onClick={handleClick}>Portfolio</button>
            </div>
            </div>
            <div>pic</div>
        </div>
        </div>
        
        </>
    )
}

export default WelcomePage