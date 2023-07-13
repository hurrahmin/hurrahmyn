import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./styles.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import MainVote from "../pages/MainVote/index";
import MyVote from "../pages/MyVote/index";
import CreateVote from "../pages/CreateVote/index";
import SearchVote from "../pages/SearchVote/index";
import Auth from "../pages/Auth/index";
import AboutMe from "../pages/AboutMe/index";
import ContactUs from "../pages/ContactUs/index";
import Terms from "../pages/Terms/index";

const Layout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainVote />}></Route>
          <Route path="/MainVote" element={<MainVote />}></Route>
          <Route path="/MyVote" element={<MyVote />}></Route>
          <Route path="/CreateVote" element={<CreateVote />}></Route>
          <Route path="/SearchVote" element={<SearchVote />}></Route>
          <Route path="/Auth" element={<Auth />}></Route>
          <Route path="/AboutMe" element={<AboutMe />}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/Terms" element={<Terms />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
