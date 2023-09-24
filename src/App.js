import Hero from "./components/hero secation/Hero";
import Offer from "./components/offer section/Offer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <Hero />
    </div>
  );
}

export default App;
