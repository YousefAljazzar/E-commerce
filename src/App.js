import Hero from "./components/hero secation/Hero";
import Offer from "./components/offer section/Offer";
import { useState } from "react";
import HomePage from "./Pages/Home Page/HomePage";
import Navbar from "./navbar/nav";
import Routes from "./Routes";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <Navbar />
      <Routes />  
    </div>
  );
}

export default App;
