import PropTypes from "prop-types";

const SkillCard = ({ logo, name }) => {
  return (
    <div className="_skillCard">
      <div className="_skillCard__container">
        <h1 className="_skillCard__container__name">{name}</h1>
        <img className="_skillCard__container__img" src={logo} alt={name} />
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default SkillCard;
