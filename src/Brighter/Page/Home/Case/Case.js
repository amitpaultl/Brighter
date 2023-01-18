import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import imageCase from '../../../Image/unsplash_kbTp7dBzHyY.png'
// import required modules
import { Navigation } from "swiper";
import './Case.css'
const Case = () => {
    return (
        <div>
            <div className="case-area">
                <div className="container">
                    <div className="title-area">
                        <h2>Case Study</h2>
                    </div>
                    <div className="case-slider">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={true}

                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="case-info">
                                    <img src={imageCase} alt="" />
                                    <div className="case-text">
                                        <div className="switching">
                                            <div className="abode-top">
                                                <p>DISASTER MITIGATION</p>
                                                <h4>Switching to Clean Energy & <br /> Preserving our Abode, Earth.</h4>
                                            </div>
                                            <button className="case-btu">Donate</button>
                                        </div>
                                        <p className="case-dailies">Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.</p>
                                        <div className="progress-text">
                                            <span>67%</span>
                                        </div>
                                        <div className="million">
                                            <p>Raised : $10.11 million</p>
                                            <p>Goal: $23 million</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="case-info">
                                    <img src={imageCase} alt="" />
                                    <div className="case-text">
                                        <div className="switching">
                                            <div className="abode-top">
                                                <p>DISASTER MITIGATION</p>
                                                <h4>Switching to Clean Energy & <br /> Preserving our Abode, Earth.</h4>
                                            </div>
                                            <button className="case-btu">Donate</button>
                                        </div>
                                        <p  className="case-dailies">Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.</p>
                                        <div className="progress-text">
                                            <span>67%</span>
                                        </div>
                                        <div className="million">
                                            <p>Raised : $10.11 million</p>
                                            <p>Goal: $23 million</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="case-info">
                                    <img src={imageCase} alt="" />
                                    <div className="case-text">
                                        <div className="switching">
                                            <div className="abode-top">
                                                <p>DISASTER MITIGATION</p>
                                                <h4>Switching to Clean Energy & <br />
                                                    Preserving our Abode, Earth.</h4>
                                            </div>
                                            <button className="case-btu">Donate</button>
                                        </div>
                                        <p  className="case-dailies">Planning and zoning are examples of mitigation actions, as are floodplain protection, property acquisition and relocation, and public outreach projects. Installing disaster warning systems, purchasing radio communications equipment, and conducting emergency response training are examples of preparedness actions. Disaster mitigation is at the heart of emergency management.</p>
                                        <div className="progress-text">
                                            <span>67%</span>
                                            
                                        </div>
                                        <div className="million">
                                            <p>Raised : $10.11 million</p>
                                            <p>Goal: $23 million</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;