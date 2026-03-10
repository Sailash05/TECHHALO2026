import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootScreen from "./pages/BootScreen";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<BootScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;