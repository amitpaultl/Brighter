import React from 'react';
import Common from '../../Common/Common';
import Action from './Action/Action';
import Benefactors from './Benefactors/Benefactors';
import Case from './Case/Case';
import Environment from './Environment/Environment';
import Fetcher from './Fetcher/Fetcher';
import Hero from './Hero/Hero';
import Progessbar from './Progessbar/Progessbar';
import Project from './Project/Project';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <div>
                <Hero></Hero>
                <Project></Project>
                <Progessbar></Progessbar>
                 <Fetcher></Fetcher>
                <Action></Action>
                <Benefactors></Benefactors>
                <Environment></Environment>
                {/* <Case></Case> */}
                {/* <Testimonials></Testimonials> */}
               <Common></Common>
            </div>
        </div>
    );
};

export default Home;