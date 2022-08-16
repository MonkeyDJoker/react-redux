import React from "react";
import { Navigate } from "react-router-dom"
import Home from "../Compoent/Home";
import About from "../Compoent/About";

const rootRouter = [
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/',
        element:<Navigate to='/' />
    }
]

export default rootRouter