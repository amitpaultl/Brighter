import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
            }
        ]
    }
])

export default Route;