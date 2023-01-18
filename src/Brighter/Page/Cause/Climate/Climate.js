import React from 'react';
import image1 from '../../../Image/Overlay.png'
import icon from '../../../Image/Polygon 1.png'
import bg1 from '../../../Image/Ellipse 131.png'
import bg2 from '../../../Image/image 90 (1).png'
import bg3 from '../../../Image/Vector (2).png'
import './Climate.css'
import { Link } from 'react-router-dom';
const Climate = () => {
    return (
        <div>
            <div className="climate-area">
                
                    <div className="">
                        <div className="row">
                            <div className="climate-img">
                                <img src={image1} alt="" />
                                <Link><img src={icon} alt="" /></Link>
                            </div>
                            <div className="climate-text">
                                <p className='climate-sold'>HOW WE WORK</p>
                                <h3>Sustainability & Climate Change Concerns</h3>
                                <p>Scoping identifies the issues that will be most important during the Environment Impact Assessment and eliminates those that will be of little concern.</p>
                                <button className='climate-btu'>Get Started</button>
                            </div>
                        </div>
                    </div>
                <div className="img-clim">

                    <img src={bg1} className='bg1' alt="" />
                    <img src={bg2} className='bg2' alt="" />
                    <img src={bg3} className='bg3' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Climate;