import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ListaProdutos from "./components/ListaProdutos";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="produtos/:lojaId" element={<ListaProdutos/>} />
            </Routes>
        </BrowserRouter>
    )
}
