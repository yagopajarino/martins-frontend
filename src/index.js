import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Vinos from "./components/Vinos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import ArrowToTop from "./components/ArrowToTop";

import "../src/styles/root.css";
import "../src/styles/navbar.css";
import "../src/styles/welcome.css";
import "../src/styles/about.css";
import "../src/styles/vinos.css";
import "../src/styles/contact.css";
import "../src/styles/footer.css";
import "../src/styles/arrowToTop.css";
import "../src/styles/hamburger-menu.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Welcome />
    <About />
    <Vinos />
    <Contacto />
    <Footer />
    <ArrowToTop />
  </React.StrictMode>
);
