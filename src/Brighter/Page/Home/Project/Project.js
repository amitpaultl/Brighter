import React from 'react';
import './Project.css'
import project from '../../../Image/Group.png'
import project2 from '../../../Image/growth 1.png'
import project3 from '../../../Image/eco-light 1.png'
import project4 from '../../../Image/family 1.png'
import project5 from '../../../Image/gas-mask 1.png'
import project6 from '../../../Image/radiation 1.png'
const Project = () => {
    return (
        <div>
            <div className="project-area">
                <div className="container">
                    <h2>Our Continued Project <br /> Assistance Programs</h2>
                    <div className="row">
                        <div className="col-project">
                            <img src={project} alt="" />
                            <h5>Reduce Global Warming Now</h5>
                            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
                        </div>
                        <div className="col-project">
                            <img src={project2} alt="" />
                            <h5>Reduce Global Warming Now</h5>
                            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
                        </div>
                        <div className="col-project">
                            <img src={project3} alt="" />
                            <h5>Reduce Global Warming Now</h5>
                            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
                        </div>
                        <div className="col-project">
                            <img src={project4} alt="" />
                            <h5>Reduce Global Warming Now</h5>
                            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
                        </div>
                        <div className="col-project">
                            <img src={project5} alt="" />
                            <h5>Reduce Global Warming Now</h5>
                            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
                        </div>
                        <div className="col-project">
                            <img src={project6} alt="" />
                            <h5>Reduce Global Warming Now</h5>
                            <p>The warming of the atmosphere has an impact on weather patterns, causing more frequent and severe droughts and storms worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;