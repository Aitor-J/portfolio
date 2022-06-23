import PropTypes from "prop-types";
import ScrollArrow from "../scrollDown/ScrollArrow.jsx";
import LanguageCard from "../languageCard/LanguageCard";
import datas from "../languageCard/dataLanguages.js";
import SoftSkillsCard from "../softSkillsCard/SoftSkillsCard";
import toto from "../softSkillsCard/dataSoftSkills.js";

const Skills = ({ educationRef, isActive }) => {
  console.log(isActive);
  return (
    <div className={isActive ? "_skills" : "_skills__light"}>
      <div className="_skills__container">
        <div
          className={
            isActive
              ? "_skills__container__webTech"
              : "_skills__container__webTech__light"
          }
        >
          <h1 className="_skills__container__title">Web Technologies </h1>
          <div className="_skills__container__webTech__languages">
            {datas &&
              datas.map((data, index) => (
                <LanguageCard key={index} logo={data.logo} name={data.name} />
              ))}
          </div>
        </div>
        <div
          className={
            isActive
              ? "_skills__container__skills"
              : "_skills__container__skills__light"
          }
        >
          <h1 className="_skills__container__title">Soft Skills </h1>
          <div className="_skills__container__skills__languages">
            {toto &&
              toto.map((titi, index) => (
                <SoftSkillsCard key={index} logo={titi.logo} name={titi.name} />
              ))}
          </div>
        </div>
      </div>
      <div className="_skills__scroll">
        <ScrollArrow scroll={educationRef} nameRef="EDUCATION" />
      </div>
    </div>
  );
};

Skills.propTypes = {
  educationRef: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
};
export default Skills;
