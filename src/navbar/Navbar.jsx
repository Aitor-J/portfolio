import { AiOutlineHome } from "react-icons/ai";
import { BiFace } from "react-icons/bi";
import { TbTools } from "react-icons/tb";
import { MdOutlineSchool } from "react-icons/md";
import { IoMdLaptop, IoMdMoon } from "react-icons/io";
import { BsDisc } from "react-icons/bs";
import PropTypes from "prop-types";
import { FaSun } from "react-icons/fa";
import { useState } from "react";
import ReactPlayer from "react-player";
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
  const [isPlaying, setIsPlaying] = useState(false);
  // function to revert the value of the variable
  const handleChange = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="_navbar">
      <nav className="_navbar__container">
        <ul className="_navbar__container__ul">
          <li
            className="_navbar__container__ul__li"
            onClick={() => setIsActive(!isActive)}
            onKeyDown={() => setIsActive(!isActive)}
            role="presentation"
            area-hidden="true"
          >
            <div className="_navbar__container__ul__li__cont__function">
              {" "}
              {isActive ? (
                <IoMdMoon color="white" size="3rem" />
              ) : (
                <FaSun color="rgb(255, 217, 146)" size="3rem" />
              )}
              <p className="_navbar__container__ul__li__cont__link"> THEME</p>
            </div>
          </li>
          <li
            className="_navbar__container__ul__li"
            onClick={handleChange}
            area-hidden="true"
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont__function">
              {isPlaying ? (
                <BsDisc color="white" size="3rem" className="rotation" />
              ) : (
                <BsDisc color="white" size="3rem" />
              )}
              <ReactPlayer
                url="https://soundcloud.com/fabfab2/waves-and-birds"
                width="0"
                height="0"
                playing={isPlaying}
                volume={0.3}
              />
              {isPlaying ? (
                <p className="_navbar__container__ul__li__cont__link__red">
                  {" "}
                  STOP
                </p>
              ) : (
                <p className="_navbar__container__ul__li__cont__link"> PLAY</p>
              )}
            </div>
          </li>

          <li
            className="_navbar__container__ul__li__step"
            onClick={() => handleScroll(homeRef)}
            area-hidden="true"
            onKeyDown={() => handleScroll(homeRef)}
            role="presentation"
          >
            <div className="_navbar__container__ul__li__cont">
              {isActive ? (
                <AiOutlineHome color="white" size="3rem" />
              ) : (
                <AiOutlineHome color="rgb(0, 213, 255)" size="3rem" />
              )}
              <p className="_navbar__container__ul__li__cont__link"> HOME</p>
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
              {isActive ? (
                <BiFace color="white" size="3rem" />
              ) : (
                <BiFace color="rgb(255, 155, 211)" size="3rem" />
              )}
              <p className="_navbar__container__ul__li__cont__link"> ABOUT</p>
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
              {isActive ? (
                <TbTools color="white" size="3rem" />
              ) : (
                <TbTools color="rgb(0, 171, 54)" size="3rem" />
              )}
              <p className="_navbar__container__ul__li__cont__link"> SKILLS</p>
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
              {isActive ? (
                <MdOutlineSchool color="white" size="3rem" />
              ) : (
                <MdOutlineSchool color="rgb(154, 0, 220)" size="3rem" />
              )}
              <p className="_navbar__container__ul__li__cont__link">RESUME</p>
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
              {isActive ? (
                <IoMdLaptop color="white" size="3rem" />
              ) : (
                <IoMdLaptop color="rgb(197, 197, 197)" size="3rem" />
              )}
              <p className="_navbar__container__ul__li__cont__link">PROJECTS</p>
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
