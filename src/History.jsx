import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Cart from "./pages/Cart";
import History from "./History";
import Profile from "./Profile";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;