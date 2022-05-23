import PropTypes from "prop-types";

const Darkmode = ({ isActive, setIsActive }) => {
  return (
    <div>
      <div className="_navbar__dark__container">
        {isActive ? (
          <img
            src="../../public/assets/moonLogoLight.png"
            alt="moonLogo"
            className="_navbar__img"
            onClick={() => setIsActive(!isActive)}
            role="presentation"
          />
        ) : (
          <img
            src="../../public/assets/moonLogo.png"
            alt="moonLogo"
            className="_navbar__img"
            onClick={() => setIsActive(!isActive)}
            role="presentation"
          />
        )}
        <h2
          className="_navbar__dark"
          onClick={() => setIsActive(!isActive)}
          role="presentation"
        >
          Dark Mode{" "}
          {isActive ? (
            <span className="_navbar__dark__span"> ON</span>
          ) : (
            <span className="_navbar__dark__span"> OFF</span>
          )}
        </h2>
      </div>
    </div>
  );
};

Darkmode.propTypes = {
  isActive: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Darkmode;

// className={isActive ? "_skills" : "_skills__light"}
