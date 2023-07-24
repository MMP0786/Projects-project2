import React from "react";
import Home from "./components/Home"
import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";


function App() {
  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
    </Routes>
    <Toaster/>
   </BrowserRouter>
  );
}

export default App;
