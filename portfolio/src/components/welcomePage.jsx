import React from 'react';
import './welcome.css'
import { useNavigate } from 'react-router-dom';


const WelcomePage = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/about');
    
    return (
        <>
        <div className="Spacing">
            <div>Hello, I'm Taylor Reichner</div>
            <div>I'm a full-stack web developer</div>
            <button onClick={handleClick}>Click </button>
        </div>
        </>
    )
}

export default WelcomePage