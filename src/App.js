import React, { useEffect, useState } from "react";
import Notes from "./Components/Notes";
import RadioButton from "./Components/RadioButton";
import api from "./services/api";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allAnnotations, setAllAnnotations] = useState([]);
  const [selectedValue, setSelectedValue] = useState("all");

  async function getAllAnnotations() {
    try {
      const response = await api.get("/annotations");
      setAllAnnotations(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get("/priorities", { params });
    if (response) {
      setAllAnnotations(response.data);
    }
  }

  function handleChange(e) {
    console.log(e);
    setSelectedValue(e.value);

    if (e.checked && e.value !== "all") {
      loadNotes(e.value);
    } else {
      getAllAnnotations();
    }
  }

  useEffect(() => {
    return getAllAnnotations();
  }, []);

  useEffect(() => {
    function enableSubmitButton() {
      let btn = document.getElementById("btn_submit");

      if (title && notes) {
        btn.style.background = "#eb8f7a";
      } else {
        btn.style.background = "#ffd3ca";
      }
    }

    return enableSubmitButton();
  }, [title, notes]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/annotations", {
        title,
        notes,
        priority: false,
      });
      setAllAnnotations([...allAnnotations, response.data]);
    } catch (error) {
      console.log(error);
    }

    setSelectedValue("all");
    getAllAnnotations();
    setTitle("");
    setNotes("");
  }

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/annotations/${id}`);
      if (response) {
        setAllAnnotations(
          allAnnotations.filter((annotation) => annotation._id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleChangePriority(id) {
    try {
      const response = await api.post(`/priorities/${id}`);
      if (response && selectedValue !== "all") {
        loadNotes(selectedValue);
      } else {
        getAllAnnotations();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="app">
        <aside>
          <strong>Caderno de Notas</strong>

          <form onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="title">Título da Anotação</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                maxLength={30}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="notes">Anotações</label>
              <textarea
                name="notes"
                id="notes"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
                required
              ></textarea>
            </div>

            <button id="btn_submit" type="submit">
              Salvar
            </button>
          </form>
          <RadioButton
            selectedValue={selectedValue}
            handleChange={handleChange}
          />
        </aside>

        <main>
          <ul>
            {allAnnotations.map((item, i) => (
              <Notes
                key={i}
                annotation={item}
                handleDelete={handleDelete}
                handleChangePriority={handleChangePriority}
              />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
