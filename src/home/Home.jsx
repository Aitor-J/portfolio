import { Slide } from "react-awesome-reveal";
import { useRef, useState } from "react";
import Education from "../education/Education";
import NavBar from "../navbar/Navbar";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import About from "../about/About";
import ScrollArrow from "../scrollDown/ScrollArrow";

const Home = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const educationRef = useRef();
  const projectsRef = useRef();
  const [isActive, setIsActive] = useState(true);

  return (
    <div ref={homeRef} className={isActive ? "_home" : "_light__home"}>
      <div>
        <NavBar
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <Slide direction="left">
          <div className="_home__title">
            <span className="_home__title__span">{"<"}</span>
            <h1 className="_home__title__bounce">A</h1>
            <h1 className="_home__title__bounce">i</h1>
            <h1 className="_home__title__bounce">t</h1>
            <h1 className="_home__title__bounce">o</h1>
            <h1 className="_home__title__bounce">r</h1>
            <h1 className="_home__title__bounce">J</h1>
            <h1 className="_home__title__bounce">u</h1>
            <h1 className="_home__title__bounce">r</h1>
            <h1 className="_home__title__bounce">q</h1>
            <h1 className="_home__title__bounce">u</h1>
            <h1 className="_home__title__bounce">e</h1>
            <h1 className="_home__title__bounce">t</h1>
            <span className="_home__title__span">{" />"}</span>
          </div>
        </Slide>
        <div className="_home__title__container">
          <p className="_home__title__container__desc">
            {" "}
            <span className="_home__title__container__desc__span">
              {"<p>  "}
            </span>
            Web Developper junior, looking for new challenges to grow up...
            <span className="_home__title__container__desc__span">
              {"  </p>"}
            </span>
          </p>
        </div>
        <div className="_home__title__container"> </div>
        <div className="_home__scroll">
          <ScrollArrow scroll={aboutRef} nameRef="About me" />
        </div>
        <div ref={aboutRef}>
          <About
            skillsRef={skillsRef}
            setIsActive={setIsActive}
            isActive={isActive}
          />
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
