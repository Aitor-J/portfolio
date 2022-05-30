// import PropTypes from "prop-types";
// import handleScroll from "../utils/scroll";

const About = () => {
  return (
    <div className="_about">
      <div className="_about__container">
        <h1 className="_about__container__title">About me</h1>
        <p className="_about__container__desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          distinctio. Provident veniam beatae nisi a atque praesentium tempora
          accusamus voluptatum fuga, sapiente laborum debitis fugit qui itaque
          natus dolore perspiciatis!
        </p>
        <img
          src="../../public/assets/profilPicA.png"
          alt="profilPix"
          className="_about__container__img"
        />
      </div>
    </div>
  );
};

// About.propTypes = {
//   skillsRef: PropTypes.func.isRequired,
// };
export default About;
