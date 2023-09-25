import React from "react";
import Navbar from "../../navbar/nav";
import Hero from "../../components/hero secation/Hero";
import Latest from "./Latest";
import Tranding from "./Tranding";
import Newsletter from "./Newsletter";
import Instgram from "./Instgram";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Latest />
      <Tranding />
      <Newsletter />
      <Instgram />
      <Footer />
    </>
  );
}

export default HomePage;
