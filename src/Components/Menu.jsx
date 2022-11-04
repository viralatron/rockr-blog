import { useState } from "react";
import { ReactComponent as SVGMenu } from "../assets/menu.svg";
const Menu = ({ showPosts, openContact }) => {
  const [menuOpen, setMenu] = useState(false);

  const menuClass = menuOpen ? "menu__links open" : "menu__links";
  const buttonClass = !menuOpen ? "menu__button close" : "menu__button";
  const toggleMenu = () => {
    setMenu(!menuOpen);
  };
  return (
    <menu className="menu">
      <h1 className="menu__title">Rockr Blog</h1>
      <nav className={menuClass}>
        <li className="menu__link">
          <a href="#" onClick={() => showPosts()}>
            Posts
          </a>
        </li>
        <li className="menu__link">
          <a href="#" onClick={() => openContact()}>
            Contact
          </a>
        </li>
      </nav>
      <button
        type="button"
        className={buttonClass}
        onClick={() => toggleMenu()}
      >
        <SVGMenu />
      </button>
    </menu>
  );
};
export default Menu;
