import React from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import "./style.css";
import "./style-priority.css";

function Notes({ annotation }) {
  return (
    <>
      <li
        className={
          annotation.priority ? "notepad-infos-priority" : "notepad-infos"
        }
      >
        <div>
          <strong>{annotation.title}</strong>
          <div>
            <AiTwotoneDelete size="22" />
          </div>
        </div>
        <textarea name="" id="" defaultValue={annotation.notes}></textarea>
        <span>
          <AiOutlineExclamationCircle size="22" />
        </span>
      </li>
    </>
  );
}

export default Notes;
