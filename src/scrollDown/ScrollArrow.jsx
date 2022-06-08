import PropTypes from "prop-types";
import React from "react";
import handleScroll from "../utils/scroll";

const ScrollArrow = ({ scroll, nameRef }) => {
  return (
    <div
      className="container"
      onClick={() => handleScroll(scroll)}
      role="presentation"
    >
      <div className="arrow" />
      <div className="arrow" />
      <div className="arrow" />
      <span className="text">{nameRef}</span>
    </div>
  );
};

export default ScrollArrow;

ScrollArrow.propTypes = {
  scroll: PropTypes.func.isRequired,
  nameRef: PropTypes.string.isRequired,
};
