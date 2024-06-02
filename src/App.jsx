import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/_Home";
import Activities from "./components/pages/Activities/_Activities";
import Surroundings from "./components/pages/Surroundings/_Surroundings";
import ScrollToTop from "./components/elements/scroll-to-top/_ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/surroundings" element={<Surroundings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
