import PropTypes from "prop-types";

const SoftSkillsCard = ({ logo, name }) => {
  return (
    <div className="_softSkillsCard">
      <div className="_softSkillsCard__container">
        <h1 className="_softSkillsCard__container__name">{name}</h1>
        <img
          className="_softSkillsCard__container__img"
          src={logo}
          alt={name}
        />
      </div>
    </div>
  );
};

SoftSkillsCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default SoftSkillsCard;
