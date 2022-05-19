import { useRef } from "react";
import Education from "../education/Education";
import NavBar from "../navbar/Navbar";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import handleScroll from "../utils/scroll";

const Home = () => {
  const homeRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();

  return (
    <div ref={homeRef}>
      <div className="_home">
        <NavBar
          homeRef={homeRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
        />
        <h1 className="_home__title">
          <span className="_home__title__span">{"<"}</span> WebDevelopper{" "}
          <span className="_home__title__span">{" />"}</span>
        </h1>
        <div className="_home__title__container">
          <p className="_home__title__container__desc">
            {" "}
            <span className="_home__title__span">{"<p>  "}</span>
            Traveler and adventurer, i’ve always been looking for new
            challenges, and I beleive the meaning of life is an infinite
            learning. <span className="_home__title__span">{"  </p>"}</span>
          </p>
        </div>
        <div className="_home__title__container">
          <h2 className="_home__title__container__desc__name">
            <span className="_home__title__container__desc__name__span">A</span>
            itor{" "}
            <span className="_home__title__container__desc__name__span">J</span>
            urquet
          </h2>
        </div>
        <div className="_home__scroll">
          <img
            className="_home__scroll__img"
            src="../../public/assets/linkedinLogo.png"
            alt="logoInsta"
          />
          <img
            className="_home__scroll__img"
            src="../../public/assets/instagramLogo.png"
            alt="logoInsta"
          />
          <button
            type="button"
            className="_home__scroll__down"
            onClick={() => handleScroll(skillsRef)}
          >
            V
          </button>
          <img
            className="_home__scroll__img"
            src="../../public/assets/facebookLogo.png"
            alt="logoInsta"
          />
          <img
            className="_home__scroll__img"
            src="../../public/assets/instagramLogo.png"
            alt="logoInsta"
          />
        </div>

        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Home;
