import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Tab.css'
import image1 from '../../../Image/unsplas1.png'
import image2 from '../../../Image/unsplas2.png'
import image3 from '../../../Image/unsplas3.png'

const Tabbs = () => {
    return (
        <div>
            <div className="tab-area">
                <div className="container">
                    <div className="title-area">
                        <p>OUR MISSION</p>
                        <h2>Our Green Wonders</h2>
                    </div>
                    <div className="row">
                        <div className="tab-part">
                            <Tabs>
                                <TabList>
                                    <Tab>All</Tab>
                                    <Tab>Pollution</Tab>
                                    <Tab>Waste Disposal</Tab>
                                    <Tab>Population</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="tab-text-area">
                                        <div className="active">

                                            <div className="single-tab-text">
                                                <img src={image1} alt="" />
                                                <button>Donate</button>

                                                <div className="tab-text-only">

                                                    <p className='tab-sold'>Pollution</p>
                                                    <h3>Carbon Monoxide Released Indicates Massive Fossil Fuel Burning.</h3>
                                                    <p className='tab-vitals'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque morbi posuere tincidunt nunc. </p>
                                                    <div className="progress-text fetcher">
                                                        <span>67%</span>
                                                    </div>
                                                    <div className="million">
                                                        <p>Raised : $10.11 million</p>
                                                        <p>Goal: $23 million</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="active">

                                            <div className="single-tab-text ">
                                                <img src={image2} alt="" />
                                                <button>Donate</button>
                                                <div className="tab-text-only">

                                                    <p className='tab-sold'>Pollution</p>
                                                    <h3>Carbon Monoxide Released Indicates Massive Fossil Fuel Burning.</h3>
                                                    <p className='tab-vitals'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque morbi posuere tincidunt nunc. </p>
                                                    <div className="progress-text fetcher">
                                                        <span>67%</span>
                                                    </div>
                                                    <div className="million">
                                                        <p>Raised : $10.11 million</p>
                                                        <p>Goal: $23 million</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="active">

                                        <div className="single-tab-text">
                                            <img src={image3} alt="" />
                                            <button>Donate</button>

                                            <div className="tab-text-only">

                                                <p className='tab-sold'>Pollution</p>
                                                <h3>Carbon Monoxide Released Indicates Massive Fossil Fuel Burning.</h3>
                                                <p className='tab-vitals'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque morbi posuere tincidunt nunc. </p>
                                                <div className="progress-text fetcher">
                                                    <span>67%</span>
                                                </div>
                                                <div className="million">
                                                    <p>Raised : $10.11 million</p>
                                                    <p>Goal: $23 million</p>
                                                </div>
                                            </div>

                                        </div>
                                        </div>
                                        
                                    </div>
                                    <div className="interested-area">
                                            <button>Get Started</button>
                                        </div>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Tabbs;