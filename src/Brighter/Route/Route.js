import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cause from '../Page/Cause/Cause';
import Home from '../Page/Home/Home';
import Root from '../Root/Root';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/cause',
                element:<Cause></Cause>
            },
        ]
    }
])

export default Route;