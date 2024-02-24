import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../Common/Header/Header";
import NavHeader from "../Common/Header/NavHeader/NavHeader";
import Layouts from "../Common/Layout";
import { Btn } from "../components/Btn";
import { Input } from "../components/Input";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickConfirmButton = async () => {
    try {
      if (email === "" || password === "") {
        alert("이메일 혹은 비밀번호를 입력해주세요.");
        return;
      }

      // 로그인 요청 보내기
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      // const { accessToken } = response.data;

      // 로컬 스토리지에 accessToken 저장
      const { accessToken, nickname, memberId } = response.data;

      // 로컬 스토리지에 accessToken, 이메일, 닉네임 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("email", email);
      localStorage.setItem("nickname", nickname);
      localStorage.setItem("memberId", memberId);

      // alert("로그인에 성공했습니다.");
      nav("/"); // 로그인 성공 후 홈페이지로 이동
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleId = (e) => {
    setEmail(e.target.value);
  };

  const handlePw = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Header />
      <NavHeader />
      <Layouts>
        <Container>
          <Title>로그인</Title>
          <Body>
            <form>
              <InputArea>
                <InputWrapper>
                  <Input
                    height="54px"
                    fontSize="14px"
                    placeholder="아이디를 입력해주세요"
                    type="text"
                    name="userId"
                    value={email}
                    onChange={handleId}
                  />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    height="54px"
                    fontSize="14px"
                    placeholder="비밀번호를 입력해주세요"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePw}
                  />
                </InputWrapper>
              </InputArea>
              {/* <FindUserInfoArea>
                <p>아이디 찾기</p>
                <span></span>
                <p>비밀번호 찾기</p>
              </FindUserInfoArea> */}
              <BtnWrapper>
                <Btn
                  type="button"
                  width="100%"
                  height="54px"
                  border="0px none"
                  backgroundColor="#efefef"
                  color="rgb(51, 51, 51)"
                  fontSize="16px"
                  onClick={onClickConfirmButton}
                >
                  로그인
                </Btn>
                <div style={{ height: "10px" }}></div>
                <Btn
                  type="button"
                  width="100%"
                  height="54px"
                  fontSize="16px"
                  onClick={() => nav("/signup")}
                >
                  회원가입
                </Btn>
              </BtnWrapper>
            </form>
          </Body>
        </Container>
      </Layouts>
    </>
  );
}

const Container = styled.div`
  min-width: 1050px;
  margin-top: 90px;
  margin-bottom: 60px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 20px;
  text-align: center;
`;
const Body = styled.div`
  width: 340px;
  margin: 0px auto;
  letter-spacing: -0.6px;
`;
const InputArea = styled.div`
  margin-top: 30px;
`;
const InputWrapper = styled.div`
  margin-bottom: 12px;
`;

const FindUserInfoArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  font-size: 13px;
  & p {
    color: rgb(51, 51, 51);
    font-size: 13px;
    letter-spacing: -0.6px;
  }

  & span {
    width: 1px;
    height: 10px;
    margin: 3px 6px 0px;
    background-color: rgb(51, 51, 51);
  }
`;
const BtnWrapper = styled.div`
  margin-top: 28px;
  position: relative;
  height: 48px;
`;
