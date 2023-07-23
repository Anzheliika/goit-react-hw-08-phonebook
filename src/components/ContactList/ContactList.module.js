import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-around;
`;

export const List = styled.ul`
  margin: 20px auto;
  width: 500px;
  list-style: circle;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Button = styled.button`
border-radius: 5px;
font-size: 16px;
border: none;
cursor: pointer;
padding: 10px 20px;
background-color: #ff10a2;
color: #000;
margin: 0 auto;

transition: background-color 0.3s linear;
    
&:hover{
  background-color: #F6A1E7;
`;
