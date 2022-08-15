import { useState, UseEffect, useEffect } from "react";
import image from "../static/viñas_welcome.png";

export default function Welcome() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const clientHeight = window.innerHeight;
    const navH = document.querySelector("nav").offsetHeight;
    setH(clientHeight - navH);
  }, []);

  return (
    <section className="welcome" style={{ height: h }}>
      <img src={image} style={{ height: h }} />
      <div>
        <h1>Tradición europea en suelo argentino</h1>
        <p>Más de 120 años de tradición vitivinícola nos respaldan.</p>
      </div>
    </section>
  );
}
