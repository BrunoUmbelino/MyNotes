import React from "react";
import RadioButton from "../RadioButton";

import {
  SidebarWrapper,
  Title,
  Form,
  InputGroup,
  Label,
  TextArea,
  Btn,
} from "./SidebarElements";

function Sidebar({
  handleSubmit,
  handleChangeFilter,
  notesFilter,
  noteContent,
  setNoteContent,
}) {
  return (
    <>
      <SidebarWrapper>
        <Title>MyNotes</Title>

        <Form onSubmit={handleSubmit}>
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
