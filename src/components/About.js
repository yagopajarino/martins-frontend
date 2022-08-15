import image from "../static/racimo.jpeg";
import { useEffect, useState } from "react";

export default function About() {
  const [imgLeft, setImgLeft] = useState();
  const [imgHeight, setImgHeight] = useState();
  const [imgWidth, setImgWidth] = useState();

  useEffect(() => {
    setImgLeft(() => {
      const alto = document.querySelector("#about").getBoundingClientRect().top;
      return alto;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setImgLeft(() => {
        const alto = document
          .querySelector("#about")
          .getBoundingClientRect().top;
        const distanciaTop = window.pageYOffset;
        return distanciaTop > alto ? 0 : alto - distanciaTop;
      });
    });
  });

  useEffect(() => {
    const div = document.querySelector("#aboutDiv");
    const dHeight = div.clientHeight;
    const dWidth = div.clientWidth;
    const pWidth = document.querySelector("#aboutText").clientWidth;
    setImgHeight(dHeight);
    setImgWidth(dWidth - pWidth);
  }, []);

  const TEXTO =
    "En el siglo XVI, la ciudad de Coimbra ve nacer la Casa Solar Martins y, desde ese mismo instante, nace una historia profundamente ligada a las vides, a las barricas de roble, al silencio que respeta el tiempo de cada vino. En el siglo XX la familia Martins se instala en Cruz de Piedra y, sobre un terreno pedroso, de fácil drenaje, muy bueno para tener un viñedo de cuidada sanidad e ideal para que las raíces de la viña profundicen buscando lo mejor de la tierra mendocina, establecimos la tradición europea en vinos finos, deslumbrantes de color e intensos de aroma y sabor.";
  return (
    <section className="about" id="about">
      <h1>About</h1>
      <div id="aboutDiv">
        <p id="aboutText">{TEXTO}</p>
        {window.innerWidth >= 1280 ? (
          <img
            src={image}
            style={{ left: imgLeft, height: imgHeight, width: imgWidth }}
          ></img>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
