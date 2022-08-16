export default function navbar() {
  function hamburgerAction() {
    const s1 = document.querySelector(".menuToggle > span:nth-child(2)");
    const s2 = document.querySelector(".menuToggle > span:nth-child(3)");
    const s3 = document.querySelector(".menuToggle > span:nth-child(4)");
    s1.classList.toggle("s1Checked");
    s2.classList.toggle("s2Checked");
    s3.classList.toggle("s3Checked");

    const menu = document.querySelector(".menu");
    menu.classList.toggle("displayMenu");
  }

  function hamburgerMenu() {
    return (
      <div className="menuToggle">
        <input type="checkbox" onClick={hamburgerAction} />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
          <li>
            <a onClick={hamburgerAction} href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a onClick={hamburgerAction} href="#vinos">
              VINOS
            </a>
          </li>
          <li>
            <a onClick={hamburgerAction} href="#contacto">
              CONTACTO
            </a>
          </li>
        </ul>
      </div>
    );
  }

  function fullMenu() {
    return (
      <ul>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#vinos">VINOS</a>
        </li>
        <li>
          <a href="#contacto">CONTACTO</a>
        </li>
      </ul>
    );
  }

  return (
    <nav>
      <h1 id="/">
        <a href="#">MARTINS</a>
      </h1>
      {window.innerWidth >= 1280 ? fullMenu() : hamburgerMenu()}
    </nav>
  );
}
