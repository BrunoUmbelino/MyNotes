import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

import "./style.css";

function RadioButton({ selectedValue, handleChange }) {
  const CustomRadio = withStyles({
    root: {
      color: "#ffd3ca",
      "&$checked": {
        color: "#eb8f7a",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <>
      <div className="radioOptions">
        <div>
          <CustomRadio
            value="all"
            checked={selectedValue === "all"}
            onChange={(e) => handleChange(e.target)}
          />
          <span>Todos</span>
        </div>
        <div>
          <CustomRadio
            value="true"
            checked={selectedValue === "true"}
            onChange={(e) => handleChange(e.target)}
          />
          <span>Prioridade</span>
        </div>
        <div>
          <CustomRadio
            value="false"
            checked={selectedValue === "false"}
            onChange={(e) => handleChange(e.target)}
          />
          <span>Normal</span>
        </div>
      </div>
    </>
  );
}

export default RadioButton;
