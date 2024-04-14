import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/welcome";
import Homepage from "../pages/homepage";


const router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/homepage" element={<Homepage/>} />
            </Routes>
        </Router>
    );
}

export default router;