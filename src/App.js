import React, { useEffect, useState } from "react";
import Note from "./Components/Note";
import Sidebar from "./Components/Sidebar";
import api from "./services/api";

import { AppWrap, ListNotes, Main } from "./AppElements";
import { GlobalStyle } from "./globalStyles";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [notesFilter, setNotesFilter] = useState("all");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/annotations", {
        title: noteTitle,
        content: noteContent,
        priority: false,
      });
      setAllNotes([...allNotes, response.data]);
    } catch (error) {
      console.log(error);
    }

    setNotesFilter("all");
    getAllAnnotations();
    setNoteTitle("");
    setNoteContent("");
  }

  async function getAllAnnotations() {
    try {
      const response = await api.get("/annotations");
      setAllNotes(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function filteredNotes(option) {
    const params = { priority: option };
    const response = await api.get("/priorities", { params });
    if (response) {
      setAllNotes(response.data);
    }
  }

  function handleChangeFilter(e) {
    console.log(e);
    setNotesFilter(e.value);

    if (e.checked && e.value !== "all") {
      filteredNotes(e.value);
    } else {
      getAllAnnotations();
    }
  }

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/annotations/${id}`);
      if (response) {
        setAllNotes(allNotes.filter((annotation) => annotation._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleChangePriority(id) {
    try {
      const response = await api.post(`/priorities/${id}`);
      if (response && notesFilter !== "all") {
        filteredNotes(notesFilter);
      } else {
        getAllAnnotations();
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return getAllAnnotations();
  }, []);

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("btn_submit");

      if (noteTitle && noteContent) {
        btn.style.background = "#eb8f7a";
      } else {
        btn.style.background = "#ffd3ca";
      }
    }

    return enableSubmitButton();
  }, [noteTitle, noteContent]);

  return (
    <>
      <AppWrap>
        <aside>
          <Sidebar
            handleSubmit={handleSubmit}
            handleChangeFilter={handleChangeFilter}
            notesFilter={notesFilter}
            noteTitle={noteTitle}
            noteContent={noteContent}
            setNoteTitle={setNoteTitle}
            setNoteContent={setNoteContent}
          />
        </aside>
        <Main>
          <ListNotes>
            {allNotes.map((item, i) => (
              <Note
                key={i}
                i={i}
                note={item}
                handleDelete={handleDelete}
                handleChangePriority={handleChangePriority}
              />
            ))}
          </ListNotes>
        </Main>
      </AppWrap>
      <GlobalStyle />
    </>
  );
}

export default App;
