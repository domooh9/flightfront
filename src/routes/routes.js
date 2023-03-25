import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { lazy } from "react";
// import { Suspense } from "react";
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import FlightTracker from "../components/FlightTracker";
import Auth from "../components/Auth";
import AdminLogin from "../components/AdminLogin";
import Admindash from "../components/Admindash";
import ForgotPassword from "../components/ForgotPassword";
import "bootstrap/dist/css/bootstrap.min.css"
import DownloadPDF from "../components/DownloadPDF";
import SignUp from "../components/SignUp";
 import Home from "../pages/Home";
import BrowsePage from "../pages/BrowsePage"

const RoutePaths = () => {


  const flights = [
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "12:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "4:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "9:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "11:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "10:50 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "12:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:00 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase ", departureTime: "8:00 PM", departureGateNumber: "14", price: "$100" },
    { airline: "KQ ticket purchase", departureTime: "10:00 AM", departureGateNumber: "10", price: "$200" },
    { airline: "KQ ticket purchase", departureTime: "2:00 PM", departureGateNumber: "16", price: "$250" },
    { airline: "KQ ticket purchase", departureTime: "5:30 PM", departureGateNumber: "1", price: "$150" },
    { airline: "KQ ticket purchase", departureTime: "8:40 PM", departureGateNumber: "14", price: "$100" },
  ];

  return (
    <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<Navigate to="/signin" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/FlyM/browse-page" element={<BrowsePage flights={flights} />}></Route>
          <Route path="/page" element={<FlightTracker />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/dash" element={<Admindash flights={flights} />}></Route>
          <Route path="/auth" element={<SignUp /> }></Route>
          <Route path="/forgot-password" element={<ForgotPassword /> }></Route> 
          <Route path="/signin" element={<Auth /> }></Route>
          <Route path="/download" element={<DownloadPDF /> }></Route>
        </Routes>
    
    </BrowserRouter>
  );
};

export default RoutePaths;
