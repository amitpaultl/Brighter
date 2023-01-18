import React from 'react';
import './Fetcher.css'
import fetcherImg from '../../../Image/test.png'
import fetcherImg2 from '../../../Image/test1.png'
import fetcherImg3 from '../../../Image/test3.png'

const Fetcher = () => {
    return (
        <div>
            <div className="fetcher-area">
                <div className="container">
                    <div className="row">
                        <div className="fetcher-single">
                            <img src={fetcherImg} alt="" />
                            <div className="fetcher-text">
                                <p className='short'>Air Pollution</p>
                                <h4>What’s currently Testimonials happening in Air Pollution all around the world? AQI region-wise.</h4>
                            </div>

                        </div>
                        <div className="fetcher-single">
                            <img src={fetcherImg2} alt="" />

                            <div className="fetcher-text">
                                <p className='short'>Air Pollution</p>
                                <h4>Think up spending hours every day looking for drinking water.</h4>
                                <p className='short-text'>Collaborating with local partners to implement community-owned clean drinking water projects in remote communities.</p>
                                <div className="progress-text fetcher">
                                    <span>67%</span>
                                </div>
                                <div className="million">
                                    <p>Raised : $10.11 million</p>
                                    <p>Goal: $23 million</p>
                                </div>
                                <div className="fetcher-btu">

                                    <button className="case-btu fetcher">Donate</button>
                                </div>
                            </div>

                        </div>
                        <div className="fetcher-single">
                            <img src={fetcherImg3} alt="" />

                            <div className="fetcher-text">
                                <p className='short'>Air Pollution</p>
                                <h4>What’s currently Testimonials happening in Air Pollution all around the world? AQI region-wise.</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetcher;