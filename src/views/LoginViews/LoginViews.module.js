import styled from '@emotion/styled';

export const LoginContainer = styled.div`
  padding: 60px;
  max-width: 530px;
  margin: 50px auto;
`;

export const Title = styled.h1`
  font-size: 42px;
  text-align: center;
  margin-bottom: 45px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  border: transparent;
  border-bottom: solid 1px #fff;
  background-color: transparent;
`;

export const Button = styled.button`
  text-decoration: none;
  color: #3a668a;
  padding: 12px;
  background-color: #D6E5F1;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  width: 130px;
  margin: 0 auto;
  transition: background-color 0.3s linear, color 0.3s linear;

  &:hover{
  background-color: #3a668a;
  color: #D6E5F1
`;

export const Text = styled.p`
  font-weight: 600;
  margin-top: 50px;
  text-align: center;
  font-size: 18px;
`;