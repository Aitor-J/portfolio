const Rotate = () => {
  return (
    <div>
      <header>
        <h1>Rotating words using CSS Animations</h1>
      </header>
      <section className="wrapper">
        <h2 className="sentence">
          Refactor
          <div className="slidingVertical">
            <span>Amazing.</span>
            <span>Beautiful.</span>
            <span>Cute.</span>
            <span>Delightful.</span>
            <span>Emotional.</span>
          </div>
        </h2>
      </section>
    </div>
  );
};

export default Rotate;
