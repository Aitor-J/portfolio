import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import PropTypes from "prop-types";
// CREATE USECONTEXT for darkmode

const Darkmode = ({ isActive, setIsActive }) => {
  return (
    <div>
      <div>
        {isActive ? (
          <IoMdMoon
            color="white"
            size="3rem"
            className="_navbar__img"
            onClick={() => setIsActive(!isActive)}
            role="presentation"
          />
        ) : (
          <FaSun
            color="white"
            size="3rem"
            className="_navbar__img"
            onClick={() => setIsActive(!isActive)}
            role="presentation"
          />
        )}
      </div>
    </div>
  );
};

Darkmode.propTypes = {
  isActive: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};

export default Darkmode;
