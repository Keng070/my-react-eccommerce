import React from "react";
import { Route, Routes } from "react-router-dom";
import AmountTest from "./pages/AmountTest";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import SideBarTest from "./pages/SideBarTest";
import UpdateTest from "./pages/UpdateTest";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<SideBarTest />} />
        <Route path="/amount" element={<AmountTest />} />
        <Route path="/update" element={<UpdateTest />} />
      </Routes>
    </div>
  );
}

export default App;
