import React from "react";
import Header from "../Common/Header/Header";
import styled from "styled-components";

import Suggest from "../components/Suggest";

export default function Main() {
  return (
    <>
      <Header />
      <MainWrap>
        <Suggest />
      </MainWrap>
    </>
  );
}

export const MainWrap = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 60px 0px;
`;

export const MainTitle = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  & span {
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    position: relative;
    display: flex;
    padding: 8px 0px 8px 8px;
    /* margin-bottom: 27px; */
  }
  & h4 {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.45;
    letter-spacing: -0.2px;
    text-align: center;
    color: rgb(153, 153, 153);
    margin: 0px;
    margin-top: 2px;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    place-content: center;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    place-content: center;
  }
  & li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  & button {
    display: block;
    padding: 10px 20px;
    border-radius: 22px;
    margin: 0px 5px 20px;
    font-size: 14px;
    height: 40px;
    line-height: 16px;
    background-color: rgb(247, 247, 247);
    color: rgb(51, 51, 51);
    border: none;
  }
`;
