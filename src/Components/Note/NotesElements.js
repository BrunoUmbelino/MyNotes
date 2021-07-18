import styled from "styled-components";

export const ListItem = styled.li`
  background: ${(props) =>
    props.priority ? "var(--primary)" : "var(--white)"};
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 20px 10px 20px;
`;

export const TitleNote = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => (props.priority ? "var(--white)" : "var(--black)")};
`;

export const HeaderNote = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteIconWrap = styled.div`
  color: ${(props) => (props.priority ? "var(--white)" : "var(--black)")};
  cursor: pointer;

  &:hover {
    color: black;
    transition: 0.2s;
  }
`;

export const NoteContent = styled.textarea`
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 5px;
  width: 100%;
  height: 130px;
  font-size: 16px;
  color: ${(props) => (props.priority ? "var(--white)" : "var(--black)")};
  background: ${(props) =>
    props.priority ? "var(--primary)" : "var(--secondary)"};
  border: 0;
  resize: none;
  text-transform: capitalize;

  &:hover {
    cursor: default;
  }
`;

export const PriorityIconWrap = styled.div`
  display: inline-block;
  cursor: pointer;
  color: ${(props) => (props.priority ? "var(--white)" : "var(--black)")};

  &:hover {
    color: black;
    transition: 0.2s;
  }
`;
