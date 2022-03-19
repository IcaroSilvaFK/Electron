import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  & + & {
    margin-top: 10px;
  }

  border: 1px solid ${(props) => (props.isValid ? "#FC8181" : "#92e3a9")};
  border-radius: 3px;

  padding: 5px 8px;

  input {
    font-size: 16px;
    background-color: transparent;
  }

  position: relative;
`;

export const Separator = styled.div`
  width: 0.8px;
  height: 20px;

  background-color: rgba(0, 0, 0, 0.4);

  border-radius: 10px;
`;
