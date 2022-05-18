import datas from "./dataSkills";
import SkillCard from "./SkillCard";

const SkillsCardList = () => {
  return (
    <div className="_skillsCardList">
      {datas &&
        datas.map((data, index) => (
          <SkillCard key={index} logo={data.logo} name={data.name} />
        ))}
    </div>
  );
};

export default SkillsCardList;
