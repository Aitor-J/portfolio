const SkillsCardList = () => {
  return (
    <div className="_skillsCardList">
      <h1 className="_skillsCardList__title">Soft skills</h1>
      <div className="_skillsCardList__list">
        <p className="_skillsCardList__list__desc">
          <span className="_skillsCardList__list__desc__span">_</span>Design
        </p>
        <p className="_skillsCardList__list__desc">
          {" "}
          <span className="_skillsCardList__list__desc__span">_</span>Adaptation
        </p>
        <p className="_skillsCardList__list__desc">
          {" "}
          <span className="_skillsCardList__list__desc__span">_</span>
          Team <span className="_skillsCardList__list__desc__span">__</span>
          spririt{" "}
        </p>
        <p className="_skillsCardList__list__desc">
          {" "}
          <span className="_skillsCardList__list__desc__span">_</span>
          Problem<span className="_skillsCardList__list__desc__span">__</span>
          solving
        </p>
        <p className="_skillsCardList__list__desc">
          <span className="_skillsCardList__list__desc__span">_</span>
          Communicating
          <span className="_skillsCardList__list__desc__span">__</span>with
          <span className="_skillsCardList__list__desc__span">__</span>impact
        </p>
      </div>
    </div>
  );
};

export default SkillsCardList;
