import React from "react";
import SuggestDymmy from "./SuggestDummy";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Pagination } from "antd";
import Category from "../Common/Header/element/Category";

const items = [
  {
    label: "최신순",
    key: "LATEST",
  },
  {
    label: "좋아요 순",
    key: "LIKES",
  },
  {
    label: "조회수 순",
    key: "VIEWS",
  },
];

export default function Suggest() {
  const [posts, setPosts] = useState([]);
  const [sortType, setSortType] = useState("LATEST");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const handleMenuClick = (item) => {
    setSortType(item.key);
    setPage(0);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const fetchPosts = async (sort, page) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/post/search/main?page=${page}&size=6&sort=${sort}`
      );
      setPosts(response.data.postResponses);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(sortType, page);
  }, [sortType, page]);

  return (
    <SuggestWrap>
      <DropdownWrap>
        <Category />
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              {items.find((item) => item.key === sortType)?.label}{" "}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </DropdownWrap>
      <SuggestBody>
        {posts?.map((post) => (
          <SuggestDymmy
            key={post.postId}
            title={post.title}
            url={post.mainImageUrl}
            content={post.content}
            memberName={post.memberName}
            registerDate={post.registerDate}
            postId={post.postId}
          />
        ))}
      </SuggestBody>
      <Pagination
        current={page + 1}
        total={50}
        onChange={(pageNumber) => setPage(pageNumber - 1)}
        style={{ textAlign: "end" }}
      />
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
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const DropdownWrap = styled.div`
  width: 1032px;
  text-align: end;
  margin-bottom: 20px;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: space-between;
`;
