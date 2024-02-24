/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    key: "1",
    label: <a href="/category/AI">인공지능ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</a>,
    category: "AI",
  },
  {
    key: "2",
    label: <a href="/category/BACKEND">백엔드</a>,
    category: "BACKEND",
  },
  {
    key: "3",
    label: <a href="/category/DEVOPS">데브옵스</a>,
    category: "DEVOPS",
  },
  {
    key: "4",
    label: <a href="/category/IMBEDDED">임베디드</a>,
    category: "IMBEDDED",
  },
  {
    key: "5",
    label: <a href="/category/FRONTEND">프론트엔드</a>,
    category: "FRONTEND",
  },
  {
    key: "6",
    label: <a href="/category/GAME">게임</a>,
    category: "GAME",
  },
];

export default function Category({ onCategorySelect }) {
  const navigate = useNavigate();

  const handleCategorySelect = (selectedCategory) => {
    onCategorySelect(selectedCategory); // 선택된 카테고리를 전달
    navigate(`/categorypost/${selectedCategory}`);
  };

  return (
    <CategoryContainer>
      <CatrgoryIcon></CatrgoryIcon>

      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        onChange={handleCategorySelect}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <span>카테고리</span>
          </Space>
        </a>
      </Dropdown>
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
