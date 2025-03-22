"use client"
import Image from "next/image";
import React,{ useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../pages/log/Login";
import CreateCredentialToken from "../../pages/CredentialToken/CreateCredentialToken/CreateCredentialToken"


export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateCredentialToken/>} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
