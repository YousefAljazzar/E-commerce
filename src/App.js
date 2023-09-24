import Hero from "./components/hero secation/Hero";
import Offer from "./components/offer section/Offer";
import { useState } from "react";
import HomePage from "./Pages/Home Page/HomePage";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <HomePage />
    </div>
  );
}

export default App;
