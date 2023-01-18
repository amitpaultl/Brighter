import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './Meet.css'

import siider1 from '../../../Image/image 83.png'
import siider2 from '../../../Image/image 76.png'
import siider3 from '../../../Image/image 81.png'

const Meet = () => {
    return (
        <div>
            <div className="meet-area">
                <div className="meet-text">
                    <h2>Meet our Helping Hands</h2>
                    <p>They do not behave like waves, they do not behave like particles, they do not behave like clouds....</p>
                </div>
                <div className="meet-slider">

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}

                      
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="single-meet-slider">
                                
                                <img src={siider1} alt="" />
                                <h4>Crystal Logan</h4>
                                <p>Project Management Specialist</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-meet-slider">

                            <img src={siider2} alt="" />

                            <h4>Crystal Logan</h4>
                            <p>Project Management Specialist</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-meet-slider">

                            <img src={siider3} alt="" />
                            <h4>Crystal Logan</h4>
                            <p>Project Management Specialist</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-meet-slider">
                                
                                <img src={siider2} alt="" />

                                <h4>Crystal Logan</h4>
                                <p>Project Management Specialist</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Meet;