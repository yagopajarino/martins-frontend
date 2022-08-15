export default function navbar() {
  function hamburgerMenu() {
    return (
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
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
