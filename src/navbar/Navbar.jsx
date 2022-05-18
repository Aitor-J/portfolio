const NavBar = () => {
  return (
    <div className="_navbar">
      <h2 className="_navbar__name">Aitor_Jurquet</h2>
      <nav className="_navbar__container">
        <ul className="_navbar__container__ul">
          <li className="_navbar__container__ul__li">Home</li>
          <li className="_navbar__container__ul__li">Skills</li>
          <li className="_navbar__container__ul__li">Education</li>
          <li className="_navbar__container__ul__li">Projects</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
