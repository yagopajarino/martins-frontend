import { useEffect, useState } from "react";
import cabernetSauvignon from "../static/cabernet-sauvignon.png";
import malbec from "../static/malbec.png";
import cabernetMalbec from "../static/cabernet-malbec.png";

export default function Vinos() {
  const [vinos, setVinos] = useState([]);
  const [pHeight, setPHeight] = useState("auto");

  // Acá va llamada a API
  useEffect(() => {
    setVinos([
      {
        name: "Martins Malbec",
        img: malbec,
        description:
          "Atractivo color purpura con tonos azulados. Complejo aroma donde se combinan frutas rojas, ciruelas, frutos secos y vainilla. En boca es elegante de acidez equilibrada, con buen cuerpo, textura suave, con taninos dulces y de final persitente.",
      },
      {
        name: "Martins Cabernet-Sauvignon",
        img: cabernetSauvignon,
        description:
          "Rojo rubí con matices morados, de buena intensidad. Tonos especiados que recuerdan a canela, pimienta, pasas, y con un fondo elegante de vainilla. En boca se muestra largo, equilibrado con buena estructura y taninos dulces.",
      },
      {
        name: "Martins Cabernet-Malbec",
        img: cabernetMalbec,
        description:
          "Violaceo de intensidad alta. De aroma complejo y persistente donde asoman agradables notas de vainilla, especias, frutos secos y chocolate. En boca se muestra potente, estructurado, vigoroso, con taninos dulces y una agradable sensación envolvente de fin de boca.",
      },
    ]);
  }, []);

  const tiles = vinos.map((item) => {
    return (
      <div className="tile">
        <img src={item.img} />
        <h2>{item.name}</h2>
        <p id="description" style={{ height: pHeight }}>
          {item.description}
        </p>
      </div>
    );
  });

  useEffect(() => {
    const d = Array.from(document.querySelectorAll("#description"));
    if (d.length != 0 && pHeight == "auto") {
      const pad = parseInt(
        window
          .getComputedStyle(d[0], null)
          .getPropertyValue("padding-top")
          .slice(0, -2)
      );
      const maxHeight = Math.max(...d.map((e) => e.clientHeight));
      setPHeight(maxHeight - 2 * pad);
    }
  }, [tiles]);

  return (
    <section id="vinos" className="vinos">
      <h1>Vinos</h1>
      <div>
        <div className="tiles-container">{tiles}</div>
        <div className="comprar-container">
          {/* <a href="https://store.martins.ar" className="comprar-button">
            Comprar
          </a> */}
        </div>
      </div>
    </section>
  );
}
