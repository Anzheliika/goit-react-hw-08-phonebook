import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  box-shadow: 6px 6px 18px -7px rgba(0, 0, 0, 0.9);
  padding: 15px;
  margin: 30px auto;
`;

export const Label = styled.label`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 18px;
  width: 450px;
  background-color: transparent;
  border: solid 1px #000;
  border-radius: 10px;
  margin-top: 10px;
`;