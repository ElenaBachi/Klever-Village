import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Activities from "./components/pages/Activities/Activities";
import SurroundingsPage from "./components/pages/SurroundingsPage/SurroundingsPage";
import ScrollToTop from "./components/elements/scroll-to-top/_ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/surroundings" element={<SurroundingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
