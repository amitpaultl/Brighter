import React from 'react';
import Common from '../../Common/Common';
import Action from './Action/Action';
import Benefactors from './Benefactors/Benefactors';
import Hero from './Hero/Hero';
import Project from './Project/Project';

const Home = () => {
    return (
        <div>
            <div>
                <Hero></Hero>
                <Project></Project>
                <Action></Action>
                <Benefactors></Benefactors>
                <Common></Common>
            </div>
        </div>
    );
};

export default Home;