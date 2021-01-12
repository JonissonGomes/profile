import React from "react";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div>
      Sou o EXP
      <Link to="/about">
        <button>Clica em mim, vou para o sobre</button>
      </Link>
    </div>
  );
}
export default Experience;
