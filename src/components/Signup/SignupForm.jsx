import styled from "styled-components";
import { Btn } from "../Btn";
import { Input } from "../Input";

export default function SignupForm() {
  return (
    <div>
      <form style={{ marginTop: "10px" }}>
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
        {/* <StRow>
        <LabelWrapper>
          <label>
            아이디
            <span>*</span>
          </label>
        </LabelWrapper>
        <InputWrapper>
          <Input
            width="100%"
            height="48px;"
            type="text"
            name="userId"
            placeholder="아이디를 입력해주세요"
            autoComplete="off"
            maxLength="9"
          />
        </InputWrapper>
        <BtnWrapper visibility="visible">
          <Btn type="button">중복확인</Btn>
        </BtnWrapper>
      </StRow> */}
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

        {/* <StRow>
        <LabelWrapper>
          <label>주소</label>
          <span>*</span>
        </LabelWrapper>
        <InputWrapper>
          <Btn width="100%" fontSize="14px" fontWeight="500" type="button">
            <SearchImg
              src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
              alt="돋보기"
            />
            주소 검색
          </Btn>

          <Validation>
            <span>배송지에 따라 상품 정보가 달라질 수 있습니다.</span>
          </Validation>
        </InputWrapper>
        <BtnWrapper />
      </StRow> */}
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

const SearchImg = styled.img`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  vertical-align: middle;
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
