import { useEffect, useState } from "react";
import Redes from "./Redes";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [emailStatus, setEmailStatus] = useState("");

  function sendMail(e) {
    setEmailStatus(1);
    e.preventDefault();
    let b = {
      nombre,
      email,
      mensaje,
    };
    fetch("https://evening-cove-32650.herokuapp.com/api/v1/contacto/nuevo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(b),
    }).then((response) => setEmailStatus(response.status));
  }

  const emailMessage =
    emailStatus == 200 ? (
      <p>Enviado</p>
    ) : emailStatus == 300 ? (
      <p>Hubo un problema</p>
    ) : emailStatus == 1 ? (
      <p>Enviando</p>
    ) : (
      <p hidden></p>
    );

  return (
    <section id="contacto" className="contact">
      <h1>Contacto</h1>
      <div className="content">
        <div>
          <form autoComplete="off" onSubmit={sendMail}>
            <input
              type="text"
              onChange={(event) => setNombre(event.target.value)}
              name="nombre"
              placeholder="Nombre"
            ></input>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              name="email"
              placeholder="Email"
            ></input>
            <textarea
              onChange={(event) => setMensaje(event.target.value)}
              name="mensaje"
              placeholder="Mensaje"
            ></textarea>
            <button type="sumbit" disabled={emailStatus == 200}>
              Enviar
            </button>
          </form>
          {emailMessage}
        </div>
        <div>
          <Redes />
        </div>
      </div>
    </section>
  );
}
