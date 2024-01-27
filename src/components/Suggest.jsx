import React from "react";
import { productlist } from "../ProductDummy";
import SuggestDymmy from "./SuggestDummy";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Suggest() {
  return (
    <SuggestWrap>
      <SuggestBody>
        <>
          {productlist?.map((item) => {
            return (
              <SuggestDymmy
                title={item.title}
                url={item.url}
                content={item.content}
                memberName = {item.memberName}
                likeCount = {item.likeCount}
              />
            );
          })}
        </>
      </SuggestBody>
    </SuggestWrap>
  );
}

export const SuggestWrap = styled.div`
  height: 100%;
  margin-bottom: 30px;
  margin-top: -20px;
`;

export const SuggestHead = styled.div`
  margin-bottom: 27px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  & div {
    position: relative;
    display: flex;
    padding: 8px 0px 8px 8px;
  }
  & div > span {
    color: rgb(51, 51, 51);
    font-size: 28px;
    line-height: 1.15;
    letter-spacing: -0.26px;
    font-weight: 500;
    text-align: center;
  }
`;

export const SuggestBody = styled.div`
  /* position: relative; */
  width: 1050px;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap; // This allows items to wrap to the next line
  justify-content: space-between; // Adjust as needed
`;
