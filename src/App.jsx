import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootScreen from "./pages/BootScreen";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";
import CoordinatorsPage from "./pages/coordinators/CoordinatorsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<BootScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coordinators" element={<CoordinatorsPage />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;