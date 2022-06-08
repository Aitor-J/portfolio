import PropTypes from "prop-types";
import ScrollArrow from "../scrollDown/ScrollArrow";

const About = ({ skillsRef, isActive }) => {
  return (
    <div className={isActive ? "_about" : "_light__about"}>
      <div className="_about__container">
        <h1 className="_about__container__title">About me</h1>
        <p className="_about__container__desc">
          Hello, and thank you for visiting my Website. <br />
          Traveler and adventurer, I’ve always been looking for new challenges,
          and I beleive the meaning of life is an infinite learning. I grew up
          in bask country but Ive been moving around the world since my early
          youthness. I love creativity and solving problems, thats why I get
          into this job full of it. Now, if I had one word to describe myself,
          <br />
          it would be
          <div className="slidingVerticalo">
            <span>Open minded.</span>
            <span>Resilient.</span>
            <span>Creative.</span>
            <span>Respectful.</span>
            <span>Traveler.</span>
          </div>
        </p>
        <div className="_about__container__images">
          <div>
            <img
              src="../../public/assets/plane.png"
              alt="plane"
              className="_about__container__img1"
            />
            <img
              src="../../public/assets/earth.png"
              alt="plane"
              className="_about__container__img2"
            />
          </div>
          <img
            src="../../public/assets/profilPicA.png"
            alt="profilPix"
            className="_about__container__img"
          />
          <div>
            <img
              src="../../public/assets/compass.png"
              alt="plane"
              className="_about__container__img4"
            />
            <img
              src="../../public/assets/compassNiddle.png"
              alt="plane"
              className="_about__container__img5"
            />
          </div>
        </div>
      </div>
      <ScrollArrow scroll={skillsRef} nameRef="Skills" />
    </div>
  );
};

About.propTypes = {
  skillsRef: PropTypes.func.isRequired,
  isActive: PropTypes.func.isRequired,
};
export default About;
