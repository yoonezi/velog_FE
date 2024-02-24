import React, { useEffect, useState } from "react";
import { Avatar, List, Space } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Common/Header/Header";
import styled from "styled-components";
import Layouts from "../Common/Layout";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Follower() {
  const { memberId } = useParams();
  const [member, setMember] = useState([]);
  const [memberEmail, setEmail] = useState([]);
  const [followerResponses, setFollowerResponses] = useState([]);

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
        .get(`http://localhost:8080/api/follow/search/follower/${member.email}`)
        .then((response) => {
          setFollowerResponses(response.data.followerResponses);
          console.log(response.data);
          console.log(member.email);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [member.email]);

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
              </UserProfileSection>
              <UserProfileSeperator></UserProfileSeperator>
              <UserProfileBottom>
                <UserProfileFollowInfo>
                  <FollowCnt>{followerResponses.length}</FollowCnt>
                  <FollowText>명의 팔로워</FollowText>
                </UserProfileFollowInfo>
              </UserProfileBottom>
            </UserInfo>

            <List
              itemLayout="vertical"
              size="large"
              dataSource={followerResponses}
              renderItem={(follower) => (
                <List.Item key={follower.memberId}>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={{
                          xl: 30,
                        }}
                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=4"
                      />
                    }
                    title={
                      <a href={`/memberpost/${follower.memberId}`}>
                        {follower.nickname}
                      </a>
                    }
                    description={follower.email}
                  />
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
  /* justify-content: flex-end; */
  & a {
    text-decoration: none;
  }
`;

const FollowCnt = styled.span`
  color: #212529;
  font-size: 27px;
  font-weight: bold;
  text-decoration: none;
`;

const FollowText = styled.span`
  color: #495057;
  font-size: 27px;
  margin-left: 4px;
  font-weight: 400;
  text-decoration: none;
`;
