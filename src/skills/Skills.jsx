import PropTypes from "prop-types";
import { Slide } from "react-awesome-reveal";
import LanguageCardList from "../languageCardList/LanguageCardList.jsx";
import ScrollArrow from "../scrollDown/ScrollArrow.jsx";

const Skills = ({ educationRef }) => {
  return (
    <div className="_skills">
      <div className="_skills__container">
        <h1 className="_skills__container__title">Skills </h1>
      </div>
      <Slide direction="up" delay={0} duration={2000}>
        <div className="_skills__container__lists">
          <LanguageCardList />
        </div>
      </Slide>
      <div className="_skills__scroll">
        <ScrollArrow ref={educationRef} nameRef="EDUCATION" />
      </div>
    </div>
  );
};

Skills.propTypes = {
  educationRef: PropTypes.func.isRequired,
};
export default Skills;
