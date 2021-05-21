import styled from "styled-components";

export const ListItem = styled.li`
  background: ${(props) =>
    props.priority ? "var(--primary)" : "var(--secondary)"};
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 20px 10px 20px;
`;

export const TitleNote = styled.h3`
  font-size: 16px;
  color: #333;
`;

export const HeaderNote = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteIconWrap = styled.div`
  color: gray;
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      props.priority ? "var(--secondary)" : "var(--primary)"};
    transition: 0.2s;
  }
`;

export const NoteContent = styled.textarea`
  padding: 7px;
  margin-top: 7px;
  margin-bottom: 5px;
  width: 100%;
  height: 130px;
  font-size: 14px;
  color: var(--blue);
  background: ${(props) =>
    props.priority ? "var(--primary)" : "var(--secondary)"};
  border: 0;
  resize: none;

  &:hover {
    cursor: default;
  }
`;

export const PriorityIconWrap = styled.div`
  cursor: pointer;
  color: ${(props) => (props.priority ? "var(--secondary)" : "var(--primary)")};

  &:hover {
    transition: all ease 0.2s;
  }
`;
