import React from 'react';
import { buildStyles, CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Progessbar.css'
import progessimg from '../../../Image/Vector (1).png'
import progessimg1 from '../../../Image/Group (2).png'
import progessimg2 from '../../../Image/Group (3).png'
import progessimg3 from '../../../Image/Group (4).png'

const Progessbar = () => {
    const value = 0.66;
    const value1 = 0.77;
    const value3 = 0.33;
    return (
        <div>
            <div className="progressbar">
                <div className="container">
                    <div className="row">
                        <div className="single-progressbar">
                            <div className="progressbar-circle">

                                <CircularProgressbarWithChildren

                                    value={value}
                                    maxValue={1}
                                    strokeWidth={3}
                                    styles={buildStyles({
                                        trailColor: '#A3DA8D',
                                        pathColor: '#146356',
                                    })}

                                >
                                    <img src={progessimg} alt="" />

                                </CircularProgressbarWithChildren>
                            </div>
                            <h2>5,898</h2>
                            <p>Trees Planted</p>
                        </div>
                        <div className="single-progressbar">
                            <div className="progressbar-circle">
                                <CircularProgressbarWithChildren
                                    value={value1}
                                    maxValue={1}
                                    strokeWidth={3}
                                    styles={buildStyles({
                                        trailColor: '#A3DA8D',
                                        pathColor: '#146356',
                                    })}
                                >
                                    <img src={progessimg1} alt="" />

                                </CircularProgressbarWithChildren>
                            </div>
                            <h2>1994</h2>
                            <p>Changing Life Since</p>
                        </div>
                        <div className="single-progressbar">
                            <div className="progressbar-circle">
                                <CircularProgressbarWithChildren
                                    value={value3}
                                    maxValue={1}
                                    strokeWidth={3}
                                    styles={buildStyles({
                                        trailColor: '#A3DA8D',
                                        pathColor: '#146356',
                                    })}
                                >
                                    <img src={progessimg2} alt="" />

                                </CircularProgressbarWithChildren>
                            </div>
                            <h2>21+</h2>
                            <p>Our Partners</p>
                        </div>
                        <div className="single-progressbar">
                            <div className="progressbar-circle">
                                <CircularProgressbarWithChildren
                                    value={value}
                                    maxValue={1}
                                    strokeWidth={3}
                                    styles={buildStyles({
                                        trailColor: '#A3DA8D',
                                        pathColor: '#146356',
                                    })}>
                                    <img src={progessimg3} alt="" />

                                </CircularProgressbarWithChildren>
                            </div>
                            <h2>385</h2>
                            <p>Volunteers</p>
                        </div>








                    </div>
                </div>
            </div>

        </div>
    );
};

export default Progessbar;