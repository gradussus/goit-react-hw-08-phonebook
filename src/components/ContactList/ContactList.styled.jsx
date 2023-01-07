import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: tomato;
  border-radius: 10px;
  padding: 25px;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  text-align: start;
`;

export const DeleteBtn = styled.button``;
