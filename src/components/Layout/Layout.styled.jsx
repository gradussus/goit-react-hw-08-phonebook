import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
background-color: tomato;
padding-top: 25px;
padding-bottom: 25px;
width: 100%;
`

export const Link = styled(NavLink)`
margin: 10px;
  color: black;
`