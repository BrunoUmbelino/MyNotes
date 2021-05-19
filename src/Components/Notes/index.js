import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import api from "../../services/api";

import "./style.css";
import "./style-priority.css";

function Notes({ annotation, handleDelete, handleChangePriority }) {
  const [changedNote, setChangedNote] = useState("");

  async function handleSave(e, notes) {
    if (changedNote && changedNote !== notes) {
      await api.post(`/contents/${annotation._id}`, {
        notes: changedNote,
      });
    }
    e.style.cursor = "default";
    e.style.boxShadow = "none";
  }

  function handleEdit(e, priority) {
    e.style.cursor = "text";
    e.style.borderRadius = "5px";

    if (priority) {
      e.style.boxShadow = "0 0 5px white";
    } else {
      e.style.boxShadow = "0 0 5px gray";
    }
  }

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
            <AiTwotoneDelete
              size="22"
              onClick={() => handleDelete(annotation._id)}
            />
          </div>
        </div>
        <textarea
          name=""
          id=""
          value={annotation.notes}
          onClick={(e) => handleEdit(e.target, annotation.priority)}
          onChange={(e) => setChangedNote(e.target.value)}
          onBlur={(e) => handleSave(e.target, annotation.notes)}
        ></textarea>
        <span>
          <AiOutlineExclamationCircle
            size="22"
            onClick={() => handleChangePriority(annotation._id)}
          />
        </span>
      </li>
    </>
  );
}

export default Notes;
