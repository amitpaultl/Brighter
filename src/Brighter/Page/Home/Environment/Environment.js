import React from 'react';
import img from '../../../Image/Mask Group (1).png'
import img2 from '../../../Image/Vector.png'
import img3 from '../../../Image/Group (1).png'
import img4 from '../../../Image/Mask Group (5).png'
import img5 from '../../../Image/Mask Group (2).png'
import img6 from '../../../Image/Mask Group (3).png'
import img7 from '../../../Image/Mask Group (4).png'
import img8 from '../../../Image/Mask Group (6).png'
import './Environment.css'

const Environment = () => {
    return (
        <div>
            <div className="environment-area">
                <div className="container">
                    <div className="row">
                        <div className="environment">
                            <h2>The Environment is All We Have In Common</h2>
                            <p>Turning the ship around takes a lot of willpower and ingenuity.</p>
                        </div>
                        <div className="environment-img">
                            <img src={img} className='pd-r' alt="" />
                            <img src={img2} className='pd-c' alt="" />
                            <img src={img3} className='pd-l' alt="" />
                            <img src={img4} className='pd-r' alt="" />
                            <span className='border'>
                                <span className='border-top'></span>
                                <img src={img5} className='border pd-c' alt="" />
                                <span className='border-bottom'></span>

                            </span>
                            <img src={img6} className='pd-l' alt="" />
                            <img src={img7} className='pd-r' alt="" />
                            <img src={img4} className='pd-c' alt="" />
                            <img src={img8} className='pd-l' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Environment;