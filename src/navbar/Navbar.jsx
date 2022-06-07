import { AiOutlineHome } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { TbTools } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { IoMdLaptop } from "react-icons/io";
import PropTypes from "prop-types";
import Darkmode from "../darkmode/Darkmode";
import handleScroll from "../utils/scroll";

const NavBar = ({
  homeRef,
  aboutRef,
  skillsRef,
  educationRef,
  projectsRef,
  setIsActive,
  isActive,
}) => {
  return (
    <div className="_navbar">
      <nav className="_navbar__container">
        <ul className="_navbar__container__ul">
          <li className="_navbar__container__ul__li">
            <div
              className="_navbar__container__ul__li__cont"
              onClick={() => setIsActive(!isActive)}
              role="presentation"
            >
              {" "}
              <Darkmode setIsActive={setIsActive} isActive={isActive} />
              <p className="_navbar__container__ul__li__cont__link"> Theme</p>
            </div>
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(homeRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(homeRef)}
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont">
              {" "}
              <AiOutlineHome color="white" size="3rem" />{" "}
              <p className="_navbar__container__ul__li__cont__link"> Home</p>
            </div>
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(aboutRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(aboutRef)}
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont">
              {" "}
              <BiFace color="white" size="3rem" />
              <p className="_navbar__container__ul__li__cont__link"> About</p>
            </div>
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(skillsRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(skillsRef)}
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont">
              {" "}
              <TbTools color="white" size="3rem" />
              <p className="_navbar__container__ul__li__cont__link"> Skills</p>
            </div>
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(educationRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(educationRef)}
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont">
              {" "}
              <MdOutlineSchool color="white" size="3rem" />
              <p className="_navbar__container__ul__li__cont__link"> Resume</p>
            </div>
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={() => handleScroll(projectsRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(projectsRef)}
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont">
              {" "}
              <IoMdLaptop color="white" size="3rem" />
              <p className="_navbar__container__ul__li__cont__link">
                {" "}
                Projects
              </p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  homeRef: PropTypes.func.isRequired,
  aboutRef: PropTypes.func.isRequired,
  skillsRef: PropTypes.func.isRequired,
  educationRef: PropTypes.func.isRequired,
  projectsRef: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default NavBar;
