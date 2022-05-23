import { Slide } from "react-awesome-reveal";
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
        <Slide direction="left">
          <div className="_home__title">
            <span className="_home__title__span">{"<"}</span>
            <h1 className="_home__title__bounce">W</h1>
            <h1 className="_home__title__bounce">e</h1>
            <h1 className="_home__title__bounce">b</h1>
            <h1 className="_home__title__bounce">D</h1>
            <h1 className="_home__title__bounce">e</h1>
            <h1 className="_home__title__bounce">v</h1>
            <h1 className="_home__title__bounce">e</h1>
            <h1 className="_home__title__bounce">l</h1>
            <h1 className="_home__title__bounce">o</h1>
            <h1 className="_home__title__bounce">p</h1>
            <h1 className="_home__title__bounce">e</h1>
            <h1 className="_home__title__bounce">r</h1>
            <span className="_home__title__span">{" />"}</span>
          </div>
        </Slide>

        <div className="_home__title__container">
          <p className="_home__title__container__desc">
            {" "}
            <span className="_home__title__container__desc__span">
              {"<p>  "}
            </span>
            Traveler and adventurer, i’ve always been looking for new
            challenges, and I beleive the meaning of life is an infinite
            learning.{" "}
            <span className="_home__title__container__desc__span">
              {"  </p>"}
            </span>
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
          <button
            type="button"
            className="_home__scroll__down"
            onClick={() => handleScroll(skillsRef)}
          >
            V
          </button>
        </div>
        <div ref={skillsRef}>
          <Skills educationRef={educationRef} />
        </div>
        <div ref={educationRef}>
          <Education projectsRef={projectsRef} />
        </div>
        <div ref={projectsRef}>
          <Projects homeRef={homeRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
