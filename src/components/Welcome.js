import { useState, UseEffect, useEffect } from "react";

export default function Welcome() {
  const [h, setH] = useState(0);

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;
    const navH = document.querySelector("nav").offsetHeight;
    setH(clientHeight - navH);
  }, []);

  return (
    <section className="welcome" style={{ height: h }}>
      <div>
        <h1>Tradición europea en suelo argentino</h1>
        <p>Más de 120 años de tradición vitivinícola nos respaldan.</p>
      </div>
    </section>
  );
}
