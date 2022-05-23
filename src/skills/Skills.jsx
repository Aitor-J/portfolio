import PropTypes from "prop-types";
import { Slide } from "react-awesome-reveal";
import LanguageCardList from "../languageCardList/LanguageCardList.jsx";
import SkillsCardList from "../skillsCardList/SkillsCardList.jsx";
import handleScroll from "../utils/scroll";

const Skills = ({ educationRef }) => {
  return (
    <div className="_skills">
      <div className="_skills__container">
        <h1 className="_skills__container__title">
          <span className="_skills__container__title__span">{"<"}</span> Skills{" "}
          <span className="_skills__container__title__span">{" />"}</span>
        </h1>

        <div className="_skills__container__title__container">
          <p className="_skills__container__title__container__desc">
            {" "}
            <span className="_skills__container__title__span">{"<p>  "}</span>I
            guess we want to know a little bit about my skills and the Web
            technologies I learned so far.{" "}
            <span className="_skills__container__title__span">{"  </p>"}</span>
          </p>
        </div>
      </div>

      <Slide direction="up" delay={0} duration={2000}>
        <div className="_skills__container__lists">
          <SkillsCardList />
          <LanguageCardList />
        </div>
      </Slide>
      <div className="_skills__scroll">
        <button
          type="button"
          className="_skills__scroll__down"
          onClick={() => handleScroll(educationRef)}
        >
          V
        </button>
      </div>
    </div>
  );
};

Skills.propTypes = {
  educationRef: PropTypes.func.isRequired,
};
export default Skills;
