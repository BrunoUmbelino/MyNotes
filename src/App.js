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

  useEffect(() => {
    async function getAllAnnotations() {
      try {
        const response = await api.get("/annotations");
        setAllAnnotations(response.data);
      } catch (error) {
        console.log(error);
      }
    }

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

    setTitle("");
    setNotes("");
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
          <RadioButton />
        </aside>

        <main>
          <ul>
            {allAnnotations.map((item, i) => (
              <Notes key={i} annotation={item} />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
