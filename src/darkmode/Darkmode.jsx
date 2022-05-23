import { useState } from "react";

const Darkmode = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={isActive ? "_skills" : "_skills__light"}>
      <button type="button" onClick={() => setIsActive(!isActive)}>
        DarkMode
      </button>
    </div>
  );
};

export default Darkmode;
