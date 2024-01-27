import { ServiceCenter, ServiceNav } from "./styles";
import logo from "./logo.svg";
import "./styles.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import NavHeader from "../Common/Header/NavHeader/NavHeader";

export default function Header() {
  return (
    <>
      <div className="HeadTop">
        <div className="UserHead">
          <>
            <HeadUserLink className="HeadUserLink" to="/signup">
              회원가입
            </HeadUserLink>

            <div className="HeadeVertical" />

            <HeadUserLink className="HeadUserLink" to="/login">
              로그인
            </HeadUserLink>
          </>

          <div className="HeadeVertical" />

          <ServiceCenter>
            <div className="HeadUserLink" to="/">
              yoonezi
              <div className="ServiceIcon" />
              <ServiceNav>
                <div>내 벨로그</div>
                <div>임시 글</div>
                <div>읽기 목록</div>
                <div>설정</div>
                <div>로그아웃</div>
              </ServiceNav>
            </div>
          </ServiceCenter>
        </div>

        <div className="HeadMain">
          <div className="HeadLeft">
            <a href="/">
              <img src={logo} alt="로고" to="/" />
            </a>
          </div>

          <div className="HeadCenter">
            <div className="SearchForm">
              <input placeholder="검색어를 입력해주세요" required />
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const HeadUserLink = styled(Link)`
  display: block;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  /* color: rgb(95, 0, 128); */
`;
