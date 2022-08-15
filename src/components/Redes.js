import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

export default function Redes() {
  const contactoData = [
    {
      id: 0,
      link: "",
      icon: ["fab", "instagram"],
    },
    {
      id: 1,
      link: "",
      icon: ["fab", "twitter"],
    },
    {
      id: 2,
      link: "",
      icon: ["fab", "spotify"],
    },
  ];
  return (
    <ul className="links">
      {contactoData.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.link} target="_blank">
              <FontAwesomeIcon
                icon={item.icon}
                size="4x"
                style={{ color: "#483c33" }}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
