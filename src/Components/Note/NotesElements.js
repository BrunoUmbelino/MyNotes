import styled from "styled-components";

export const ListItem = styled.li`
  background: ${(props) => (props.priority ? "#eb8f7a" : "#fff")};
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
  color: #ffeae6;
  cursor: pointer;

  &:hover {
    color: #eb8f7a;
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
  color: #666;
  background: ${(props) => (props.priority ? "#eb8f7a" : "#fff")};
  border: 0;
  resize: none;

  &:hover {
    cursor: default;
  }
`;

export const PriorityIconWrap = styled.div`
  color: #c4c4c4;
  cursor: pointer;

  &:hover {
    color: #eb8f7a;
    transition: 0.2s;
  }
`;
