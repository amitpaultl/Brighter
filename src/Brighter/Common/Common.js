import React from 'react';
import './Common.css'
import common from '../Image/Polygon 1.png'
import commonbg from '../Image/unsplash.png'
const Common = () => {
    return (
        <div>
            <div className="common-area">
                <div className="container">
                    <div className="row">
                        <div className="common-2">
                            <h3>Sign Up For Environment News & Alerts</h3>
                            <p>We are bringing worldwide concerns and solutions fresh to your emails. As opposed to what others do, we make our contributions timely.</p>
                            <input type="text" placeholder='Enter your email address' />
                            <button type='submit'>Subscribe</button>
                        </div>
                        <div className="common-3">
                            <img src={commonbg} alt="" />
                            <div className="image">
                                <img src={common} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Common;