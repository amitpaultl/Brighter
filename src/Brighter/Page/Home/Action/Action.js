import React from 'react';
import './Action.css'
import actionImg from '../../../Image/Mask Group.png'
const Action = () => {
    return (
        <div>
            <div className="action-area">
                <img src={actionImg} className='action-img' alt="" />
                <div className="action-text">
                    <h3>Take Action. Let’s Get In Touch</h3>
                    <p>Given the limited resources, the issues we address, from hunger & clean drinking water to disease prevention and homelessness, can be taxing.</p>
                    <button className='action-btu'>Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default Action;