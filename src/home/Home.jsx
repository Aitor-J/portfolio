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
      <NavBar
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        educationRef={educationRef}
        projectsRef={projectsRef}
        setIsActive={setIsActive}
        isActive={isActive}
      />
      <div className="_home__container">
        <Slide direction="left">
          <div className="_home__title">
            <span
              className={
                isActive ? "_home__title__span" : "_home__title__span__light"
              }
            >
              {"<"}
            </span>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              A
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              i
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              t
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              o
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              r
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              J
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              u
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              r
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              q
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              u
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              e
            </h1>
            <h1
              className={
                isActive
                  ? "_home__title__bounce"
                  : "_light__home__title__bounce"
              }
            >
              t
            </h1>
            <span
              className={
                isActive ? "_home__title__span" : "_home__title__span__light"
              }
            >
              {" />"}
            </span>
          </div>
        </Slide>
        <div className="_home__title__container">
          <p
            className={
              isActive
                ? "_home__title__container__desc"
                : "_home__title__container__desc__light"
            }
          >
            {" "}
            <span
              className={
                isActive
                  ? "_home__title__container__desc__span"
                  : "_home__title__container__desc__span__light"
              }
            >
              {"<p>  "}
            </span>
            Web Developper junior, looking for new challenges to grow up...
            <span
              className={
                isActive
                  ? "_home__title__container__desc__span"
                  : "_home__title__container__desc__span__light"
              }
            >
              {"  </p>"}
            </span>
          </p>
        </div>
        <div className="_home__scroll">
          <ScrollArrow scroll={aboutRef} nameRef="About me" />
        </div>
      </div>
      <div ref={aboutRef}>
        <About
          skillsRef={skillsRef}
          setIsActive={setIsActive}
          isActive={isActive}
        />
      </div>
      <div ref={skillsRef}>
        <Skills
          educationRef={educationRef}
          setIsActive={setIsActive}
          isActive={isActive}
        />
      </div>
      <div ref={educationRef}>
        <Education projectsRef={projectsRef} />
      </div>
      <div ref={projectsRef}>
        <Projects homeRef={homeRef} />
      </div>
    </div>
  );
};

export default Home;
