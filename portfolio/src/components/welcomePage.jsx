import React from 'react';
import './welcome.css'
import { useNavigate } from 'react-router-dom';
import Header from '../containers/header';
import coder from '../assets/coder.png'


const WelcomePage = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/about');
    
    return (
        <>
        <div className='background'>
        <Header />
        
        <div className="Spacing">
            <div className='Split'>
            <div className='Taylor'>Hello, I'm Taylor Reichner<br/><span className="fullstack">Full-Stack Software Engineer</span></div>
            <div className='Welcome'>Creating practical projects that run the world effeciently</div>
            <div className='buttons'>
            <button class="button-78" >Contact</button>
            <button class="button-78" onClick={handleClick}>Portfolio</button>
            </div>
            </div>
            
                <img className='coder' src={coder} alt="coder" />
            
        </div>
        </div>
        
        </>
    )
}

export default WelcomePage