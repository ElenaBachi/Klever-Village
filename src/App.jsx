import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/_Home";
import Activities from "./components/pages/Activities/_Activities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
