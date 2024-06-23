import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import ActivitiesPage from "./components/pages/ActivitiesPage/ActivitiesPage";
import SurroundingsPage from "./components/pages/SurroundingsPage/SurroundingsPage";
import ScrollToTop from "./components/elements/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/surroundings" element={<SurroundingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
