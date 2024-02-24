import React, { useEffect, useState } from "react";
import { Avatar, Button } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../Common/Header/Header";
import styled from "styled-components";
import Layouts from "../Common/Layout";

const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken");

export default function Setting() {
  const [memberId, setMemberId] = useState("");
  const [member, setMember] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [newNickname, setNewNickname] = useState("");

  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
    setNewNickname(member.nickname);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    const accessToken = getAccessTokenFromLocalStorage();
    axios
      .put(
        `http://localhost:8080/api/member/${memberId}`,
        {
          nickname: newNickname, // 수정된 닉네임을 요청 바디에 담음
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log("닉네임이 성공적으로 수정되었습니다.");
        // 서버에서 응답 받은 데이터를 업데이트
        setMember({
          ...member,
          nickname: newNickname,
        });
        setIsEditing(false); // 수정 모드 종료
        window.location.reload();

        // 수정된 닉네임을 로컬 스토리지에 저장
        localStorage.setItem("nickname", newNickname);
      })
      .catch((error) => {
        console.error("닉네임 수정 중 오류 발생:", error);
        // 오류 처리
      });
  };

  const handleDeleteMember = () => {
    const accessToken = getAccessTokenFromLocalStorage();
    axios
      .delete(`http://localhost:8080/api/member/${memberId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("회원 탈퇴가 성공적으로 이루어졌습니다.");
        localStorage.removeItem("memberId");
        localStorage.removeItem("email");
        localStorage.removeItem("nickname");
        localStorage.removeItem("accessToken");

        navigate("/");
      })
      .catch((error) => {
        console.error("회원 탈퇴 중 오류 발생:", error);
      });
  };

  const handleNicknameChange = (e) => {
    setNewNickname(e.target.value);
  };

  useEffect(() => {
    const storedMemberId = localStorage.getItem("memberId");
    if (storedMemberId) {
      setMemberId(storedMemberId);
    }
  }, []);

  useEffect(() => {
    if (memberId) {
      axios
        .get(`http://localhost:8080/api/member/search/${memberId}`)
        .then((response) => {
          setMember(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching member:", error);
        });
    }
  }, [memberId]);
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
                    {isEditing ? (
                      <NicknameInput
                        type="text"
                        value={newNickname}
                        onChange={handleNicknameChange}
                      />
                    ) : (
                      <UserProfileName>{member.nickname}</UserProfileName>
                    )}
                    <UserProfileEmail>{member.email}</UserProfileEmail>
                  </UserProfileUserInfo>
                </UserProfileLeft>
              </UserProfileSection>
              <UserProfileSeperator></UserProfileSeperator>
              <UserProfileBottom>
                <ButtonWapper>
                  {isEditing ? (
                    <>
                      <Button
                        style={{ width: "100px", marginRight: "10px" }}
                        onClick={handleCancelEdit}
                      >
                        취소
                      </Button>
                      <Button
                        style={{ width: "100px" }}
                        onClick={handleSaveEdit}
                      >
                        저장
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        style={{ width: "100px", marginRight: "10px" }}
                        onClick={handleEditClick}
                      >
                        수정
                      </Button>
                      <Button
                        style={{ width: "100px" }}
                        type="primary"
                        danger
                        ghost
                        onClick={handleDeleteMember}
                      >
                        탈퇴
                      </Button>
                    </>
                  )}
                </ButtonWapper>
              </UserProfileBottom>
            </UserInfo>
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

const NicknameInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;
