import Offer from "./components/offer section/Offer";
import {useState} from "react";
import Navbar from "./navbar/nav";

function App() {
    const [show, setShow] = useState(true)
  return (
    <div className="App">
        {show && <Offer handelShow={() => setShow((prev) => !prev)} />}

        <Navbar/>
    </div>
  );
}

export default App;
