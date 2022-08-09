import React from "react";
import { Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
        </Routes>
    )
}

export default Router;