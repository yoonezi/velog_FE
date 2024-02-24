import styled from "styled-components";
import { Btn } from "../Btn";
import { Input } from "../Input";
import axios from "axios"; // axios 라이브러리 추가
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const nickname = formData.get("nickName");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPw");

    // 회원가입 요청을 보내는 axios 코드
    axios
      .post("http://localhost:8080/signup", {
        email,
        nickname,
        password,
        confirmPassword,
      })
      .then((response) => {
        console.log("Signup successful:", response.data);

        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        // 회원가입 실패 시의 처리
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
        <StRow>
          <LabelWrapper>
            <label>
              이메일
              <span>*</span>
            </label>
          </LabelWrapper>

          <InputWrapper>
            <Input
              type="text"
              name="email"
              placeholder="이메일을 입력해주세요"
              autoComplete="off"
            />
          </InputWrapper>
          <BtnWrapper />
          <BtnWrapper visibility="visible">
            <Btn type="button">중복확인</Btn>
          </BtnWrapper>
        </StRow>

        <StRow>
          <LabelWrapper>
            <label>
              닉네임
              <span>*</span>
            </label>
          </LabelWrapper>

          <InputWrapper>
            <Input
              type="text"
              name="nickName"
              placeholder="닉네임을 입력해주세요"
              autoComplete="off"
              maxLength="6"
            />
          </InputWrapper>
          <BtnWrapper />
        </StRow>
        <StRow>
          <LabelWrapper>
            <label>
              비밀번호
              <span>*</span>
            </label>
          </LabelWrapper>

          <InputWrapper>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="off"
              maxLength="21"
            />
          </InputWrapper>
          <BtnWrapper />
        </StRow>
        <StRow>
          <LabelWrapper>
            <label>
              비밀번호확인
              <span>*</span>
            </label>
          </LabelWrapper>

          <InputWrapper>
            <Input
              type="password"
              name="confirmPw"
              placeholder="비밀번호를 한번 더 입력해주세요"
              autoComplete="off"
              maxLength="21"
            />
          </InputWrapper>
          <BtnWrapper />
        </StRow>
        <Line />

        <SubmitBtnWrapper>
          <Btn
            fontSize="16px"
            fontWeight="500"
            width="240px"
            height="56px"
            color="rgb(33, 37, 41);"
            // backgroundColor="#rgb(33, 37, 41);"
          >
            가입하기
          </Btn>
        </SubmitBtnWrapper>
      </form>
    </div>
  );
}

const Line = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid rgb(51, 51, 51);
`;

export const StRow = styled.div`
  display: inline-flex;
  width: 94%;
  padding: 10px 20px;
`;

export const LabelWrapper = styled.div`
  display: block;
  width: 139px;
  padding-top: 12px;
  & label {
    color: rgb(51, 51, 51);
    font-size: 12px;
    line-height: 20px;
  }
  & span {
    color: #ee6a7b;
  }
`;

export const InputWrapper = styled.div`
  flex: 1 1 0%;
  position: relative;
`;

export const BtnWrapper = styled.div`
  width: 120px;
  margin-left: 8px;
  visibility: ${(props) => props.visibility || "hidden"};
`;

export const Validation = styled.div`
  padding: 10px 0;
  & p {
    font-size: ${(props) => props.fontSize || "13px"};
    color: ${(props) => props.color || " rgb(240, 63, 64)"};
    margin-top: -4px;
  }

  & span {
    display: block;
    /* margin-top: 10px; */
    font-size: 12px;
    line-height: 18px;
    color: rgb(102, 102, 102);
  }
`;
export const SubmitBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid rgb(247, 247, 247);
  padding: 40px 0px;
`;
