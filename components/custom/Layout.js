"use client";



import { Navbar } from "./navbarNfooter/Navbar";
import { Footer } from "./navbarNfooter/Footer";

export const Layout = ({  children }) => {
  

  return (
    <>
       <Navbar />

    

      {children}

      <Footer  />
    </>
  );
};
