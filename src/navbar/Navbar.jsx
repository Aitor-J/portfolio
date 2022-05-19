import PropTypes from "prop-types";
import handleScroll from "../utils/scroll";

const NavBar = ({ homeRef, skillsRef, educationRef, projectsRef }) => {
  return (
    <div className="_navbar">
      <h2 className="_navbar__name">Aitor_Jurquet</h2>
      <nav className="_navbar__container">
        <ul className="_navbar__container__ul">
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(homeRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(homeRef)}
            role="presentation"
          >
            Home
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(skillsRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(skillsRef)}
            role="presentation"
          >
            Skills
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(educationRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(educationRef)}
            role="presentation"
          >
            Education
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(projectsRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(projectsRef)}
            role="presentation"
          >
            Projects
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  homeRef: PropTypes.func.isRequired,
  skillsRef: PropTypes.func.isRequired,
  educationRef: PropTypes.func.isRequired,
  projectsRef: PropTypes.func.isRequired,
};

export default NavBar;
