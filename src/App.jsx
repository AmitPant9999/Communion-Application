import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Events from "./pages/Events";
import About from "./pages/About";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="py-4 px-8 lg:px-56">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/events' element={<Events/>}/>
          <Route path="/about" element={<About/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
