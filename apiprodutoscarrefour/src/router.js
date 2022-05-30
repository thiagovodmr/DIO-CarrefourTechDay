import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
