import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavHeader() {
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  const handleWritePost = () => {
    if (accessToken) {
      navigate("/writepost");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <NavBody>
        <NavWrap>
          <NavLeft>
            <InfoDelivery onClick={handleWritePost}>새 글 작성</InfoDelivery>
          </NavLeft>
        </NavWrap>
      </NavBody>
    </>
  );
}

export const NavBody = styled.div`
  min-width: 1050px;
  letter-spacing: -0.3px;
  background-color: rgb(255, 255, 255);
  position: relative;
  box-shadow: rgb(0 0 0 / 7%) 0px 3px 4px 0px;
  width: 100%;
`;

export const NavWrap = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1050px;
  height: 56px;
  margin: 0px auto;
`;

export const NavRight = styled.div``;
export const Categorywrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;

  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -0.3px;
    color: #212529;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;

  & a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
`;

export const InfoDelivery = styled.div`
  height: 16px;
  padding: 6px 16px;
  border-radius: 18px;
  border: 1px solid #212529;
  color: #212529;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.32px;

  & span {
    font-weight: 500;
    color: #212529;
  }

  &:hover {
    background-color: #212529;
    color: #ffffff;
  }
`;
