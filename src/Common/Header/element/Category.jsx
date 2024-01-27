import React from "react";
import styled from "styled-components";

export default function Category() {
  return (
    <CategoryContainer>
      <CatrgoryIcon></CatrgoryIcon>
      <span>카테고리</span>
    </CategoryContainer>
  );
}

export const CategoryContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  & span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: rgb(51, 51, 51);
  }
  :hover {
    cursor: pointer;
    & span {
      /* color: rgb(95, 0, 128); */
    }
  }
`;

export const CatrgoryIcon = styled.span`
  width: 16px;
  height: 14px;
  margin-top: -2px;
  margin-right: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
    0px 0px / 16px 14px no-repeat;
  :hover {
    color: rgb(95, 0, 128);
    cursor: pointer;
  }
`;
