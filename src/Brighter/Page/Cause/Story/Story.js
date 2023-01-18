import React from 'react';
import './Story.css'
import storyimg from '../../../Image/Screenshot.png'
import { BiCube } from "react-icons/bi";
const Story = () => {
    return (
        <div>
            <div className="story-area">
                <div className="container">
                    <div className="row">
                        <div className="story-text">
                            <h5>WHO WE ARE</h5>
                            <h2>Our Story</h2>
                            <p>Realizing the risk that environmental threats pose to humankind and the planet itself, we took this step to save ourselves and the planet. We reached our green goals by starting with a minimum number of volunteers, and now we are a massive family of volunteers. </p>
                            <ul>
                                <li><BiCube></BiCube> Identifying all pertinent issues and factors of issues.</li>
                                <li><BiCube></BiCube>Facilitating meaningful public participation and review.</li>
                                <li><BiCube></BiCube>Choosing the EIA's appropriate time and space boundaries</li>
                            </ul>
                        </div>
                        <div className="story-img">
                            <img src={storyimg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;