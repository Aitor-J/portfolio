import LanguageCardList from "../languageCardList/LanguageCardList.jsx";
import SkillsCardList from "../skillsCardList/SkillsCardList.jsx";

const Skills = () => {
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
            guess we want to know a little bit about my skills and the languages
            Ive learn so far.{" "}
            <span className="_skills__container__title__span">{"  </p>"}</span>
          </p>
        </div>
      </div>
      <LanguageCardList />
      <SkillsCardList />
    </div>
  );
};
export default Skills;
