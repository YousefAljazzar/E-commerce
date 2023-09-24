import React from "react";
import Navbar from "../../navbar/nav";
import Hero from "../../components/hero secation/Hero";
import Latest from "./Latest";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Latest />
    </>
  );
}

export default HomePage;
