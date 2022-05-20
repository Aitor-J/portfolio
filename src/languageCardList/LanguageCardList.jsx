import Carousel from "../carousel/carousel";

const LanguageCardList = () => {
  return (
    <div className="_languageCardList">
      <h1 className="_languageCardList__title">Web technologies</h1>
      <div className="_languageCardList__list">
        <Carousel />
      </div>
    </div>
  );
};

export default LanguageCardList;
