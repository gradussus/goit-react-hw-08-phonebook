import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: tomato;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const Link = styled(NavLink)`
  margin: 10px;
  color: black;
`;
export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  align-content: stretch;
`;
export const Main = styled.main`
  flex: 1 1 auto;
  background-image: linear-gradient(90deg, transparent 81px, #ED82AD 81px, #ED82AD 84px, transparent 84px), linear-gradient(#bbb 1px, transparent 0px), linear-gradient(90deg, #bbb 1px, transparent 0px);
  background-size: 100% 100%, 20px 20px, 20px 20px;
  background-position: 0 0, -1px -1px, -1px 1px;
`;
export const Footer = styled.footer`
  background-color: tomato;
  padding-bottom: 25px;
  padding-top: 25px;
`;
export const SocialLink = styled.a`
  color: black;
`;
