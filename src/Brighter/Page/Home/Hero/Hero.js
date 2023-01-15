import React from 'react';
import './hero.css'

const Hero = () => {
    return (
        <div>
            <div className="hero-area">
                <div className="container">
                    <div className="hero-text">
                        <h4>Help <span>Today</span> for</h4>
                        <h2>Brighter <span>Tomorrow</span></h2>
                        <p>Leaders across the country are tackling the most challenging and pressing issues of our time. Earth Let us all join to deal with unprecedented threats to Earth's life.</p>
                        <div className="hero-btu">
                            <button className='bg-white'>Donate Now</button>
                            <button>Contact Us </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;