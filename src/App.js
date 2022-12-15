import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import NotFound from './pages/NotFound';

function App() {
  const theme = window.localStorage.getItem("KDV_THEME");

  if (theme === "light") {
    document.body.classList.add("darkTheme");
  } else {
    document.body.classList.remove("darkTheme");
  }

  return (
    <div className="App">
    <Helmet>
      <meta charSet='utf-8'/>
      <title>Exla</title>
      <meta name='keywords' content='ecommerce'/>
      <meta name="description" content="E-commerce" />
      <meta name="og:title" content="Exla" />
      <meta name="og:type" content="ecommerce" />
      <meta name="og:description" content="Exla" />
      <meta name="og:url" content="" />
      <meta name="og:image" content="/logo192.png" />
    </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
