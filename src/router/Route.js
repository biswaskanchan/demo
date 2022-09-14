import React, { Fragment } from "react";
import {Routes, Route,} from "react-router-dom";
import Home from "../pages/Home";
import DiscountPage from "../pages/DiscountPage";
import Signup from "../component/sign up/Signup";

function RoutePage (){
    return <Fragment>
        
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/signup" element={<Signup/>} />
                <Route  path="/*" element={<DiscountPage/>} />
            </Routes>
        
        
    </Fragment>
        

    
}
export default RoutePage