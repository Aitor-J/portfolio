import PropTypes from "prop-types";
import ScrollArrow from "../scrollDown/ScrollArrow.jsx";
import LanguageCard from "../languageCardList/LanguageCard";
import datas from "../languageCardList/dataLanguages";

const Skills = ({ educationRef }) => {
  return (
    <div className="_skills">
      <div className="_skills__container">
        <h1 className="_skills__container__title">Web Technologies </h1>
        <div className="_skills__container__languages">
          {datas &&
            datas.map((data, index) => (
              <LanguageCard key={index} logo={data.logo} name={data.name} />
            ))}
        </div>
        {/* <h1 className="_skills__container__title">Soft Skills </h1>
        <div className="slidingVerticalo">
          <span className="_skills__container__desc">Design</span>
          <span className="_skills__container__desc">Adaptation </span>
          <span className="_skills__container__desc">Team spirit</span>
          <span className="_skills__container__desc">Problem solving </span>
          <span className="_skills__container__desc">
            Communicating with impact
          </span>
        </div> */}
      </div>

      <div className="_skills__scroll">
        <ScrollArrow scroll={educationRef} nameRef="EDUCATION" />
      </div>
    </div>
  );
};

Skills.propTypes = {
  educationRef: PropTypes.func.isRequired,
};
export default Skills;
