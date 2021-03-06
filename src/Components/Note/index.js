import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import api from "../../services/api";

import {
  TitleNote,
  ListItem,
  HeaderNote,
  DeleteIconWrap,
  NoteContent,
  PriorityIconWrap,
} from "./NotesElements";

function Note({ note, handleDelete, handleChangePriority, i }) {
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

  function generatorId(i) {
    let id = i + 1;
    return (id = id < 9 ? `0${id}` : `${id}`);
  }

  return (
    <>
      <ListItem
        priority={note.priority}
        className={note.priority ? "notepad-infos-priority" : "notepad-infos"}
      >
        <HeaderNote>
          <TitleNote priority={note.priority}>{generatorId(i)}</TitleNote>
          <DeleteIconWrap priority={note.priority}>
            <AiTwotoneDelete size="22" onClick={() => handleDelete(note._id)} />
          </DeleteIconWrap>
        </HeaderNote>
        <NoteContent
          priority={note.priority}
          name="content"
          id="content"
          defaultValue={note.content}
          onChange={(e) => setNewContent(e.target.value)}
          onBlur={(e) => saveContent(e, note.content)}
        ></NoteContent>
        <PriorityIconWrap priority={note.priority}>
          <AiOutlineExclamationCircle
            size="22"
            onClick={() => handleChangePriority(note._id)}
          />
        </PriorityIconWrap>
      </ListItem>
    </>
  );
}

export default Note;
