import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Testimonials.css'
import { Pagination } from "swiper";
import cord from '../../../Image/“.png'
import img from '../../../Image/Group 17.png'
const Testimonials = () => {
    return (
        <div className="container">

            <div  className="testimonials">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slider-testimonials">
                            <img src={cord} alt="" />
                            <p>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                            <div className="user-info">
                                <img src={img} alt="" />
                                <div className="user-text">
                                    <h5>Goldie D. Taylor</h5>
                                    <p>Investor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-testimonials">
                            <img src={cord} alt="" />
                            <p>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                            <div className="user-info">
                                <img src={img} alt="" />
                                <div className="user-text">
                                    <h5>Goldie D. Taylor</h5>
                                    <p>Investor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-testimonials">
                            <img src={cord} alt="" />
                            <p>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                            <div className="user-info">
                                <img src={img} alt="" />
                                <div className="user-text">
                                    <h5>Goldie D. Taylor</h5>
                                    <p>Investor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-testimonials">
                            <img src={cord} alt="" />
                            <p>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                            <div className="user-info">
                                <img src={img} alt="" />
                                <div className="user-text">
                                    <h5>Goldie D. Taylor</h5>
                                    <p>Investor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-testimonials">
                            <img src={cord} alt="" />
                            <p>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                            <div className="user-info">
                                <img src={img} alt="" />
                                <div className="user-text">
                                    <h5>Goldie D. Taylor</h5>
                                    <p>Investor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-testimonials">
                            <img src={cord} alt="" />
                            <p>Human degradation of nature is the greatest challenge of the twenty-first century, yet it barely registers as a political issue. Environment solutions often create jobs & economic opportunities.</p>
                            <div className="user-info">
                                <img src={img} alt="" />
                                <div className="user-text">
                                    <h5>Goldie D. Taylor</h5>
                                    <p>Investor</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;