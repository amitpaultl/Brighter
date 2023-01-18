import React from 'react';
import circle1 from '../../../Image/Vector (1).png'
import circle2 from '../../../Image/Group (2).png'
import circle3 from '../../../Image/Group (3).png'
import circle4 from '../../../Image/Group (4).png'
import './Compulsive.css'

const Compulsive = () => {
    return (
        <div>
            <div className="compulsive-area">
                <div className="container">
                    <div className="row">
                        <div className="compulsive-text">
                            <h2>Some Compulsive Facts</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum neque ligula elementum convallis cursus. Nunc dignissim mi pellentesque mattis posuere faucibus. </p>
                        </div>
                        <div className="compulsive-circle">
                            <div className="single-circle">
                                <img src={circle1} alt="" />
                                <h2>5,898</h2>
                                <p>Trees Planted</p>
                            </div>
                            <div className="single-circle">
                                <img src={circle2} alt="" />
                                <h2>21+</h2>
                                <p>OUR PARTNERS</p>
                            </div>
                            <div className="single-circle">
                                <img src={circle3} alt="" />
                                <h2>1994</h2>
                                <p>Changing Life Since</p>
                            </div>
                            <div className="single-circle">
                                <img src={circle4} alt="" />
                                <h2>385</h2>
                                <p>VOLUNTEERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compulsive;