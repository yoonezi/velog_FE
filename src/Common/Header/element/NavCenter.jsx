import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavCenter() {
  return (
    <Center>
      <li>
        <NavLink to="/newproduct">트렌드</NavLink>
      </li>
      <li>
        <span>최신</span>
      </li>
      <li>
        <span>피드</span>
      </li>
    </Center>
  );
}

export const NavCenterWrap = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
  padding-top: 10px;
`;

export const Center = styled.ul`
  flex: 0 0 0%;
  display: flex;
  list-style-type: none;

  & li {
    display: flex;
    justify-content: center;
    width: 150px;
    height: 55px;
    padding-top: 18px;
    line-height: 20px;
    text-align: center;

    & span:hover {
      text-decoration: underline;
      /* color: rgb(95, 0, 128); */
      cursor: pointer;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  height: fit-content;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: #333;
  :hover {
    text-decoration: underline;
    /* color: rgb(95, 0, 128); */
    cursor: pointer;
  }
`;
