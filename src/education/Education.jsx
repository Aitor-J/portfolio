import PropTypes from "prop-types";
import handleScroll from "../utils/scroll";
import Timeline from "../timeline/Timeline";

const Education = ({ projectsRef }) => {
  return (
    <div className="_education">
      <div className="_education__container">
        <h1 className="_education__container__title">
          <span className="_education__container__title__span">{"<"}</span>{" "}
          Education{" "}
          <span className="_education__container__title__span">{" />"}</span>
        </h1>

        <div className="_education__container__title__container">
          <p className="_education__container__title__container__desc">
            {" "}
            <span className="_education__container__title__span">
              {"<p>  "}
            </span>
            This has been a journey between school and profesional experiences,
            and I learned as much as I could in both.{" "}
            <span className="_education__container__title__span">
              {"  </p>"}
            </span>
          </p>
        </div>
      </div>
      {/* <div className="_education__list__container">
        <div className="_education__list__container__experiences">
          <ul className="_education__list__container__experiences__ul">
            <li className="_education__list__container__experiences__ul__li">
              Rénovation
            </li>
            <li className="_education__list__container__experiences__ul__li">
              Barman
            </li>
            <li className="_education__list__container__experiences__ul__li">
              Architecte
            </li>
          </ul>
        </div>
        <div className="_education__list__container__dates">
          <p className="_education__list__container__dates__p">2012</p>
          <p className="_education__list__container__dates__p">2012</p>
          <p className="_education__list__container__dates__p">2012</p>
          <p className="_education__list__container__dates__p">2012</p>
          <p className="_education__list__container__dates__p">2012</p>
          <p className="_education__list__container__dates__p">2012</p>
        </div>
        <div className="_education__list__container__school">
          <ul className="_education__list__container__school__ul">
            <li className="_education__list__container__school__ul__li">
              Wild Code School
            </li>
            <li className="_education__list__container__school__ul__li">
              ULM licence
            </li>
            <li className="_education__list__container__school__ul__li">
              Landscape architecture
            </li>
          </ul>
        </div>
      </div> */}

      <Timeline />
      <div className="_education__scroll">
        <button
          type="button"
          className="_education__scroll__down"
          onClick={() => handleScroll(projectsRef)}
        >
          V
        </button>
      </div>
    </div>
  );
};
Education.propTypes = {
  projectsRef: PropTypes.func.isRequired,
};

export default Education;
