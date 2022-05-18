import datas from "./dataLanguages";
import LanguageCard from "./LanguageCard";

const LanguageCardList = () => {
  return (
    <div className="_languageCardList">
      {datas &&
        datas.map((data, index) => (
          <LanguageCard key={index} logo={data.logo} name={data.name} />
        ))}
    </div>
  );
};

export default LanguageCardList;
