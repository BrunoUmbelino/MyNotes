import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import api from "../../services/api";

import "./style.css";
import "./style-priority.css";

function Note({ note, handleDelete, handleChangePriority }) {
  const [newContent, setNewContent] = useState("");

  async function saveContent(e, content) {
    if (newContent !== content) {
      await api.post(`/contents/${note._id}`, {
        content: newContent,
      });
    }
    let textarea = e.target;
    textarea.style.cursor = "default";
    textarea.style.boxShadow = "none";
  }

  function changeBorder(e, priority) {
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
        className={note.priority ? "notepad-infos-priority" : "notepad-infos"}
      >
        <div>
          <strong>{note.title}</strong>
          <div>
            <AiTwotoneDelete size="22" onClick={() => handleDelete(note._id)} />
          </div>
        </div>
        <textarea
          name="content"
          id="content"
          defaultValue={note.content}
          onClick={(e) => changeBorder(e.target, note.priority)}
          onChange={(e) => setNewContent(e.target.value)}
          onBlur={(e) => saveContent(e, note.content)}
        ></textarea>
        <span>
          <AiOutlineExclamationCircle
            size="22"
            onClick={() => handleChangePriority(note._id)}
          />
        </span>
      </li>
    </>
  );
}

export default Note;
