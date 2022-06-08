import PropTypes from "prop-types";

const LanguageCard = ({ logo, name }) => {
  return (
    <div className="_languageCard">
      <div className="_languageCard__container">
        <h1 className="_languageCard__container__name">{name}</h1>
        <img className="_languageCard__container__img" src={logo} alt={name} />
      </div>
    </div>
  );
};

LanguageCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default LanguageCard;
