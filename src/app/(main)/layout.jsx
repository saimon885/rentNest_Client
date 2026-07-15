import Footer from "@/components/sheard/Footer";
import Navbar from "@/components/sheard/Navbar";
import React from "react";

const mainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-neutral">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default mainLayout;
