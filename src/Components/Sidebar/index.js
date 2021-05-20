import React from "react";
import RadioButton from "../RadioButton";

import {
  SidebarWrapper,
  Title,
  Form,
  InputGroup,
  Input,
  Label,
  TextArea,
  Btn,
} from "./SidebarElements";

function Sidebar({
  handleSubmit,
  handleChangeFilter,
  notesFilter,
  noteTitle,
  noteContent,
  setNoteTitle,
  setNoteContent,
}) {
  return (
    <>
      <SidebarWrapper>
        <Title>Caderno de Notas</Title>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="title">Título da Anotação</Label>
            <Input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setNoteTitle(e.target.value)}
              value={noteTitle}
              maxLength={30}
              required
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="notes">Anotações</Label>
            <TextArea
              name="notes"
              id="notes"
              onChange={(e) => setNoteContent(e.target.value)}
              value={noteContent}
              required
            ></TextArea>
          </InputGroup>

          <Btn id="btn_submit" type="submit">
            Salvar
          </Btn>
          <RadioButton
            notesFilter={notesFilter}
            handleChangeFilter={handleChangeFilter}
          />
        </Form>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;
