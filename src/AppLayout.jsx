import React from "react";
import { Outlet } from "react-router";
import Navbar from "./molecules/Navbar";
import Footer from "./molecules/Footer";

function AppLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;
  