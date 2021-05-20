import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 320px;
  margin-bottom: 30px;
  background: #fff;
  box-shadow: 0 0 0 14px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 30px 20px;
  position: fixed;

  @media screen and (max-width: 900px) {
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  font-display: block;
  color: #333;
`;

export const Form = styled.form`
  margin-top: 30px;
`;

export const InputGroup = styled.div``;

export const Label = styled.label`
  color: #acacac;
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

export const TextArea = styled.textarea`
  margin-top: 7px;
  width: 100%;
  height: 200px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
  background: #fff;
  resize: none;
`;

export const Btn = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #f2a090;
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
`;
