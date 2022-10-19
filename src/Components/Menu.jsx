const Menu = ({ showPosts, openContact }) => {
  return (
    <menu className="menu">
      <h1 className="menu__title">Rockr Blog</h1>
      <div className="menu__links">
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
      </div>
    </menu>
  );
};
export default Menu;
