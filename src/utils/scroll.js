const handleScroll = (ref) => {
  return window.scrollTo({
    top: ref?.current.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

export default handleScroll;
