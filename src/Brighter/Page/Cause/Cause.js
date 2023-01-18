import React from 'react';
import Common from '../../Common/Common';
import Around from './Around/Around';
import Climate from './Climate/Climate';
import Compulsive from './Compulsive/Compulsive';
import Hero from './Hero/Hero';
import Interested from './Interested/Interested';
import Meet from './Meet/Meet';
import Story from './Story/Story';
import Tabbs from './Tab/Tab';

const Cause = () => {
    return (
        <div>
            <Hero></Hero>
            <Story></Story>
            <Climate></Climate>
            <Tabbs></Tabbs>
            <Meet></Meet>
            <Interested></Interested>
            <Compulsive></Compulsive>
            <Around></Around>
            <Common></Common>
        </div>
    );
};

export default Cause;