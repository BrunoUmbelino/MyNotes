import React from "react";

import { RadioOption, RadioWrapper, CustomRadio } from "./radioBtnElements";

function RadioButton({ notesFilter, handleChangeFilter }) {
  return (
    <>
      <RadioWrapper>
        <RadioOption>
          <CustomRadio
            value="all"
            checked={notesFilter === "all"}
            onChange={(e) => handleChangeFilter(e.target)}
          />
          <span>Todos</span>
        </RadioOption>

        <RadioOption>
          <CustomRadio
            value="true"
            checked={notesFilter === "true"}
            onChange={(e) => handleChangeFilter(e.target)}
          />
          <span>Prioridade</span>
        </RadioOption>

        <RadioOption>
          <CustomRadio
            value="false"
            checked={notesFilter === "false"}
            onChange={(e) => handleChangeFilter(e.target)}
          />
          <span>Normal</span>
        </RadioOption>
      </RadioWrapper>
    </>
  );
}

export default RadioButton;
