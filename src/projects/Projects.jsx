import PropTypes from "prop-types";
import handleScroll from "../utils/scroll";

const Projects = ({ homeRef }) => {
  return (
    <div className="_projects">
      <h1>Projects</h1>
      <div className="_projects__scroll">
        <button
          type="button"
          className="_projects__scroll__down"
          onClick={() => handleScroll(homeRef)}
        >
          TOP PAGE
        </button>
      </div>
    </div>
  );
};

Projects.propTypes = {
  homeRef: PropTypes.func.isRequired,
};
export default Projects;
