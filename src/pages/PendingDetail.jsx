import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Common/Header/Header";
import Layouts from "../Common/Layout";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { Button, Tag, List, Avatar } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken");

export default function PendingDetail() {
  const [status, setStatus] = useState(false);
  const [isHeartFilled, setHeartFilled] = useState(false);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { postId } = useParams();
  const [followeeId, setFolloweeId] = useState("");
  const [followStatus, setFollowStatus] = useState(false);

  const navigate = useNavigate();

  const memberId = parseInt(localStorage.getItem("memberId"), 10);

  //////////////////////////////// localStorage 에 accesstoken 있으면 상태 true
  useEffect(() => {
    if (localStorage.getItem("accessToken") == null) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, []);

  //////////////////////////////// post/${id} search ///////////////////////////////////
  useEffect(() => {
    const accessToken = getAccessTokenFromLocalStorage();

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/post/pending/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPost(response.data);
        setFolloweeId(response.data.memberId);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  //////////////////////////////// post edit & delete & follow buttons //////////////////////////////////
  const handleEditClick = () => {
    navigate(`/edit/pending/${postId}`);
  };

  const handleDeleteClick = async () => {
    const accessToken = getAccessTokenFromLocalStorage();
    try {
      await axios.delete(`http://localhost:8080/api/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate("/");
      console.log("게시물이 성공적으로 삭제되었습니다.");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <Header />
      <Layouts>
        <Container>
          <Body>
            <PostHeader>
              <div className="head-wrapper">
                <Title>{post.title}</Title>
                <TitleDetail>
                  <Information className="information">
                    <Link
                      to={`/memberpost/${post.memberId}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          textDecoration: "none",
                        }}
                      >
                        {post.memberName}
                      </span>
                    </Link>

                    <Separator className="separator">·</Separator>
                    <span>{post.registerDate}</span>
                  </Information>
                  <div className="sc-GEbAx ernGXu"></div>
                </TitleDetail>
                <UpdateDeleteBtnWrap>
                  {post.memberId === memberId && (
                    <>
                      <Button
                        style={{
                          marginRight: "8px",
                          color: "#868E96",
                          border: "none",
                        }}
                        onClick={handleEditClick}
                      >
                        수정
                      </Button>
                      <Button
                        style={{
                          color: "#868E96",
                          border: "none",
                        }}
                        onClick={handleDeleteClick}
                      >
                        삭제
                      </Button>
                    </>
                  )}
                </UpdateDeleteBtnWrap>
                <TagList>
                  {post.tagList &&
                    post.tagList.map((tag, index) => (
                      <Tag key={index} bordered={false} color="green">
                        {tag}
                      </Tag>
                    ))}
                </TagList>
              </div>
              <ContentBox>
                <Content> {post.content}</Content>
                <ImageBox>
                  {post.postImageList &&
                    post.postImageList.map((image, index) => (
                      <Image
                        key={index}
                        // src={`https://velog-yz.s3.ap-northeast-2.amazonaws.com/images/${image.url}`}
                        src={`http://localhost:8080/post/image/${image.url}`}
                        alt={`Image ${index}`}
                      />
                    ))}
                </ImageBox>
              </ContentBox>
            </PostHeader>
          </Body>
        </Container>
      </Layouts>
    </>
  );
}

const Container = styled.div`
  min-width: 1050px;
  margin-bottom: 60px;
  display: flex;
`;

const Body = styled.div`
  width: 100%;
  margin: 0px auto;
  letter-spacing: -0.6px;
  text-align: center;
`;

const PostHeader = styled.div`
  margin-top: 5.5rem;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: var(--text1);
  margin-bottom: 2rem;
  word-break: keep-all;
  transition: color 0.125s ease-in 0s;
`;

const TitleDetail = styled.div`
  font-size: 1rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;

const Separator = styled.div`
  margin: 0px 8px;
`;

const Information = styled.div`
  display: flex;
`;

const TagList = styled.div`
  margin-top: 0.875rem;
  margin-bottom: -0.875rem;
  min-height: 0.875rem;
`;

const ContentBox = styled.div`
  width: 768px;
  margin: 5rem auto 0px;
`;

const Content = styled.div`
  margin-bottom: 70px;
  white-space: pre-line; /* 이 속성을 추가하여 줄바꿈을 적용 */
  line-height: 1.7;
  letter-spacing: -0.004em;
`;

const CommentBox = styled.div``;

const CommentInnerBox = styled.div`
  & textarea {
    resize: none;
    outline: none;
    border: 1px solid #f1f3f5;
    margin-bottom: 1.5rem;
    width: 100%;
    border-radius: 4px;
    min-height: 6.125rem;
    font-size: 1rem;
    color: var(--text1);
    line-height: 1.75;
    background: var(--bg-element1);
  }
`;

const ButtonWapper = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;
const ImageBox = styled.div`
  /* display: flex; */
  /* gap: 8px; Adjust the gap as needed */
  margin-bottom: 70px;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const TotalCommentCount = styled.div`
  text-align: justify;
  font-size: 1.125rem;
  line-height: 1.5;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Like = styled.div`
  text-align: justify;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const UpdateDeleteBtnWrap = styled.div`
  text-align: end;
  margin-bottom: 1rem;
  cursor: pointer;
  margin-top: 10px;
`;
