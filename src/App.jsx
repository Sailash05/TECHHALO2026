import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootScreen from "./pages/BootScreen";
import Home from "./pages/homePage/Home";
import Events from "./pages/eventPage/Events";
import Register from "./pages/registerPage/Register";
import CoordinatorsPage from "./pages/coordinators/CoordinatorsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import SponsersPage from "./pages/sponsorsPage/SponsorsPage";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<BootScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coordinators" element={<CoordinatorsPage />} />
        <Route path="/sponsors" element={<SponsersPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>

      {/* <Footer/> */}

    </BrowserRouter>
  );
}

export default App;