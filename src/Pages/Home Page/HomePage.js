import React from "react";
import Hero from "../../components/hero secation/Hero";

import Footer from "./components/Footer";
import Latest from "./components/Latest";
import Newsletter from "./components/Newsletter";
import Tranding from "./components/Tranding";
import Instgram from "./components/Instgram";

function HomePage() {
  return (
    <>
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
