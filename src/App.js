import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const theme = window.localStorage.getItem("KDV_THEME");

  if (theme === "light") {
    document.body.classList.add("lightTheme");
  } else {
    document.body.classList.remove("lightTheme");
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/login" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
