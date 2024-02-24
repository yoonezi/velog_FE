import {
  ClockCircleOutlined,
  MessageOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Avatar, List, Space, Button } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Common/Header/Header";
import styled from "styled-components";
import Layouts from "../Common/Layout";

const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken");

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function MyPosts() {
  const { memberId } = useParams();
  const [postData, setPostData] = useState([]);
  const [member, setMember] = useState([]);
  const [memberEmail, setEmail] = useState([]);
  const [followerResponses, setFollowerResponses] = useState([]);
  const [followStatus, setFollowStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/post/search/member/${memberId}?page=0&size=10`,
        {
          page: 0,
          size: 10,
        }
      )
      .then((response) => {
        setPostData(response.data.postResponses);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [memberId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/member/search/${memberId}`)
      .then((response) => {
        setMember(response.data);
        setEmail(response.data.email);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [memberId]);

  useEffect(() => {
    if (member.email) {
      axios
        .get(
          `http://localhost:8080/api/follow/search/followCount/${member.email}`
        )
        .then((response) => {
          setFollowerResponses(response.data);
          console.log(response.data);
          console.log(member.email);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [member.email]);

  useEffect(() => {
    const fetchFollowStatus = async () => {
      const accessToken = getAccessTokenFromLocalStorage();
      try {
        const response = await axios.get(
          `http://localhost:8080/api/follow/status/${memberId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.data.followStatus === "FOLLOW") {
          setFollowStatus(true);
        } else {
          setFollowStatus(false);
        }
      } catch (error) {
        console.error("Error fetching follow status:", error);
      }
    };
    fetchFollowStatus();
  }, [member.email]);

  const handleFollowClick = async () => {
    const accessToken = getAccessTokenFromLocalStorage();
    try {
      if (!accessToken) {
        // 로그인되지 않은 상태일 때 처리
        alert("로그인 후 이용 가능합니다.");
        // 로그인 페이지로 이동
        navigate("/login");
        return;
      }

      await axios.post(
        `http://localhost:8080/api/follow/${memberId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("팔로우 되었습니다.");
      setFollowStatus(true);
    } catch (error) {
      console.error("Error following:", error);
    }
  };

  const handleUnfollowClick = async () => {
    const accessToken = getAccessTokenFromLocalStorage();
    try {
      await axios.delete(`http://localhost:8080/api/follow/${memberId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("언팔로우 되었습니다.");
      setFollowStatus(false);
    } catch (error) {
      console.error("Error unfollowing:", error);
    }
  };

  return (
    <>
      <Header />
      <Layouts>
        <Container>
          <Body>
            <UserInfo>
              <UserProfileSection>
                <UserProfileLeft>
                  <Avatar
                    size={{
                      xl: 50,
                    }}
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=4"
                  />

                  <UserProfileUserInfo>
                    <UserProfileName>{member.nickname}</UserProfileName>
                    <UserProfileEmail>{member.email}</UserProfileEmail>
                  </UserProfileUserInfo>
                </UserProfileLeft>
                <ButtonWapper>
                  <div data-testid="follow-btn" className="sc-kmQMED iNcMsu">
                    {followStatus ? (
                      <Button
                        style={{ color: "#333333" }}
                        onClick={handleUnfollowClick} // 팔로잉 상태일 때는 handleUnfollowClick 호출
                      >
                        팔로잉
                      </Button>
                    ) : (
                      <Button
                        style={{ color: "#12B886" }}
                        onClick={handleFollowClick} // 팔로우 상태일 때는 handleFollowClick 호출
                      >
                        팔로우
                      </Button>
                    )}
                  </div>
                </ButtonWapper>
              </UserProfileSection>
              <UserProfileSeperator></UserProfileSeperator>
              <UserProfileBottom>
                <UserProfileFollowInfo>
                  <a
                    className="UserProfile_info__MFcK0"
                    href={`/${memberId}/followers`}
                  >
                    <FollowCnt>{followerResponses.followerCount}</FollowCnt>
                    <FollowText>팔로워</FollowText>
                  </a>
                  <a
                    className="UserProfile_info__MFcK0"
                    href={`/${memberId}/followings`}
                    style={{ marginLeft: "16px" }}
                  >
                    <FollowCnt>{followerResponses.followingCount}</FollowCnt>
                    <FollowText>팔로잉</FollowText>
                  </a>
                </UserProfileFollowInfo>
              </UserProfileBottom>
            </UserInfo>

            <List
              itemLayout="vertical"
              size="large"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 3,
              }}
              dataSource={postData}
              renderItem={(item) => (
                <List.Item
                  onClick={() => navigate(`/post/${item.postId}`)}
                  style={{ cursor: "pointer" }}
                  key={item.title}
                  actions={[
                    <IconText
                      icon={ClockCircleOutlined}
                      text={item.registerDate}
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={HeartOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                  extra={
                    <img
                      width={200}
                      height={200}
                      alt="logo"
                      src={`http://localhost:8080/post/image/${item.mainImageUrl}`}
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={{
                          xl: 30,
                        }}
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=4"
                      />
                    }
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  <ContentBox>{item.content}</ContentBox>
                </List.Item>
              )}
            />
          </Body>
        </Container>
      </Layouts>
    </>
  );
}

const Container = styled.div`
  min-width: 1050px;
  margin-bottom: 160px;
  display: flex;
`;

const Body = styled.div`
  width: 100%;
  margin: 0px auto;
  margin-bottom: 60px;
  letter-spacing: -0.6px;
`;

const ContentBox = styled.div`
  height: 50%;
`;

const UserInfo = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 32px;
`;

const UserProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserProfileLeft = styled.div`
  display: flex;
  align-items: center;
`;
const UserProfileUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;
const UserProfileName = styled.div`
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  color: #212529;
  & a {
    text-decoration: none;
    color: #212529;
  }
`;

const UserProfileEmail = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin-top: 4px;
  letter-spacing: -0.004em;
  font-weight: 400;
  color: #495057;

  & a {
    text-decoration: none;
    color: #495057;
  }
`;

const UserProfileSeperator = styled.div`
  background: #e9ecef;
  width: 100%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 24px;
`;
const UserProfileBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserProfileFollowInfo = styled.div`
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  & a {
    text-decoration: none;
  }
`;

const FollowCnt = styled.span`
  color: #212529;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
`;

const FollowText = styled.span`
  color: #495057;
  font-size: 16px;
  margin-left: 4px;
  font-weight: 400;
  text-decoration: none;
`;
const ButtonWapper = styled.div`
  /* display: flex;
  -webkit-box-pack: end; */
  justify-content: flex-end;
  text-align: right;
`;
